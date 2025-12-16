import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-card border-2 border-accent/20 shadow-lg">
            {/* Shield Icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center shadow-cta">
                <Shield className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>

            <div className="text-center pt-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Garantia total de 7 dias
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Se por qualquer motivo você sentir que o material não é para você, basta enviar um e-mail em até 7 dias após a compra e faremos o reembolso integral. Sem perguntas, sem burocracia.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-medium">Sem risco</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-medium">Reembolso fácil</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-medium">Sua satisfação garantida</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
