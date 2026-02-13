import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useState } from "react";
import { useOrder } from "@/contexts/OrderContext";
import { formatMenuPrice } from "@/data/menu";
import { isOrderEmailConfigured, sendOrderConfirmationEmail } from "@/lib/order-email";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type CustomerForm = {
  name: string;
  email: string;
  phone: string;
};

const initialForm: CustomerForm = {
  name: "",
  email: "",
  phone: "",
};

const OrderSection = () => {
  const { lines, totalAmount, totalItems, increaseQuantity, decreaseQuantity, removeItem, clearOrder } = useOrder();
  const [form, setForm] = useState<CustomerForm>(initialForm);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailConfigured = isOrderEmailConfigured();

  const onFormChange = (field: keyof CustomerForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    if (lines.length === 0) {
      setStatus({ type: "error", message: "Du behöver lägga till minst en maträtt innan du kan skicka beställningen." });
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setStatus({ type: "error", message: "Fyll i namn, e-post och telefonnummer." });
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!emailIsValid) {
      setStatus({ type: "error", message: "Ange en giltig e-postadress." });
      return;
    }

    const phoneIsValid = /^(?=.*\d)[0-9+\s()-]{7,}$/.test(form.phone.trim());
    if (!phoneIsValid) {
      setStatus({ type: "error", message: "Ange ett giltigt telefonnummer." });
      return;
    }

    const orderId = `BT-${Date.now().toString().slice(-8)}`;

    setIsSubmitting(true);
    const result = await sendOrderConfirmationEmail({
      orderId,
      customerName: form.name.trim(),
      customerEmail: form.email.trim(),
      customerPhone: form.phone.trim(),
      lines,
      totalItems,
      totalAmount,
    });
    setIsSubmitting(false);

    if (!result.ok) {
      setStatus({ type: "error", message: result.message });
      return;
    }

    setStatus({
      type: "success",
      message: `Beställning mottagen. Bekräftelsemail skickat till ${form.email.trim()}. Ordernummer: ${orderId}.`,
    });
    clearOrder();
    setForm(initialForm);
  };

  return (
    <section id="bestallning" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Beställning
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Din <span className="text-gradient-gold">beställning</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Välj rätter i menyn, kontrollera beställningen och bekräfta med dina kontaktuppgifter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-6 shadow-soft">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Valda rätter</h3>

            {lines.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border p-6 text-center">
                <ShoppingBag className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
                <p className="text-muted-foreground mb-4">Din beställning är tom just nu.</p>
                <Button asChild variant="outline">
                  <a href="#menu">Gå till menyn</a>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {lines.map((line) => (
                  <div key={line.id} className="rounded-xl border border-border p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium text-foreground">{line.name}</p>
                        <p className="text-sm text-muted-foreground">{formatMenuPrice(line.price)} / st</p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => removeItem(line.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button type="button" variant="outline" size="icon" className="h-8 w-8" onClick={() => decreaseQuantity(line.id)}>
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="min-w-8 text-center font-medium">{line.quantity}</span>
                        <Button type="button" variant="outline" size="icon" className="h-8 w-8" onClick={() => increaseQuantity(line.id)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="font-serif text-lg font-bold text-primary">
                        {formatMenuPrice(line.quantity * line.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 border-t border-border pt-4 space-y-2">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Antal rätter</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex items-center justify-between text-lg font-semibold text-foreground">
                <span>Totalt</span>
                <span>{formatMenuPrice(totalAmount)}</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-soft">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Bekräfta beställning</h3>

            {!emailConfigured && (
              <p className="mb-4 rounded-md border border-amber-300 bg-amber-100 px-3 py-2 text-sm text-amber-900">
                E-postbekräftelse är inte konfigurerad ännu. Lägg till EmailJS-variabler i <code>.env.local</code>.
              </p>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="order-name">Namn</Label>
                <Input
                  id="order-name"
                  placeholder="För- och efternamn"
                  value={form.name}
                  onChange={(event) => onFormChange("name", event.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="order-email">E-post</Label>
                <Input
                  id="order-email"
                  type="email"
                  placeholder="din@epost.se"
                  value={form.email}
                  onChange={(event) => onFormChange("email", event.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="order-phone">Telefonnummer</Label>
                <Input
                  id="order-phone"
                  type="tel"
                  placeholder="+46 70 123 45 67"
                  value={form.phone}
                  onChange={(event) => onFormChange("phone", event.target.value)}
                  required
                />
              </div>

              <Button type="submit" variant="gold" size="xl" className="w-full" disabled={isSubmitting || lines.length === 0}>
                {isSubmitting ? "Skickar bekräftelse..." : "Bekräfta och skicka mail"}
              </Button>

              {status && (
                <p
                  className={`rounded-md px-3 py-2 text-sm ${
                    status.type === "success"
                      ? "border border-green-300 bg-green-100 text-green-900"
                      : "border border-red-300 bg-red-100 text-red-900"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
