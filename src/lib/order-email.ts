import type { OrderLine } from "@/contexts/OrderContext";
import { formatMenuPrice } from "@/data/menu";

type SendOrderConfirmationInput = {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  lines: OrderLine[];
  totalItems: number;
  totalAmount: number;
};

type SendOrderConfirmationResult = {
  ok: boolean;
  message: string;
};

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

const getEmailConfig = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

  return {
    serviceId,
    templateId,
    publicKey,
    configured: Boolean(serviceId && templateId && publicKey),
  };
};

export const isOrderEmailConfigured = (): boolean => getEmailConfig().configured;

export const sendOrderConfirmationEmail = async (
  input: SendOrderConfirmationInput,
): Promise<SendOrderConfirmationResult> => {
  const config = getEmailConfig();
  if (!config.configured || !config.serviceId || !config.templateId || !config.publicKey) {
    return {
      ok: false,
      message:
        "E-posttjänsten är inte konfigurerad ännu. Lägg till VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID och VITE_EMAILJS_PUBLIC_KEY i .env.local.",
    };
  }

  const orderItems = input.lines
    .map((line) => `- ${line.name} x${line.quantity} (${formatMenuPrice(line.price)} / st)`)
    .join("\n");

  const payload = {
    service_id: config.serviceId,
    template_id: config.templateId,
    user_id: config.publicKey,
    template_params: {
      order_id: input.orderId,
      order_date: new Date().toLocaleString("sv-SE"),
      customer_name: input.customerName,
      customer_email: input.customerEmail,
      customer_phone: input.customerPhone,
      order_items: orderItems,
      total_items: String(input.totalItems),
      total_price: formatMenuPrice(input.totalAmount),
      to_email: input.customerEmail,
      reply_to: input.customerEmail,
      restaurant_name: "Bella Tai",
      city: "Gävle",
    },
  };

  try {
    const response = await fetch(EMAILJS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      return {
        ok: false,
        message: `Kunde inte skicka bekräftelsemail (${response.status}). ${text || "Okänt fel."}`,
      };
    }

    return {
      ok: true,
      message: "Bekräftelsemail skickat.",
    };
  } catch {
    return {
      ok: false,
      message: "Nätverksfel vid skickning av bekräftelsemail.",
    };
  }
};
