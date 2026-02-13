import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to <span className="text-gradient-gold">Order?</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Whether you're craving a quick lunch or planning a family dinner, 
              we're here to serve you the best Thai food in town.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-foreground/10 rounded-lg p-3">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary-foreground mb-1">Location</h4>
                  <p className="text-primary-foreground/70">123 High Street, London, SW1A 1AA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-foreground/10 rounded-lg p-3">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary-foreground mb-1">Phone</h4>
                  <p className="text-primary-foreground/70">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-foreground/10 rounded-lg p-3">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary-foreground mb-1">Email</h4>
                  <p className="text-primary-foreground/70">hello@bellathai.co.uk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-foreground/10 rounded-lg p-3">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary-foreground mb-1">Opening Hours</h4>
                  <p className="text-primary-foreground/70">Mon-Fri: 11am - 10pm</p>
                  <p className="text-primary-foreground/70">Sat-Sun: 12pm - 11pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order CTA */}
          <div className="bg-card rounded-2xl p-8 shadow-elevated">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Order Online
            </h3>
            <p className="text-muted-foreground mb-6">
              Skip the queue and order your favorite Thai dishes online for pickup or delivery.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>Free delivery on orders over £30</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>10% off your first online order</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>Earn loyalty points with every purchase</span>
              </div>
            </div>

            <Button variant="gold" size="xl" className="w-full">
              Start Your Order
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Or call us at <span className="text-primary font-medium">(123) 456-7890</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
