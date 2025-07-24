import { MessageCircle, ArrowDown, CheckCircle } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    "Especialistas Certificados em IA e CRM",
    "Metodologia Exclusiva Comprovada",
    "Resultados em até 90 dias",
    "Suporte Completo Pós-Implementação"
  ];

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Acelere o{" "}
            <span className="text-purple-600">
              Crescimento
            </span>
            <br />
            do Seu Negócio
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transformamos sua estratégia comercial com <strong>Marketing Digital</strong>, <strong>Inteligência Artificial</strong> e <strong>CRM</strong> para maximizar resultados e automatizar processos
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center text-gray-700 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-3 shadow-sm">
                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('contato')}
              className="gradient-purple text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consultoria Gratuita
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center text-lg"
            >
              <ArrowDown className="w-5 h-5 mr-2" />
              Conheça os Serviços
            </button>
          </div>
        </div>



      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L1440 120L1440 0C1440 0 1140 60 720 60C300 60 0 0 0 0L0 120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
