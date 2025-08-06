import { CheckCircle, Clock, Users, TrendingUp } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Foco em Crescimento",
      description: "Estratégias desenvolvidas para gerar impacto real e crescimento sustentável no seu negócio"
    },
    {
      icon: Clock,
      title: "Implementação Ágil",
      description: "Metodologia eficiente para implementação rápida de soluções digitais integradas"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais certificados em IA, CRM e Marketing Digital dedicados ao seu projeto"
    },
    {
      icon: CheckCircle,
      title: "Suporte Dedicado",
      description: "Acompanhamento contínuo e suporte técnico personalizado para garantir seus resultados"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Diferenciais
          </h2>
          <div className="section-divider mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformamos ideias em resultados através de soluções digitais integradas e personalizadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="gradient-purple text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Comece Sua Transformação Agora
          </button>
        </div>
      </div>
    </section>
  );
}