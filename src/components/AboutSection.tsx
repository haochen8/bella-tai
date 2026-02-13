import { Utensils, Leaf, Clock, Award } from "lucide-react";
import greenCurryImage from "@/assets/green-curry.jpg";

const features = [
  {
    icon: Utensils,
    title: "Authentic Recipes",
    description: "Traditional Thai recipes passed down through generations",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "Locally sourced produce and imported Thai herbs & spices",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick preparation and delivery within 30-45 minutes",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized as the best Thai restaurant in the area",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={greenCurryImage}
                alt="Thai cooking"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-elevated max-w-xs hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="bg-secondary rounded-full p-3">
                  <Award className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-serif font-bold text-foreground">15+ Years</p>
                  <p className="text-sm text-muted-foreground">Serving authentic Thai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bringing <span className="text-gradient-gold">Thailand</span> to Your Table
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Bella Thai, we believe in preserving the authentic flavors of Thailand while 
              making them accessible to our local community. Our chefs, trained in the culinary 
              traditions of Bangkok and Chiang Mai, craft each dish with care and passion.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From the aromatic lemongrass in our Tom Yum to the perfectly balanced sweetness 
              of our Pad Thai, every ingredient is thoughtfully selected to transport you 
              straight to the streets of Thailand.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 h-fit">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
