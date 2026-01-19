import Header from "@/components/header";
import Footer from "@/components/footer";
import agendaFacilLogo from "@assets/agendafacil_logo.png"; // Use a placeholder or remove if not available

function AgendaFacilCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-stretch border border-purple-100 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex-shrink-0 flex items-center justify-center bg-purple-50 w-full md:w-64 h-48 md:h-auto">
        <img
          src={agendaFacilLogo}
          alt="AgendaFacil Logo"
          className="object-contain h-24 w-24"
          onError={(e) => {
            // fallback if image not found
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-purple-700 mb-2">AgendaFácil</h3>
          <p className="text-gray-700 mb-4">
            Plataforma completa para agendamento online, gestão de horários, notificações automáticas e integração com WhatsApp. Ideal para clínicas, consultórios, salões de beleza e profissionais autônomos que desejam otimizar o atendimento e reduzir faltas.
          </p>
        </div>
        <div>
          <a
            href="https://agendafacil.vortexhub.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Conheça o AgendaFácil
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <section className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
              Portfólio de Soluções
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Soluções Digitais Vortex Hub
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça nossas soluções digitais desenvolvidas para impulsionar o seu negócio. Cada produto é pensado para resolver desafios reais do mercado, com tecnologia, praticidade e inovação.
            </p>
          </div>
          <div className="space-y-10">
            <AgendaFacilCard />
            {/* Adicione outros cards de soluções aqui conforme o portfólio crescer */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}