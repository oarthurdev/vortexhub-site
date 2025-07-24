import { useEffect, useRef } from "react";
import { Mail, Clock, Rocket, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to create and show the form
    const showContactForm = (container: HTMLElement) => {
      container.innerHTML = `
        <form class="space-y-4" action="mailto:contato@vortexhub.com.br" method="post" enctype="text/plain">
          <div class="text-center mb-4">
            <p class="text-gray-600 text-sm">Preencha os dados abaixo:</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="nome" placeholder="Nome *" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" required />
            <input type="email" name="email" placeholder="E-mail *" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" required />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="tel" name="telefone" placeholder="Telefone *" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" required />
            <input type="text" name="empresa" placeholder="Empresa" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
          </div>
          <textarea name="mensagem" placeholder="Como podemos ajudar seu negócio?" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"></textarea>
          <button type="submit" class="w-full gradient-purple text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
            Solicitar Consultoria Gratuita
          </button>
        </form>
      `;
    };

    // Initialize form immediately
    const container = formContainerRef.current;
    if (container) {
      // Try to load Kommo form first
      const kommoDiv = document.createElement('div');
      kommoDiv.id = 'amoforms_1533104';
      container.appendChild(kommoDiv);

      // Set a timeout to show fallback form if Kommo doesn't load
      const fallbackTimer = setTimeout(() => {
        if (container && (container.children.length === 0 || container.innerHTML.includes('Carregando'))) {
          container.innerHTML = '';
          showContactForm(container);
        }
      }, 2000);

      return () => clearTimeout(fallbackTimer);
    }
  }, []);

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Pronto para acelerar o crescimento do seu negócio? Nossa equipe está preparada para criar uma estratégia personalizada para você.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="flex items-center text-gray-600">
              <Mail className="w-5 h-5 mr-2 text-purple-600" />
              <span>contato@vortexhub.com.br</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2 text-purple-600" />
              <span>Resposta em 2h úteis</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                <div className="flex items-center mb-4">
                  <div className="gradient-purple w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email Direto</h3>
                    <p className="text-gray-600">contato@vortexhub.com.br</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                <div className="flex items-center mb-4">
                  <div className="gradient-purple w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda à Sexta, 9h às 18h</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                <div className="flex items-center mb-4">
                  <div className="gradient-purple w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Consultoria Gratuita</h3>
                    <p className="text-gray-600">Análise completa do seu negócio sem custo</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Consultoria Gratuita de 30 Minutos
              </h3>
              <p className="text-gray-600">
                Descubra como podemos acelerar o crescimento do seu negócio
              </p>
            </div>
            
            {/* Kommo Form Container */}
            <div ref={formContainerRef} className="kommo-form-container">
              <div className="text-center py-8">
                <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-purple-600 transition ease-in-out duration-150">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Carregando formulário...
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                🔒 Seus dados estão seguros conosco. Política de privacidade aplicada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
