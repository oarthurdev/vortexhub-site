import agendaFacilLogo from "@assets/agendafacil_logo.png";

interface AgendaFacilCardProps {
  className?: string;
}

export default function AgendaFacilCard({ className = "" }: AgendaFacilCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-10 ${className}`}>
      <div className="flex-shrink-0">
        <img
          src={agendaFacilLogo}
          alt="AgendaFacil Logo"
          className="w-28 h-28 md:w-36 md:h-36 object-contain rounded-lg border border-purple-100 bg-gray-50"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-2">AgendaFacil</h3>
        <p className="text-gray-700 mb-3">
          Plataforma completa para agendamento online, gestão de horários e atendimento digital. Ideal para clínicas, consultórios, salões e profissionais autônomos que buscam praticidade e automação no relacionamento com clientes.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
          <li>Agendamento online 24h</li>
          <li>Gestão de agenda e profissionais</li>
          <li>Confirmação automática por WhatsApp</li>
          <li>Relatórios e controle financeiro</li>
          <li>Personalização de serviços</li>
        </ul>
        <a
          href="https://agendafacil.vortexhub.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-purple-700 hover:to-purple-800 transition-all duration-200"
        >
          Conheça o AgendaFacil
        </a>
      </div>
    </div>
  );
}