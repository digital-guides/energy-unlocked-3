import { ArrowRight, Clock } from "lucide-react";

const CTASectionTrauma = () => {
  return (
    <section className="py-4 bg-gradient-to-b from-muted/50 to-background">
      <div className="container-article text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-2">
            ¿Qué tipo de desregulación está agotando tu energía?
          </h2>
          
          <p className="body-text text-muted-foreground mb-4">
            Haz el Test y descubre qué tipo de desregulación está agotando tu energía.
          </p>
          
          <a 
            href="https://navegador-del-sistema-nervioso.lovable.app"
            className="cta-button group mb-2 inline-flex"
          >
            <span>Hacer el Test Ahora</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            <span>Te tomará menos de 2 minutos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASectionTrauma;
