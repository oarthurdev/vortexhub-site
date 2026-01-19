import Header from "@/components/header";
import Footer from "@/components/footer";
import agendaFacilImg from "@assets/agendafacil-thumb.jpg";

function AgendaFacilCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-stretch gap-0 md:gap-8 max-w-4xl mx-auto">
      <div className="md:w-1/2 w-full h-56 md:h-auto flex-shrink-0 bg-gray-100 flex items-center justify-center">
        <img
          src={agendaFacilImg}
          alt="AgendaFacil"
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col justify-between md:w-1/2">
        <div>
          <h3 className="text-2xl font-bold text-purple-800 mb-2">AgendaFácil</h3>
          <p className="text-gray-700 mb-4">
            Plataforma completa para agendamento online de serviços, ideal para clínicas, consultórios, salões e profissionais autônomos. Simplifique o atendimento, reduza faltas e otimize sua agenda com notificações automáticas, integração com WhatsApp e painel de gestão intuitivo.
          </p>
        </div>
        <a
          href="https://agendafacil.vortexhub.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow hover:from-purple-700 hover:to-purple-800 transition-all duration-200"
        >
          Conheça o AgendaFácil
        </a>
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex flex-col">
      <Header />
      <main className="flex-1 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full font-medium text-sm mb-4">
            Portfólio de Soluções
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Soluções Digitais Vortex Hub
          </h1>
          <p className="text-lg text-gray-700">
            Conheça os produtos que potencializam negócios e otimizam processos. Nosso portfólio reúne soluções inovadoras desenvolvidas para transformar a experiência dos nossos clientes.
          </p>
        </div>
        <section>
          <AgendaFacilCard />
        </section>
      </main>
      <Footer />
    </div>
  );
}