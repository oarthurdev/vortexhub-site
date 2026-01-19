import { ExternalLink } from "lucide-react";

type AgendaFacilCardProps = {
  className?: string;
};

export default function AgendaFacilCard({ className }: AgendaFacilCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-purple-100 p-6 flex flex-col md:flex-row items-center gap-6 ${className ?? ""}`}
    >
      <div className="flex-shrink-0">
        <img
          src="https://agendafacil.vortexhub.com.br/assets/logo.png"
          alt="AgendaFacil Logo"
          className="w-24 h-24 object-contain rounded-xl bg-purple-50 border border-purple-100"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://agendafacil.vortexhub.com.br/favicon.ico";
          }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-2xl font-bold text-purple-800 mb-2 flex items-center gap-2">
          AgendaFacil
          <a
            href="https://agendafacil.vortexhub.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-purple-500 hover:text-purple-700"
            aria-label="Visitar AgendaFacil"
          >
            <ExternalLink className="inline w-5 h-5" />
          </a>
        </h3>
        <p className="text-gray-700 mb-3">
          Plataforma completa para agendamento online, gestão de horários e atendimento digital para clínicas, consultórios e profissionais autônomos. Facilite o dia a dia do seu negócio com automação, notificações inteligentes e experiência moderna para seus clientes.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Agendamento online 24h</li>
          <li>Gestão de agenda e profissionais</li>
          <li>Notificações automáticas (WhatsApp, SMS, Email)</li>
          <li>Relatórios e controle financeiro</li>
          <li>Personalização de serviços e horários</li>
        </ul>
      </div>
    </div>
  );
}