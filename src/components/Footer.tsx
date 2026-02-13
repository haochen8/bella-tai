import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-background/70 max-w-sm leading-relaxed">
              Vi tar de autentiska smakerna från Thailand till din dörr.
              Kvalitetsingredienser, traditionella recept, oförglömlig smak.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-background/10 p-2 rounded-full hover:bg-background/20 transition-colors">
                <Facebook className="w-5 h-5 text-background" />
              </a>
              <a href="#" className="bg-background/10 p-2 rounded-full hover:bg-background/20 transition-colors">
                <Instagram className="w-5 h-5 text-background" />
              </a>
              <a href="#" className="bg-background/10 p-2 rounded-full hover:bg-background/20 transition-colors">
                <Twitter className="w-5 h-5 text-background" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-background mb-4">Snabblänkar</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-background/70 hover:text-background transition-colors">Meny</a></li>
              <li><a href="#about" className="text-background/70 hover:text-background transition-colors">Om oss</a></li>
              <li><a href="#contact" className="text-background/70 hover:text-background transition-colors">Kontakt</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Beställ online</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-background mb-4">Öppettider</h4>
            <ul className="space-y-2 text-background/70">
              <li className="flex justify-between">
                <span>Mån - Fre</span>
                <span>11:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Lördag</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Söndag</span>
                <span>12:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © 2024 Bella Thai. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
