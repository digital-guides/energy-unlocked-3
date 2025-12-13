import { Heart } from "lucide-react";

const NotYourFaultSectionTrauma = () => {
  const points = [
    "el cuerpo se apaga cuando ha sostenido demasiado",
    "la fatiga extrema es un mecanismo de protección",
    "la energía vuelve cuando recuperas seguridad interna"
  ];

  return (
    <section className="py-2">
      <div className="container-article">
        <div className="bg-muted/50 rounded-xl p-4 md:p-5">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-salmon" />
            <h2 className="text-xl font-serif font-semibold text-primary">No es tu culpa</h2>
          </div>
          
          <p className="body-text text-muted-foreground mb-3">
            Los estudios de McEwen, Porges y Levine muestran que:
          </p>
          
          <ul className="space-y-2 mb-3">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-salmon mt-2 flex-shrink-0" />
                <span className="body-text text-foreground/80">{point}</span>
              </li>
            ))}
          </ul>
          
          <div className="border-t border-border/50 pt-3 space-y-1">
            <p className="text-lg font-medium text-primary">Tu cuerpo no falló.</p>
            <p className="text-lg font-semibold text-primary">Tu cuerpo te estaba cuidando.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotYourFaultSectionTrauma;
