import heroImage from "@/assets/hero-adv5.jpg";

const HeroSectionTrauma = () => {
  return (
    <section className="pt-6 pb-2">
      <div className="container-article text-center">
        <h1 className="text-2xl md:text-4xl font-serif font-bold text-primary leading-tight mb-3 fade-in">
          "Descansaba… pero nunca me recuperaba."
        </h1>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto fade-in stagger-1">
          Una explicación basada en neurofisiología sobre por qué puedes sentir cansancio extremo incluso durmiendo bien.
        </p>
        
        <div className="fade-in stagger-2 mt-4">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src={heroImage} 
              alt="Mujer agotada con café y despertando cansada" 
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTrauma;
