import { Button } from "./ui/button";
import padThaiImage from "@/assets/pad-thai.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Bakgrundsbild med överlägg */}
      <div className="absolute inset-0 z-0">
        <img
          src={padThaiImage}
          alt="Utsökt thailändsk mat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Logobadge */}
          <div className="inline-block bg-secondary/90 px-4 py-2 rounded-full mb-6 animate-fade-up">
            <span className="text-secondary-foreground font-medium text-sm tracking-wide uppercase">
              Autentisk thailändsk mat
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Smaka på <span className="text-gradient-gold">essensen</span> av Thailand
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Upplev autentiska thailändska smaker tillagade med färska ingredienser och traditionella recept, levererade direkt till din dörr.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Beställ takeaway
            </Button>
            <Button variant="greenOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Se menyn
            </Button>
          </div>

          {/* Statistik */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="text-3xl font-serif font-bold text-primary-foreground">15+</p>
              <p className="text-primary-foreground/70 text-sm">Års erfarenhet</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-primary-foreground">50+</p>
              <p className="text-primary-foreground/70 text-sm">Thailändska rätter</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-primary-foreground">4.9★</p>
              <p className="text-primary-foreground/70 text-sm">Kundbetyg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
