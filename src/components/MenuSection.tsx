import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useOrder } from "@/contexts/OrderContext";
import { formatMenuPrice, menuCategories, menuItems } from "@/data/menu";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("Alla");
  const { addItem, lines } = useOrder();

  const filteredItems = activeCategory === "Alla"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  const quantityByItemId = new Map(lines.map((line) => [line.id, line.quantity]));

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Vår meny
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Utforska våra <span className="text-gradient-gold">thailändska rätter</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Från aromatiska curryrätter till klassiska nudlar, upptäck hela utbudet av autentiska thailändska smaker
          </p>
        </div>

        {/* Kategorifilter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menyrutnät */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-foreground">{item.name}</h3>
                    <span className="text-xs text-muted-foreground">{item.category}</span>
                  </div>
                  <span className="text-lg font-serif font-bold text-primary">{formatMenuPrice(item.price)}</span>
                </div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="text-xs text-muted-foreground">
                    {quantityByItemId.get(item.id) ? `${quantityByItemId.get(item.id)} st i beställning` : "Inte vald ännu"}
                  </span>
                  <Button size="sm" onClick={() => addItem(item)}>
                    Lägg till
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
