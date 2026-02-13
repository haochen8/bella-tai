import greenCurryImage from "@/assets/green-curry.jpg";
import mangoStickyRiceImage from "@/assets/mango-sticky-rice.jpg";
import padThaiImage from "@/assets/pad-thai.jpg";
import redCurryImage from "@/assets/red-curry.jpg";
import springRollsImage from "@/assets/spring-rolls.jpg";
import tomYumImage from "@/assets/tom-yum.jpg";

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
};

export const menuCategories = ["Alla", "Förrätter", "Curry", "Nudlar", "Soppor", "Desserter"];

export const menuItems: MenuItem[] = [
  { id: "crispy-spring-rolls", name: "Krispiga vårrullar", category: "Förrätter", price: 6.95, image: springRollsImage },
  { id: "satay-skewers", name: "Satay-kycklingspett", category: "Förrätter", price: 7.95, image: springRollsImage },
  { id: "green-curry", name: "Grön curry", category: "Curry", price: 12.95, image: greenCurryImage },
  { id: "red-curry", name: "Röd curry", category: "Curry", price: 12.95, image: redCurryImage },
  { id: "massaman-curry", name: "Massaman curry", category: "Curry", price: 13.95, image: redCurryImage },
  { id: "pad-thai", name: "Pad Thai", category: "Nudlar", price: 11.95, image: padThaiImage },
  { id: "pad-see-ew", name: "Pad See Ew", category: "Nudlar", price: 10.95, image: padThaiImage },
  { id: "tom-yum", name: "Tom Yum-soppa", category: "Soppor", price: 9.95, image: tomYumImage },
  { id: "tom-kha-gai", name: "Tom Kha Gai", category: "Soppor", price: 9.95, image: tomYumImage },
  { id: "mango-sticky-rice", name: "Mango sticky rice", category: "Desserter", price: 6.5, image: mangoStickyRiceImage },
  { id: "coconut-ice-cream", name: "Kokosglass", category: "Desserter", price: 5.5, image: mangoStickyRiceImage },
];

export const formatMenuPrice = (price: number): string => `£${price.toFixed(2)}`;
