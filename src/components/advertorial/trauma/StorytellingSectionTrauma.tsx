const StorytellingSectionTrauma = () => {
  return (
    <section className="py-3">
      <div className="container-article">
        <div className="space-y-3 body-text">
          <p className="text-xl md:text-2xl font-serif text-primary font-medium">
            Había días en los que despertaba más cansada de lo que me acostaba.
          </p>
          
          <ul className="space-y-1.5 pl-4">
            {[
              "Dormía 8 horas y seguía exhausta.",
              "El café no servía.",
              "El ejercicio me dejaba peor.",
              "Mi cuerpo se sentía pesado, lento, como si no pudiera arrancar."
            ].map((item, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 text-foreground/80"
              >
                <span className="w-2 h-2 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="quote-block py-2 my-3">
            <p className="text-lg">
              Pensé que era estrés. Hormonas. Anemia. Falta de hábitos.
            </p>
          </div>
          
          <p className="text-lg font-medium text-primary">Pero nada encajaba.</p>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSectionTrauma;
