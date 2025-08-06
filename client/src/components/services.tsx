import { TrendingUp, Rocket, Palette, Bot, BarChart3, Check, ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export default function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: TrendingUp,
      title: "Consultoria e Estratégia Comercial",
      emoji: "💼",
      description: "Diagnóstico completo e estratégias personalizadas para acelerar o crescimento do seu negócio.",
      items: [
        "Diagnóstico comercial com foco em crescimento",
        "Estruturação de funis de vendas",
        "Criação de jornadas do cliente (pré e pós-venda)",
        "Treinamento de equipes comerciais",
        "Ativação e reativação de leads"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Rocket,
      title: "Marketing Digital e Vendas",
      emoji: "🚀",
      description: "Campanhas estratégicas que convertem visitantes em clientes através de tráfego qualificado.",
      items: [
        "Gestão de tráfego pago (Meta, Google, TikTok Ads)",
        "Planejamento e execução de campanhas promocionais",
        "Funil de vendas automatizado",
        "Lançamentos (imóveis, produtos, serviços)"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Palette,
      title: "Social Media e Conteúdo",
      emoji: "🎨",
      description: "Conteúdo estratégico que engaja, educa e converte sua audiência nas redes sociais.",
      items: [
        "Planejamento de conteúdo estratégico",
        "Criação de artes e vídeos",
        "Gestão de redes sociais",
        "Copywriting para posts, anúncios e páginas"
      ],
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Bot,
      title: "Implantação de IA e Automações",
      emoji: "🤖",
      description: "Automações inteligentes que otimizam processos e aumentam a eficiência operacional.",
      items: [
        "Fluxos automatizados de atendimento e venda",
        "Integrações entre CRM, WhatsApp etc.",
        "IA no atendimento comercial",
        "Criação de prompts inteligentes para equipes"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: BarChart3,
      title: "CRM e Inteligência Comercial",
      emoji: "📊",
      description: "Organização e análise de dados para decisões estratégicas baseadas em inteligência comercial.",
      items: [
        "Implementação e configuração de Kommo CRM",
        "Treinamento de uso",
        "Automação de tarefas comerciais",
        "Análise de funis e performance"
      ],
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-purple-500/20 border border-purple-500/30 text-purple-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Hub de Soluções Digitais
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Serviços que{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Transformam
            </span>
            <br />
            Seu Negócio
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Soluções integradas e personalizadas que organizam o crescimento de oportunidades e maximizam resultados para sua empresa.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl">{service.emoji}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-300">
                      <Check className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Transformar Seu Negócio?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Vamos conversar sobre como nossos serviços podem organizar o crescimento de oportunidades da sua empresa.
            </p>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Fale Conosco Agora
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
