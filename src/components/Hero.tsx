import { Button } from "./ui/button";
import padThaiImage from "@/assets/pad-thai.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={padThaiImage}
          alt="Delicious Thai Food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Logo Badge */}
          <div className="inline-block bg-secondary/90 px-4 py-2 rounded-full mb-6 animate-fade-up">
            <span className="text-secondary-foreground font-medium text-sm tracking-wide uppercase">
              Authentic Thai Cuisine
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Taste the <span className="text-gradient-gold">Essence</span> of Thailand
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Experience authentic Thai flavors crafted with fresh ingredients and traditional recipes, delivered straight to your door.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Order Takeaway
            </Button>
            <Button variant="greenOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Menu
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="text-3xl font-serif font-bold text-primary-foreground">15+</p>
              <p className="text-primary-foreground/70 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-primary-foreground">50+</p>
              <p className="text-primary-foreground/70 text-sm">Thai Dishes</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-primary-foreground">4.9★</p>
              <p className="text-primary-foreground/70 text-sm">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
