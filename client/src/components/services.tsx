import { TrendingUp, Rocket, Palette, Bot, BarChart3, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: "💼 Consultoria e Estratégia Comercial",
      items: [
        "Diagnóstico comercial com foco em crescimento",
        "Estruturação de funis de vendas",
        "Criação de jornadas do cliente (pré e pós-venda)",
        "Treinamento de equipes comerciais",
        "Ativação e reativação de leads"
      ]
    },
    {
      icon: Rocket,
      title: "🚀 Marketing Digital e Vendas",
      items: [
        "Gestão de tráfego pago (Meta, Google, TikTok Ads)",
        "Planejamento e execução de campanhas promocionais",
        "Funil de vendas automatizado",
        "Lançamentos (imóveis, produtos, serviços)"
      ]
    },
    {
      icon: Palette,
      title: "🎨 Social Media e Conteúdo",
      items: [
        "Planejamento de conteúdo estratégico",
        "Criação de artes e vídeos",
        "Gestão de redes sociais",
        "Copywriting para posts, anúncios e páginas"
      ]
    },
    {
      icon: Bot,
      title: "🤖 Implantação de IA e Automações",
      items: [
        "Fluxos automatizados de atendimento e venda",
        "Integrações entre CRM, WhatsApp etc.",
        "IA no atendimento comercial",
        "Criação de prompts inteligentes para equipes"
      ]
    },
    {
      icon: BarChart3,
      title: "📊 CRM e Inteligência Comercial",
      items: [
        "Implementação e configuração de Kommo CRM",
        "Treinamento de uso",
        "Automação de tarefas comerciais",
        "Análise de funis e performance"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <div className="section-divider mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para acelerar o crescimento do seu negócio com estratégias comprovadas e tecnologias avançadas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`bg-white/95 glass-effect border border-purple-100 rounded-2xl p-8 card-hover hover:border-purple-300 ${
                  index === 4 ? 'md:col-span-2 xl:col-span-1' : ''
                }`}
              >
                <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-3 text-gray-600">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
