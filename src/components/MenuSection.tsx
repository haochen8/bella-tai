import { useState } from "react";
import redCurryImage from "@/assets/red-curry.jpg";
import greenCurryImage from "@/assets/green-curry.jpg";
import padThaiImage from "@/assets/pad-thai.jpg";
import tomYumImage from "@/assets/tom-yum.jpg";
import springRollsImage from "@/assets/spring-rolls.jpg";
import mangoStickyRiceImage from "@/assets/mango-sticky-rice.jpg";

const categories = ["All", "Starters", "Curries", "Noodles", "Soups", "Desserts"];

const menuItems = [
  { name: "Crispy Spring Rolls", category: "Starters", price: "£6.95", image: springRollsImage },
  { name: "Satay Chicken Skewers", category: "Starters", price: "£7.95", image: springRollsImage },
  { name: "Green Curry", category: "Curries", price: "£12.95", image: greenCurryImage },
  { name: "Red Curry", category: "Curries", price: "£12.95", image: redCurryImage },
  { name: "Massaman Curry", category: "Curries", price: "£13.95", image: redCurryImage },
  { name: "Pad Thai", category: "Noodles", price: "£11.95", image: padThaiImage },
  { name: "Pad See Ew", category: "Noodles", price: "£10.95", image: padThaiImage },
  { name: "Tom Yum Soup", category: "Soups", price: "£9.95", image: tomYumImage },
  { name: "Tom Kha Gai", category: "Soups", price: "£9.95", image: tomYumImage },
  { name: "Mango Sticky Rice", category: "Desserts", price: "£6.50", image: mangoStickyRiceImage },
  { name: "Coconut Ice Cream", category: "Desserts", price: "£5.50", image: mangoStickyRiceImage },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Menu
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Our <span className="text-gradient-gold">Thai Dishes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From aromatic curries to classic noodles, discover the full range of authentic Thai flavors
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
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

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.name}
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
                  <span className="text-lg font-serif font-bold text-primary">{item.price}</span>
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
