import { motion } from "framer-motion";
import { Wallet, BookOpen, Clock, Target, ThumbsUp, FileText } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Wallet,
      title: "Economia no processo",
      description: "Estudar por conta própria pode reduzir significativamente seus gastos",
    },
    {
      icon: BookOpen,
      title: "Estudo mais organizado",
      description: "Material estruturado para você não perder tempo com conteúdo irrelevante",
    },
    {
      icon: Clock,
      title: "Revisão rápida e eficiente",
      description: "Conteúdo resumido para quem precisa revisar antes da prova",
    },
    {
      icon: Target,
      title: "Treino com questões reais",
      description: "Pratique com questões no padrão do DETRAN",
    },
    {
      icon: ThumbsUp,
      title: "Mais confiança no dia da prova",
      description: "Vá preparado e tranquilo sabendo que estudou o que realmente cai",
    },
    {
      icon: FileText,
      title: "Material simples e direto",
      description: "Fácil de entender, sem enrolação ou termos complicados",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
            Vantagens
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Benefícios reais<br />
            <span className="text-accent">para você</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O Combo 1ª CNH foi pensado para facilitar seu caminho até a aprovação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative p-6 rounded-2xl bg-card border border-border hover:border-accent/30 shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
