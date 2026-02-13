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
              Bringing the authentic flavors of Thailand to your doorstep. 
              Quality ingredients, traditional recipes, unforgettable taste.
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
            <h4 className="font-serif font-bold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-background/70 hover:text-background transition-colors">Menu</a></li>
              <li><a href="#about" className="text-background/70 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-background/70 hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Order Online</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-background mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-background/70">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>11am - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>12pm - 11pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12pm - 10pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © 2024 Bella Thai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
