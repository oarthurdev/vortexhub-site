import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import vortexLogo from "@assets/468512062_1011071840777526_8774782408988115845_n_1754505856480.jpg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
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
                onClick={() => handleNavClick('inicio')}
                className="text-purple-600 hover:text-purple-800 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg"
              >
                Início
              </button>
              <button 
                onClick={() => handleNavClick('servicos')}
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
                onClick={() => handleNavClick('sobre')}
                className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => handleNavClick('equipe')}
                className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg"
              >
                Equipe
              </button>
              <button 
                onClick={() => handleNavClick('contato')}
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => handleNavClick('inicio')}
                className="text-purple-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Início
              </button>
              <button 
                onClick={() => handleNavClick('servicos')}
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Serviços
              </button>
              <Link
                href="/solucoes"
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Soluções
              </Link>
              <button 
                onClick={() => handleNavClick('sobre')}
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => handleNavClick('equipe')}
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Equipe
              </button>
              <button 
                onClick={() => handleNavClick('contato')}
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

[NEW_FILE:client/src/components/agendaFacilCard.tsx]
import agendaFacilImg from "@assets/agenda-facil-cover.jpg";

interface AgendaFacilCardProps {}

export default function AgendaFacilCard(_: AgendaFacilCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch">
      <div className="md:w-1/2 flex items-center justify-center bg-purple-50 p-6">
        <img
          src={agendaFacilImg}
          alt="AgendaFacil"
          className="rounded-lg w-full max-w-xs object-contain"
          loading="lazy"
        />
      </div>
      <div className="md:w-1/2 p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-purple-700 mb-2">AgendaFacil</h3>
          <p className="text-gray-700 mb-4">
            Plataforma completa para agendamento online, gestão de horários, clientes e pagamentos. Ideal para clínicas, consultórios, salões e profissionais autônomos.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
            <li>Agendamento online 24h</li>
            <li>Gestão de clientes e histórico</li>
            <li>Pagamentos integrados</li>
            <li>Notificações automáticas</li>
            <li>Relatórios e controle financeiro</li>
          </ul>
        </div>
        <div>
          <a
            href="https://agendafacil.vortexhub.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Conheça o AgendaFacil
          </a>
        </div>
      </div>
    </div>
  );
}

[NEW_FILE:client/src/pages/solutions.tsx]
import Header from "@/components/header";
import Footer from "@/components/footer";
import AgendaFacilCard from "@/components/agendaFacilCard";

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex flex-col">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
            Portfólio de Soluções
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Soluções Digitais Vortex Hub
          </h1>
          <p className="text-lg text-gray-600">
            Conheça nossas soluções digitais prontas para impulsionar o seu negócio.
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

[FILE:client/src/App.tsx]
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