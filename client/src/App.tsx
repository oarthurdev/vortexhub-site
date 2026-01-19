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

[NEW_FILE:client/src/components/agendaFacilCard.tsx]
import agendaFacilLogo from "@assets/agendafacil_logo.png";

interface AgendaFacilCardProps {
  className?: string;
}

export default function AgendaFacilCard({ className = "" }: AgendaFacilCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-purple-100 p-6 flex flex-col items-center text-center transition-transform hover:scale-105 ${className}`}>
      <img
        src={agendaFacilLogo}
        alt="AgendaFacil Logo"
        className="w-24 h-24 object-contain mb-4"
        loading="lazy"
      />
      <h3 className="text-2xl font-bold text-purple-700 mb-2">AgendaFacil</h3>
      <p className="text-gray-700 mb-4">
        Plataforma completa para agendamento online, gestão de horários e atendimento digital para clínicas, consultórios e profissionais autônomos.
      </p>
      <a
        href="https://agendafacil.vortexhub.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
      >
        Conheça o AgendaFacil
      </a>
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
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <span className="inline-block bg-purple-500/10 text-purple-700 px-5 py-2 rounded-full font-semibold text-sm mb-4">
              Portfólio de Soluções
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Soluções Digitais da Vortex Hub
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça nossas soluções digitais inovadoras, desenvolvidas para transformar o seu negócio. Explore nosso portfólio de produtos e plataformas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            <AgendaFacilCard />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

[FILE:client/src/components/header.tsx]
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import vortexLogo from "@assets/468512062_1011071840777526_8774782408988115845_n_1754505856480.jpg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const goToSolutions = () => {
    setLocation("/solucoes");
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
              <button 
                onClick={goToSolutions}
                className="text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg"
              >
                Soluções
              </button>
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
          <div className="md:hidden mt-2 bg-white rounded-lg shadow-lg py-4 px-6 space-y-2 absolute left-0 right-0 top-16 z-50">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left text-purple-600 hover:text-purple-800 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="block w-full text-left text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg"
            >
              Serviços
            </button>
            <button 
              onClick={goToSolutions}
              className="block w-full text-left text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg"
            >
              Soluções
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('equipe')}
              className="block w-full text-left text-gray-700 hover:text-purple-600 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg"
            >
              Equipe
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}