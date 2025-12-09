import heroWoman from "@/assets/hero-woman-fatigued.jpg";
import heroNervousSystem from "@/assets/hero-nervous-system.jpg";

const HeroSection = () => {
  return (
    <section className="section-spacing bg-muted/50">
      <div className="container-article">
        <div className="text-center mb-10 fade-in">
          <h1 className="title-hero mb-6">
            "No había perdido mi vida… había perdido mi energía."
          </h1>
          <p className="body-text text-muted-foreground max-w-xl mx-auto">
            Una explicación desde la neurociencia sobre por qué tu motivación, claridad mental y ganas pueden apagarse sin razón aparente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in stagger-2">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src={heroWoman} 
              alt="Mujer experimentando fatiga y agotamiento emocional" 
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src={heroNervousSystem} 
              alt="Ilustración del sistema nervioso en modo conservación de energía" 
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
