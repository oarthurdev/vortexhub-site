import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechSolutions",
      role: "CEO",
      text: "A Vortex Hub transformou completamente nossa estratégia comercial. Em 3 meses, aumentamos nossas vendas em 250% e automatizamos 90% dos nossos processos.",
      rating: 5
    },
    {
      name: "Marina Costa",
      company: "InovaMarketing",
      role: "Diretora Comercial",
      text: "O CRM Kommo implementado pela equipe revolucionou nossa gestão de leads. Agora temos total controle do funil e resultados consistentes.",
      rating: 5
    },
    {
      name: "Rafael Mendes",
      company: "StartupX",
      role: "Fundador",
      text: "As automações com IA criadas pela Vortex Hub nos poupam mais de 20 horas semanais. O ROI foi surpreendente desde o primeiro mês.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformamos negócios reais e geramos resultados concretos. Veja alguns depoimentos:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/95 glass-effect rounded-2xl p-8 shadow-lg card-hover border border-purple-100 relative">
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-purple-200" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 gradient-purple rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-purple-100 text-purple-800 rounded-full">
            <Star className="w-5 h-5 mr-2 text-purple-600" />
            <span className="font-semibold">4.9/5 estrelas - Mais de 500 clientes satisfeitos</span>
          </div>
        </div>
      </div>
    </section>
  );
}