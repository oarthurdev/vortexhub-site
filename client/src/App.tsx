import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Solutions from "@/pages/solutions";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/solucoes" component={Solutions} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

[NEW_FILE:client/src/pages/solutions.tsx]
import Header from "@/components/header";
import Footer from "@/components/footer";
import AgendaFacilCard from "@/components/agendaFacilCard";

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-xs font-semibold mb-4">
              Portfólio de Soluções
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossas Soluções Digitais
            </h1>
            <p className="text-lg text-gray-600">
              Conheça os produtos desenvolvidos e comercializados pela Vortex Hub para impulsionar o seu negócio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AgendaFacilCard />
            {/* Futuras soluções podem ser adicionadas aqui */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

[NEW_FILE:client/src/components/agendaFacilCard.tsx]
import agendaFacilImg from "@assets/agendafacil-thumb.jpg";

export default function AgendaFacilCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-purple-100 flex flex-col md:flex-row overflow-hidden">
      <div className="md:w-1/3 flex items-center justify-center bg-purple-50 p-6">
        <img
          src={agendaFacilImg}
          alt="AgendaFacil"
          className="w-32 h-32 object-contain rounded-xl shadow-md"
        />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-purple-800 mb-2">AgendaFacil</h2>
          <p className="text-gray-700 mb-4">
            Plataforma completa para agendamento online, gestão de horários, notificações automáticas e integração com WhatsApp. Ideal para clínicas, consultórios, salões de beleza e profissionais autônomos que desejam otimizar o atendimento e reduzir faltas.
          </p>
          <ul className="list-disc list-inside text-gray-600 text-sm mb-4 space-y-1">
            <li>Agendamento online 24h</li>
            <li>Gestão de agenda e profissionais</li>
            <li>Notificações automáticas por WhatsApp</li>
            <li>Relatórios e controle de presença</li>
            <li>Interface simples e intuitiva</li>
          </ul>
        </div>
        <div className="mt-4">
          <a
            href="https://agendafacil.vortexhub.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
          >
            Conheça o AgendaFacil
          </a>
        </div>
      </div>
    </div>
  );
}

[FILE:client/src/components/header.tsx]
import { useState } from "react";
import { Menu, X } from "lucide-react";
import vortexLogo from "@assets/468512062_1011071840777526_8774782408988115845_n_1754505856480.jpg";
import { Link } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-purple-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src={vortexLogo} 
                alt="Vortex Logo" 
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-gray-900">VORTEX</span>
                <span className="text-xs text-purple-600 font-medium -mt-1">HUB DE SERVIÇOS</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-purple-600 hover:text-purple-800 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg"
              >
                Serviços
              </button>
              <Link
                href="/solucoes"
                className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg"
              >
                Soluções
              </Link>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('equipe')}
                className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg"
              >
                Equipe
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Contato
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-lg shadow-lg py-4 px-6 flex flex-col space-y-2">
            <button 
              onClick={() => { scrollToSection('inicio'); }}
              className="text-purple-600 hover:text-purple-800 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg text-left"
            >
              Início
            </button>
            <button 
              onClick={() => { scrollToSection('servicos'); }}
              className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg text-left"
            >
              Serviços
            </button>
            <Link
              href="/solucoes"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg text-left"
            >
              Soluções
            </Link>
            <button 
              onClick={() => { scrollToSection('sobre'); }}
              className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg text-left"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => { scrollToSection('equipe'); }}
              className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg text-left"
            >
              Equipe
            </button>
            <button 
              onClick={() => { scrollToSection('contato'); }}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-md hover:shadow-lg text-left"
            >
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}