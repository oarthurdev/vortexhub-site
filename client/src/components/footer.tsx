import kommoPartnerImg from "@assets/kommo-parceiro_1753380577680.png";
import vortexLogo from "@assets/468512062_1011071840777526_8774782408988115845_n_1754505856480.jpg";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={vortexLogo} 
                alt="Vortex Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold">VORTEX</h3>
                <p className="text-sm text-purple-300 font-medium -mt-1">HUB DE SERVIÇOS</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Organizando o crescimento de oportunidades através de soluções digitais integradas e inteligentes.
            </p>
            
            {/* Kommo Partner Badge */}
            <div className="flex items-center space-x-3">
              <img 
                src={kommoPartnerImg} 
                alt="Kommo Partner" 
                className="h-12 object-contain"
              />
              <div className="text-sm">
                <p className="text-purple-300 font-semibold">Parceiro Oficial</p>
                <p className="text-gray-400">Kommo CRM</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Endereço:</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Rua Engenheiro Emílio Odebrecht, nº 118<br />
                    Bairro das Nações - 2º andar, Sala 6
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-gray-300 font-medium">Atendimento:</p>
                  <p className="text-gray-400 text-sm">Segunda à Sexta, 8h às 18h</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-gray-300 font-medium">E-mail:</p>
                  <p className="text-gray-400 text-sm">contato@vortexhub.com.br</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Serviços</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="hover:text-purple-300 transition-colors text-left hover:translate-x-1 transform duration-200"
                >
                  💼 Consultoria Comercial
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="hover:text-purple-300 transition-colors text-left hover:translate-x-1 transform duration-200"
                >
                  🚀 Marketing Digital
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="hover:text-purple-300 transition-colors text-left hover:translate-x-1 transform duration-200"
                >
                  🎨 Social Media
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="hover:text-purple-300 transition-colors text-left hover:translate-x-1 transform duration-200"
                >
                  🤖 IA e Automações
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="hover:text-purple-300 transition-colors text-left hover:translate-x-1 transform duration-200"
                >
                  📊 CRM & Inteligência
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-bold mb-6">Navegação</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="hover:text-purple-300 transition-colors text-left hover:translate-x-1 transform duration-200"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="hover:text-purple-300 transition-colors text-left hover:translate-x-1 transform duration-200"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('equipe')}
                  className="hover:text-purple-300 transition-colors text-left hover:translate-x-1 transform duration-200"
                >
                  Nossa Equipe
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="hover:text-purple-300 transition-colors text-left hover:translate-x-1 transform duration-200"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 pt-8 mt-12">
          <div className="text-center text-gray-400">
            <p className="text-sm">
              © 2025 Vortex Hub - Hub de Serviços. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Organizando o crescimento de oportunidades.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
