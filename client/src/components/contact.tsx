import { useEffect, useRef } from "react";
import { Mail, Clock } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    // 1) Define os parametros globais esperados pelo loader
    (window as any).amoFormsParams = {
      id: "1545076",
      hash: "7088c12c9a9c2a11e45f1ba659724a85",
      locale: "pt",
      // opcional: meta, utm etc.
      setMeta: (p: any) => {
        (window as any).amoFormsParams.params =
          ((window as any).amoFormsParams.params || []).concat([p]);
      },
    };

    // 2) Cria o script do loader
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://forms.kommo.com/js/form_loader.js";
    document.body.appendChild(s);

    return () => {
      // limpeza mínima (mantém o form na navegação SPA)
      // document.body.removeChild(s); // descomente se quiser remover
    };
  }, []);
  
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    const container = formContainerRef.current;
    if (container) {
      const kommoDiv = document.createElement("div");
      kommoDiv.id = "amoforms_1533104";
      container.appendChild(kommoDiv);

      const fallbackTimer = setTimeout(() => {
        if (
          container &&
          (container.children.length === 0 ||
            container.innerHTML.includes("Carregando"))
        ) {
          container.innerHTML = "";
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
                    <p className="text-gray-600">Segunda à Sexta, 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD DO FORMULÁRIO */}
          <div className="bg-white rounded-2xl shadow-xl border border-purple-100">
            {/* Cabeçalho com padding */}
            <div className="text-center px-8 pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Entre em contato com a Vortex
              </h3>
              <p className="text-gray-600 mb-4">
                Descubra como podemos acelerar o crescimento do seu negócio
              </p>
            </div>

            {/* Wrapper SEM padding/altura fixa: encaixa exatamente no iframe */}
            <div className="flex justify-center rounded-b-2xl overflow-hidden">
              <iframe
                title="Formulário de Contato Kommo"
                src="https://forms.kommo.com/forms/html/form_1545076_7088c12c9a9c2a11e45f1ba659724a85.html?date=1755190987#{%22form_id%22:%221545076%22,%22form_hash%22:%227088c12c9a9c2a11e45f1ba659724a85%22,%22user_origin%22:{%22datetime%22:%22Thu%20Aug%2014%202025%2014:03:07%20GMT-0300%20(Hor%C3%A1rio%20Padr%C3%A3o%20de%20Bras%C3%ADlia)%22,%22timezone%22:%22America/Sao_Paulo%22,%22referer%22:%22https://tayane.kommo.com/%22},%22is_modal%22:false,%22success_message%22:%22%22,%22has_redirect%22:%22%22,%22is_dark_bg%22:true,%22utm%22:{%22source%22:%22%22,%22medium%22:%22%22,%22content%22:%22%22,%22campaign%22:%22%22,%22term%22:%22%22},%22ga%22:{},%22location%22:%22https://forms.kommo.com/rwdwlzc%22,%22dp%22:{}}"
                className="
                  block border-0
                  w-[500px] max-w-full
                  h-[660px] sm:h-[660px] md:h-[660px] lg:h-[660px] xl:h-[660px]
                  rounded-b-2xl
                  shadow-lg
                "
                scrolling="no"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
