import { User } from "lucide-react";
import tayaneImg from "@assets/tayane_1753380577679.jpg";
import amandaImg from "@assets/amanda_1753380577679.jpg";
import rafaelImg from "@assets/rafael_1753380577678.jpg";
import arthurImg from "@assets/arthur_1753380577679.jpg";

export default function Team() {
  const teamMembers = [
    {
      name: "Tayane",
      role: "Fundadora e Diretora de Estratégia Comercial",
      image: tayaneImg,
      description: "Especialista em estratégias comerciais e desenvolvimento de negócios."
    },
    {
      name: "Arthur",
      role: "Programador",
      image: arthurImg,
      description: "Desenvolvedor especializado em soluções tecnológicas e integração de sistemas."
    },
    {
      name: "Rafael",
      role: "Engenheiro de Prompt",
      image: rafaelImg,
      description: "Especialista em inteligência artificial e automações inteligentes."
    },
    {
      name: "Amanda",
      role: "Storymaker e Social Media",
      image: amandaImg,
      description: "Especialista em criação de conteúdo e gestão de redes sociais."
    },
    {
      name: "David",
      role: "Fundador e Diretor de Tecnologia",
      image: null,
      description: "Líder tecnológico com ampla experiência em desenvolvimento e arquitetura de sistemas."
    },
    {
      name: "Djeniffer",
      role: "Financeira",
      image: null,
      description: "Especialista em gestão financeira e controle administrativo empresarial."
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossa Equipe
          </h2>
          <div className="section-divider mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os especialistas que vão transformar a estratégia do seu negócio em resultados concretos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white/95 glass-effect rounded-2xl p-8 text-center shadow-lg card-hover border border-purple-100">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-purple-100"
                />
              ) : (
                <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                  <User className="w-16 h-16 text-purple-600" />
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-purple-600 font-medium mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
