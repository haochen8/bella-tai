import { Star } from "lucide-react";
import greenCurryImage from "@/assets/green-curry.jpg";
import tomYumImage from "@/assets/tom-yum.jpg";
import springRollsImage from "@/assets/spring-rolls.jpg";

const dishes = [
  {
    name: "Green Curry",
    description: "Creamy coconut curry with Thai basil, bamboo shoots & your choice of protein",
    price: "£12.95",
    image: greenCurryImage,
    rating: 4.9,
    tag: "Chef's Pick",
  },
  {
    name: "Tom Yum Soup",
    description: "Hot & sour soup with lemongrass, galangal, lime leaves & fresh prawns",
    price: "£9.95",
    image: tomYumImage,
    rating: 4.8,
    tag: "Spicy",
  },
  {
    name: "Crispy Spring Rolls",
    description: "Golden fried rolls with vegetables served with sweet chili sauce",
    price: "£6.95",
    image: springRollsImage,
    rating: 4.7,
    tag: "Popular",
  },
];

const FeaturedDishes = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
            Customer Favorites
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient-gold">Dishes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our most loved Thai dishes, prepared with authentic recipes and the freshest ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={dish.name}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {dish.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-bold text-foreground">{dish.name}</h3>
                  <div className="flex items-center gap-1 text-secondary">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{dish.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif font-bold text-primary">{dish.price}</span>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
