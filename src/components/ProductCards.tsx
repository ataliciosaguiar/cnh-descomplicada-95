import { motion } from "framer-motion";
import { BookOpen, FileText, ClipboardCheck, Check } from "lucide-react";

const ProductCards = () => {
  const products = [
    {
      icon: BookOpen,
      title: "Guia Prático para Tirar a CNH sem Autoescola",
      color: "bg-primary",
      features: [
        "Explica o passo a passo completo do processo da CNH",
        "O que é obrigatório e o que não é",
        "Como funciona a prova teórica",
        "Principais erros que levam à reprovação",
        "Ideal para quem está começando do zero",
      ],
    },
    {
      icon: FileText,
      title: "Revisão da Matéria – Tudo o que Cai na Prova",
      color: "bg-secondary",
      features: [
        "Conteúdo resumido e direto ao ponto",
        "Ideal para revisar antes do exame",
        "Sinalização, prioridades, infrações, primeiros socorros",
        "Foco no que mais cai no DETRAN",
        "Organizado por temas para facilitar o estudo",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Questões do DETRAN – Padrão da Prova",
      color: "bg-accent",
      features: [
        "Questões objetivas e atualizadas",
        "Mesmo formato da prova oficial",
        "Excelente para treinar e ganhar confiança",
        "Ajuda a identificar pontos fracos antes do exame",
        "Gabarito com explicações",
      ],
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
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Material Completo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que vem no<br />
            <span className="text-primary">Combo 1ª CNH sem Autoescola</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Três materiais digitais em PDF, prontos para você estudar no celular, tablet ou computador.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col">
                {/* Icon Header */}
                <div className={`w-16 h-16 rounded-2xl ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-6 leading-tight">
                  {product.title}
                </h3>

                {/* Features List */}
                <ul className="space-y-4 flex-grow">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* PDF Badge */}
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    <FileText className="w-4 h-4" />
                    Arquivo PDF
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
