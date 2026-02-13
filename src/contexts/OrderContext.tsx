import type { MenuItem } from "@/data/menu";
import React from "react";

const STORAGE_KEY = "bella-tai-order";

export type OrderLine = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type OrderContextValue = {
  lines: OrderLine[];
  totalItems: number;
  totalAmount: number;
  addItem: (item: MenuItem) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  clearOrder: () => void;
};

const OrderContext = React.createContext<OrderContextValue | undefined>(undefined);

const parseStoredLines = (): OrderLine[] => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as OrderLine[];
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .filter((line) => line && typeof line.id === "string")
      .map((line) => ({
        id: line.id,
        name: line.name,
        price: Number(line.price),
        quantity: Math.max(1, Number(line.quantity) || 1),
      }));
  } catch {
    return [];
  }
};

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [lines, setLines] = React.useState<OrderLine[]>(parseStoredLines);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  const addItem = React.useCallback((item: MenuItem) => {
    setLines((prev) => {
      const existing = prev.find((line) => line.id === item.id);
      if (existing) {
        return prev.map((line) => (line.id === item.id ? { ...line, quantity: line.quantity + 1 } : line));
      }

      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
  }, []);

  const increaseQuantity = React.useCallback((itemId: string) => {
    setLines((prev) => prev.map((line) => (line.id === itemId ? { ...line, quantity: line.quantity + 1 } : line)));
  }, []);

  const decreaseQuantity = React.useCallback((itemId: string) => {
    setLines((prev) =>
      prev
        .map((line) => (line.id === itemId ? { ...line, quantity: line.quantity - 1 } : line))
        .filter((line) => line.quantity > 0),
    );
  }, []);

  const removeItem = React.useCallback((itemId: string) => {
    setLines((prev) => prev.filter((line) => line.id !== itemId));
  }, []);

  const clearOrder = React.useCallback(() => {
    setLines([]);
  }, []);

  const totalItems = React.useMemo(() => lines.reduce((sum, line) => sum + line.quantity, 0), [lines]);
  const totalAmount = React.useMemo(() => lines.reduce((sum, line) => sum + line.quantity * line.price, 0), [lines]);

  const value = React.useMemo<OrderContextValue>(
    () => ({
      lines,
      totalItems,
      totalAmount,
      addItem,
      increaseQuantity,
      decreaseQuantity,
      removeItem,
      clearOrder,
    }),
    [lines, totalItems, totalAmount, addItem, increaseQuantity, decreaseQuantity, removeItem, clearOrder],
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};

export const useOrder = (): OrderContextValue => {
  const context = React.useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder måste användas inom en OrderProvider.");
  }

  return context;
};
