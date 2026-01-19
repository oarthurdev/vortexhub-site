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
      setMobileMenuOpen(false);
    }
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-purple-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Serviços
              </button>
              <button
                onClick={goToSolutions}
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Soluções
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('equipe')}
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Equipe
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
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

[NEW_FILE:client/src/pages/solutions.tsx]
import Header from "@/components/header";
import Footer from "@/components/footer";
import AgendaFacilCard from "@/components/agendaFacilCard";

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Soluções Vortex Hub
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça nosso portfólio de soluções digitais para acelerar o seu negócio. Produtos próprios, prontos para transformar sua operação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AgendaFacilCard />
            {/* Novas soluções podem ser adicionadas aqui */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

[NEW_FILE:client/src/components/agendaFacilCard.tsx]
const agendaFacilLogo = "https://agendafacil.vortexhub.com.br/_next/image?url=%2Flogo.png&w=256&q=75";

export default function AgendaFacilCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-purple-100 flex flex-col md:flex-row items-center p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8 flex flex-col items-center">
        <img
          src={agendaFacilLogo}
          alt="AgendaFácil Logo"
          className="w-24 h-24 md:w-28 md:h-28 object-contain rounded-xl bg-purple-50"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-purple-700 mb-2">AgendaFácil</h2>
        <p className="text-gray-700 mb-4">
          Plataforma completa para agendamento online, gestão de horários, clientes e pagamentos. Ideal para clínicas, consultórios, salões de beleza e profissionais autônomos que buscam praticidade e automação no atendimento.
        </p>
        <a
          href="https://agendafacil.vortexhub.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
        >
          Conhecer AgendaFácil
        </a>
      </div>
    </div>
  );
}