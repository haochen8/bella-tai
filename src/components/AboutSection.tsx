import { Utensils, Leaf, Clock, Award } from "lucide-react";
import greenCurryImage from "@/assets/green-curry.jpg";

const features = [
  {
    icon: Utensils,
    title: "Autentiska recept",
    description: "Traditionella thailändska recept som gått i arv genom generationer",
  },
  {
    icon: Leaf,
    title: "Färska ingredienser",
    description: "Lokalt odlade råvaror och importerade thailändska örter och kryddor",
  },
  {
    icon: Clock,
    title: "Snabb leverans",
    description: "Snabb tillagning och leverans inom 30-45 minuter",
  },
  {
    icon: Award,
    title: "Prisbelönt",
    description: "Utsedd till områdets bästa thailändska restaurang",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bildsida */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={greenCurryImage}
                alt="Thailändsk matlagning"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            {/* Flytande kort */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-elevated max-w-xs hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="bg-secondary rounded-full p-3">
                  <Award className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-serif font-bold text-foreground">15+ år</p>
                  <p className="text-sm text-muted-foreground">Serverar autentisk thailändsk mat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Innehållssida */}
          <div>
            <span className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
              Vår historia
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vi tar <span className="text-gradient-gold">Thailand</span> till ditt bord
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              På Bella Thai tror vi på att bevara de autentiska smakerna från Thailand samtidigt
              som vi gör dem tillgängliga för vårt lokala område. Våra kockar, utbildade i de kulinariska
              traditionerna från Bangkok och Chiang Mai, tillagar varje rätt med omsorg och passion.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Från det aromatiska citrongräset i vår Tom Yum till den perfekt balanserade sötman
              i vår Pad Thai väljs varje ingrediens noggrant för att ta dig
              direkt till Thailands gator.
            </p>

            {/* Funktionsrutnät */}
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
