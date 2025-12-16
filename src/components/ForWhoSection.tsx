import { motion } from "framer-motion";
import { Check, Car, Wallet, Clock, Shield } from "lucide-react";

const ForWhoSection = () => {
  const audiences = [
    {
      icon: Car,
      text: "Quem vai tirar a primeira CNH",
    },
    {
      icon: Wallet,
      text: "Quem quer economizar sem autoescola",
    },
    {
      icon: Clock,
      text: "Quem prefere estudar no próprio ritmo",
    },
    {
      icon: Shield,
      text: "Quem quer ir para a prova com mais segurança",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
              Público-alvo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Para quem este<br />
              <span className="text-secondary">combo é indicado</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Se você se encaixa em uma ou mais dessas situações, o Combo 1ª CNH sem Autoescola foi feito especialmente para você.
            </p>

            {/* Audiences List */}
            <div className="space-y-5">
              {audiences.map((audience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-secondary/30 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <audience.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
                  </div>
                  <span className="text-foreground font-medium text-lg">
                    {audience.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative p-8 md:p-12 rounded-3xl gradient-dark-section overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/20 mb-6">
                    <Check className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                    Comece a estudar hoje mesmo
                  </h3>
                  <p className="text-primary-foreground/70 text-lg mb-8 leading-relaxed">
                    Não deixe para a última hora. Quanto antes você começar, mais preparado estará no dia da prova.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                      <div className="text-3xl font-bold text-accent mb-1">3</div>
                      <div className="text-sm text-primary-foreground/70">PDFs Completos</div>
                    </div>
                    <div className="p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                      <div className="text-3xl font-bold text-accent mb-1">100%</div>
                      <div className="text-sm text-primary-foreground/70">Digital</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
