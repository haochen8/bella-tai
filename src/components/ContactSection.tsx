import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Kontaktinformation */}
          <div>
            <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Kontakta oss
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Redo att <span className="text-gradient-gold">beställa?</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Oavsett om du längtar efter en snabb lunch eller planerar en familjemiddag,
              finns vi här för att servera dig den bästa thailändska maten i stan.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-foreground/10 rounded-lg p-3">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary-foreground mb-1">Adress</h4>
                  <p className="text-primary-foreground/70">123 High Street, London, SW1A 1AA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-foreground/10 rounded-lg p-3">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary-foreground mb-1">Telefon</h4>
                  <p className="text-primary-foreground/70">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-foreground/10 rounded-lg p-3">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary-foreground mb-1">E-post</h4>
                  <p className="text-primary-foreground/70">hello@bellathai.co.uk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-foreground/10 rounded-lg p-3">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary-foreground mb-1">Öppettider</h4>
                  <p className="text-primary-foreground/70">Mån-Fre: 11:00 - 22:00</p>
                  <p className="text-primary-foreground/70">Lör-Sön: 12:00 - 23:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Beställnings-CTA */}
          <div className="bg-card rounded-2xl p-8 shadow-elevated">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Beställ online
            </h3>
            <p className="text-muted-foreground mb-6">
              Slipp kön och beställ dina favoriträtter online för avhämtning eller leverans.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>Fri leverans på beställningar över £30</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>10% rabatt på din första onlinebeställning</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>Samla lojalitetspoäng vid varje köp</span>
              </div>
            </div>

            <Button asChild variant="gold" size="xl" className="w-full">
              <a href="#bestallning">Starta din beställning</a>
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Eller ring oss på <span className="text-primary font-medium">(123) 456-7890</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
