const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <div className="bg-gradient-green px-4 py-2 rounded-lg">
        <div className="flex flex-col items-center leading-tight">
          <span className="font-serif text-2xl font-bold text-gradient-gold tracking-wide">
            Bella Tai
          </span>
          <span className="text-xs font-medium text-primary-foreground/90 tracking-[0.2em] uppercase">
            Gävle
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
