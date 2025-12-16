import { motion } from "framer-motion";
import { Check, Zap, Shield, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const OfferSection = () => {
  const includes = [
    "Guia Prático para Tirar a CNH sem Autoescola",
    "Revisão da Matéria – Tudo o que Cai na Prova",
    "Questões do DETRAN – Padrão da Prova",
    "Acesso imediato após o pagamento",
    "Garantia incondicional de 7 dias",
  ];

  return (
    <section className="py-20 lg:py-28 gradient-dark-section relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Oferta Especial
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Garanta seu acesso agora
            </h2>
            <p className="text-xl text-primary-foreground/70">
              Por tempo limitado com desconto exclusivo
            </p>
          </div>

          {/* Offer Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative p-8 md:p-12 rounded-3xl bg-card border border-border shadow-lg"
          >
            {/* Discount Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-block px-6 py-2 rounded-full bg-accent text-accent-foreground text-sm font-bold">
                60% OFF
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left - What's included */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  O que está incluso:
                </h3>
                <ul className="space-y-4">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - Pricing */}
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <span className="text-muted-foreground line-through text-xl">
                      R$ 49,90
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center lg:justify-start gap-1">
                    <span className="text-muted-foreground text-lg">Por apenas</span>
                  </div>
                  <div className="flex items-baseline justify-center lg:justify-start gap-2 mt-2">
                    <span className="text-5xl md:text-6xl font-extrabold text-accent">
                      R$ 19,90
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Pagamento único • Acesso vitalício
                  </p>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full gradient-cta text-accent-foreground font-bold text-lg px-8 py-7 rounded-xl shadow-cta hover:scale-105 transition-all duration-300 group"
                >
                  <a href="https://pay.kiwify.com.br/71be0VC" target="_blank" rel="noopener noreferrer">
                    GARANTIR MEU ACESSO AGORA
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>Compra segura</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>7 dias de garantia</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
