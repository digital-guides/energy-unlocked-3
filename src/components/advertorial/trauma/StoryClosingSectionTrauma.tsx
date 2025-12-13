const StoryClosingSectionTrauma = () => {
  return (
    <section className="py-2">
      <div className="container-article">
        <div className="salmon-box">
          <p className="text-lg md:text-xl font-serif text-primary mb-2">
            Hasta que entendí:
          </p>
          
          <p className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-3">
            No estaba cansada porque hacía mucho.<br />
            Estaba cansada porque mi sistema nervioso hacía demasiado.
          </p>
          
          <div className="space-y-2 body-text text-foreground/85">
            <p className="text-muted-foreground">
              Después de largos periodos de estrés, el cuerpo puede entrar en un estado llamado <strong className="text-primary">colapso fisiológico</strong>.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-1">
              <span className="font-semibold text-primary">No era flojera.</span>
              <span className="font-semibold text-primary">Era biología.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryClosingSectionTrauma;
