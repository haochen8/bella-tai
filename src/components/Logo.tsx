const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <div className="bg-gradient-green px-4 py-2 rounded-lg">
        <span className="font-serif text-2xl font-bold text-gradient-gold tracking-wide">
          Bella Thai
        </span>
      </div>
    </div>
  );
};

export default Logo;
