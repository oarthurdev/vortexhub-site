import { Target, Lightbulb, Users, Award, ArrowRight } from "lucide-react";

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const differentials = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Cada estratégia é desenvolvida com foco em gerar impacto real e mensurável no seu negócio"
    },
    {
      icon: Lightbulb,
      title: "Implementação Ágil",
      description: "Metodologia exclusiva para implementação rápida e eficiente de soluções digitais"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais certificados em IA, CRM e Marketing Digital à sua disposição"
    },
    {
      icon: Award,
      title: "Suporte Dedicado",
      description: "Acompanhamento contínuo e suporte técnico para garantir o sucesso do seu projeto"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Target className="w-4 h-4 mr-2" />
              Sobre a Vortex Hub
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Seu{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                Hub de Serviços
              </span>
              {" "}Digitais
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A Vortex Hub nasceu para ser o hub completo de soluções digitais que sua empresa precisa para crescer de forma organizada e sustentável.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Combinamos estratégias de marketing digital, automações inteligentes e implementação de CRM para criar um ecossistema integrado de crescimento. Nossa missão é organizar e potencializar cada oportunidade do seu negócio através da tecnologia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => scrollToSection('servicos')}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 inline-flex items-center justify-center group"
              >
                Nossos Serviços
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-white border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 inline-flex items-center justify-center"
              >
                Fale Conosco
              </button>
            </div>
          </div>

          {/* Differentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentials.map((differential, index) => {
              const IconComponent = differential.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{differential.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{differential.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nossa Missão
            </h3>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              "Ser o hub de soluções digitais que conecta estratégia, tecnologia e resultados, organizando o crescimento de oportunidades para empresas que buscam se destacar no mercado digital."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}