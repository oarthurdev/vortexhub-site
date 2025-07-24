import kommoPartnerImg from "@assets/kommo-parceiro_1753380577680.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 gradient-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">Vortex Hub</h3>
              </div>
            </div>
            <p className="text-gray-400">
              Impulsionando negócios com IA, marketing digital e automações inteligentes.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Consultoria Comercial
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Marketing Digital
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Social Media
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="hover:text-white transition-colors text-left"
                >
                  IA e Automações
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="hover:text-white transition-colors text-left"
                >
                  CRM
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('equipe')}
                  className="hover:text-white transition-colors text-left"
                >
                  Nossa Equipe
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Partnership */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <p>contato@vortexhub.com.br</p>
            </div>
            
            {/* Kommo Partner Badge */}
            <div className="mt-6">
              <img 
                src={kommoPartnerImg} 
                alt="Kommo Partner" 
                className="h-12 bg-white rounded-lg p-2 object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>© 2025 Vortex Hub – Todos os direitos reservados. Site criado por Vortex Hub.</p>
        </div>
      </div>
    </footer>
  );
}
