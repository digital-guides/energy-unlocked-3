import { Brain } from "lucide-react";

const ScientificSectionTrauma = () => {
  const symptoms = [
    "fatiga persistente",
    "intolerancia al estrés",
    "problemas de concentración",
    "lentitud cognitiva",
    "desmotivación severa"
  ];

  return (
    <section className="py-3 bg-muted/30">
      <div className="container-article">
        <div className="flex items-center gap-2 mb-3">
          <Brain className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-primary">¿Qué estaba pasando realmente?</h2>
        </div>
        
        <div className="space-y-3 body-text">
          <p className="text-muted-foreground">
            El investigador <strong className="text-primary">Stephen Porges</strong> explica que cuando el sistema nervioso ya no puede sostener la activación, cae en un estado de "freeze" o colapso para proteger los órganos vitales.
          </p>
          
          <p className="text-muted-foreground">
            El neuroendocrinólogo <strong className="text-primary">Bruce McEwen</strong> lo describe como un agotamiento de recursos energéticos por carga alostática.
          </p>
          
          <p className="text-muted-foreground font-medium">Esto provoca:</p>
          
          <ul className="space-y-1.5 pl-4">
            {symptoms.map((symptom, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <span className="text-foreground/80">{symptom}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-muted-foreground">
            La psicología somática de <strong className="text-primary">Peter Levine</strong> también muestra que el cuerpo congelado reduce energía para evitar colapsos mayores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScientificSectionTrauma;
