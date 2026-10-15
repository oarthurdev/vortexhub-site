// Institutional data confirmed by Vortex Hub (previous site + client brief).
// Do not add phone, WhatsApp, social profiles or city here until confirmed by Vortex Hub.

export const SITE_URL = "https://vortexhub.com.br";

export const company = {
  name: "Vortex Hub",
  legalTagline: "Hub de serviços",
  legalName: "VORTEX HUB LTDA - ME",
  cnpj: "61.043.174/0001-26",
  tagline: "Organizando o crescimento de oportunidades.",
  email: "contato@vortexhub.com.br",
  hours: "Segunda a sexta, das 8h às 18h",
  hoursShort: "Seg. a sex., 8h–18h",
  responseTime: "Resposta em até 2h úteis",
  address: {
    street: "Rua Engenheiro Emílio Odebrecht, 118",
    complement: "Bairro das Nações · 2º andar, sala 6",
  },
  kommoPartner: { title: "Parceiro oficial Kommo", subtitle: "Implementação e configuração de CRM" },
  mission:
    "Ser o hub de soluções digitais que conecta estratégia, tecnologia e resultados, organizando o crescimento de oportunidades para empresas que buscam se destacar no mercado digital.",
  summary:
    "Estratégia comercial, marketing digital, conteúdo, inteligência artificial e CRM conectados em uma única operação de crescimento.",
} as const;

export const mailto = (subject = "Quero conversar sobre um projeto") =>
  `mailto:${company.email}?subject=${encodeURIComponent(subject)}`;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Soluções", href: "/servicos/" },
  { label: "Como trabalhamos", href: "/#metodo" },
  { label: "Sobre", href: "/sobre/" },
  { label: "Contato", href: "/contato/" },
];

export const primaryCta = { label: "Solicitar diagnóstico", href: "/contato/" };

/* ------------------------------------------------------------------ */
/* Method                                                              */
/* ------------------------------------------------------------------ */

export const processSteps = [
  {
    title: "Diagnóstico",
    text: "Entendemos objetivos, canais de aquisição, processo de vendas, equipe e ferramentas que já existem.",
  },
  {
    title: "Planejamento",
    text: "Priorizamos o que gera mais impacto primeiro e desenhamos como as frentes vão se conectar.",
  },
  {
    title: "Escopo",
    text: "Definimos entregas, responsáveis, prazos e investimento em uma proposta clara, antes de começar.",
  },
  {
    title: "Implementação",
    text: "Executamos campanhas, conteúdos, configurações de CRM, integrações e automações previstas.",
  },
  {
    title: "Validação",
    text: "Testamos fluxos com a equipe, treinamos quem vai usar e ajustamos o que não funcionou como esperado.",
  },
  {
    title: "Acompanhamento",
    text: "Acompanhamos indicadores do funil e evoluímos processos e automações a partir dos dados.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Commercial journey (integration flow)                               */
/* ------------------------------------------------------------------ */

export const journeySteps = [
  {
    title: "Aquisição",
    text: "Campanhas e conteúdo geram demanda nos canais certos.",
    powered: "Marketing · Conteúdo",
  },
  {
    title: "Captura e qualificação",
    text: "Formulários, WhatsApp e IA organizam a entrada de cada contato.",
    powered: "IA · Automações",
  },
  {
    title: "CRM",
    text: "Cada oportunidade entra no funil com origem, etapa e responsável.",
    powered: "Kommo CRM",
  },
  {
    title: "Atendimento",
    text: "A equipe atende com roteiro definido e histórico completo da conversa.",
    powered: "Estratégia comercial",
  },
  {
    title: "Follow-up",
    text: "Tarefas e mensagens automáticas evitam que negócios fiquem esquecidos.",
    powered: "Automações · CRM",
  },
  {
    title: "Análise",
    text: "Relatórios de funil mostram onde ajustar campanha, processo ou abordagem.",
    powered: "Inteligência comercial",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Differentials                                                       */
/* ------------------------------------------------------------------ */

export const differentials = [
  {
    title: "Um parceiro, não cinco fornecedores",
    text: "Estratégia, mídia, conteúdo, CRM e automações sob a mesma condução. Menos retrabalho e nenhuma lacuna entre quem gera o lead e quem o atende.",
  },
  {
    title: "Processo antes da ferramenta",
    text: "Primeiro definimos como sua empresa deve vender; depois configuramos tecnologia para sustentar esse processo — e não o contrário.",
  },
  {
    title: "Tecnologia aplicada ao comercial",
    text: "IA e automações entram onde liberam tempo da equipe ou evitam perda de oportunidades, não como enfeite.",
  },
  {
    title: "Implementação com acompanhamento",
    text: "Treinamos quem vai usar e acompanhamos os indicadores depois da entrega, para que o que foi implementado continue em uso.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Practical applications                                              */
/* `kind: "example"` = conceptual scenario. Add real, authorized cases */
/* with `kind: "case"` and the optional `results`/`testimonial` fields. */
/* ------------------------------------------------------------------ */

export type Application = {
  kind: "example" | "case";
  title: string;
  context: string;
  challenge: string;
  solution: string;
  fronts: string[];
  results?: string[];
  testimonial?: { quote: string; author: string; role: string };
};

export const applications: Application[] = [
  {
    kind: "example",
    title: "Lançamento imobiliário",
    context: "Incorporadora ou imobiliária preparando o lançamento de um empreendimento.",
    challenge: "Grande volume de contatos em pouco tempo, vindos de anúncios e redes sociais, distribuídos de forma manual entre corretores.",
    solution: "Campanhas com captação direta para o CRM, distribuição automática por corretor e cadência de follow-up até a visita.",
    fronts: ["Marketing digital", "Kommo CRM", "Automações"],
  },
  {
    kind: "example",
    title: "Atendimento concentrado no WhatsApp",
    context: "Empresa de serviços que recebe a maior parte dos pedidos pelo WhatsApp.",
    challenge: "Mensagens sem resposta fora do horário, conversas perdidas entre aparelhos e nenhum histórico por cliente.",
    solution: "Triagem inicial com IA, integração do WhatsApp ao CRM e tarefas automáticas para retomar conversas paradas.",
    fronts: ["IA e automações", "Kommo CRM"],
  },
  {
    kind: "example",
    title: "Equipe comercial sem processo definido",
    context: "Empresa em crescimento cujos vendedores trabalham cada um do seu jeito.",
    challenge: "Previsão de vendas imprecisa, leads antigos esquecidos e dificuldade para treinar novos vendedores.",
    solution: "Diagnóstico, desenho do funil com critérios por etapa, treinamento da equipe e rotina de reativação de leads.",
    fronts: ["Estratégia comercial", "Kommo CRM"],
  },
];

/* ------------------------------------------------------------------ */
/* General FAQ                                                         */
/* ------------------------------------------------------------------ */

export type Faq = { q: string; a: string };

export const generalFaq: Faq[] = [
  {
    q: "Quais serviços a Vortex Hub oferece?",
    a: "Atuamos em cinco frentes: consultoria e estratégia comercial, marketing digital e vendas, social media e conteúdo, implantação de inteligência artificial e automações, e CRM e inteligência comercial — com implementação do Kommo CRM, do qual somos parceiros oficiais.",
  },
  {
    q: "Como funciona o diagnóstico inicial?",
    a: "É o ponto de partida de qualquer projeto. Conversamos sobre seus objetivos, canais de aquisição, processo de vendas e ferramentas atuais. A partir disso, indicamos quais frentes fazem sentido e o que deve vir primeiro.",
  },
  {
    q: "Preciso contratar todas as frentes?",
    a: "Não necessariamente. As frentes são combinadas de acordo com o que o diagnóstico identificar e ficam definidas no escopo do projeto.",
  },
  {
    q: "Vocês trabalham com o CRM que minha empresa já utiliza?",
    a: "Nossa especialidade de implementação é o Kommo CRM. Se sua empresa já usa outra ferramenta, avaliamos no diagnóstico o caminho mais adequado — inclusive quais integrações são viáveis.",
  },
  {
    q: "Como são definidos prazos e investimento?",
    a: "Dependem das frentes envolvidas, do tamanho da operação e das integrações necessárias. Por isso, prazos e valores são apresentados em proposta, depois do diagnóstico.",
  },
  {
    q: "Existe acompanhamento depois da implementação?",
    a: "Sim. Acompanhamento e otimização fazem parte do nosso método. O formato e a duração são definidos no escopo de cada projeto.",
  },
];
