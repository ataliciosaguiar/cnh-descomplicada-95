import { motion } from "framer-motion";
import { AlertTriangle, BookOpen, Target, TrendingUp } from "lucide-react";

const WhySection = () => {
  const reasons = [
    {
      icon: AlertTriangle,
      title: "Não entendem o processo",
      description: "Muitos candidatos não sabem como funciona a jornada completa da CNH",
    },
    {
      icon: BookOpen,
      title: "Estudam sem direção",
      description: "Perdem tempo com conteúdo que não cai na prova",
    },
    {
      icon: Target,
      title: "Falta de foco",
      description: "Não sabem quais temas têm mais peso no exame",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por que estudar sem autoescola<br />
            <span className="text-primary">exige o material certo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hoje é possível estudar de forma independente e economizar bastante no processo da CNH. Porém, muitos candidatos acabam reprovando porque não têm acesso ao conhecimento certo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 md:p-12 rounded-3xl gradient-dark-section text-primary-foreground"
        >
          <div className="flex items-start gap-6">
            <div className="hidden md:flex w-16 h-16 rounded-2xl bg-accent/20 items-center justify-center flex-shrink-0">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                O Combo 1ª CNH resolve exatamente isso
              </h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Criamos um material completo que explica todo o processo, apresenta a matéria de forma clara e organizada, e ainda oferece questões no padrão do DETRAN para você treinar e ir preparado para o exame. Chega de perder tempo e dinheiro sem saber por onde começar.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
