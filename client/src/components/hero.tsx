import { MessageCircle, ArrowDown, CheckCircle, Zap, Users, TrendingUp, Award } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: "500+", label: "Projetos Entregues", icon: Award },
    { number: "98%", label: "Taxa de Sucesso", icon: TrendingUp },
    { number: "200+", label: "Clientes Satisfeitos", icon: Users },
    { number: "24/7", label: "Suporte Disponível", icon: Zap }
  ];

  const highlights = [
    "Hub completo de soluções digitais",
    "Especialistas certificados em IA e CRM",
    "Metodologia comprovada e exclusiva",
    "Resultados mensuráveis em até 90 dias"
  ];

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-16">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Seu{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Hub
            </span>
            {" "}de
            <br />
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Crescimento Digital
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Organizando o crescimento de oportunidades através de <strong className="text-white">Marketing Digital</strong>, <strong className="text-white">IA</strong>, <strong className="text-white">CRM</strong> e <strong className="text-white">Automações Inteligentes</strong>
          </p>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 shadow-xl">
                <CheckCircle className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0" />
                <span className="font-medium">{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Consultoria Gratuita
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              <ArrowDown className="w-6 h-6 mr-3" />
              Nossos Serviços
            </button>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center shadow-xl">
                  <IconComponent className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-purple-200 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L1440 120L1440 0C1440 0 1140 60 720 60C300 60 0 0 0 0L0 120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
