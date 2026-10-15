import type { Faq } from "./site";

export type ServiceSlug =
  | "estrategia-comercial"
  | "marketing-digital"
  | "social-media"
  | "ia-e-automacoes"
  | "kommo-crm";

export type ServiceIcon = "strategy" | "marketing" | "content" | "automation" | "crm";

export type Service = {
  slug: ServiceSlug;
  number: string;
  icon: ServiceIcon;
  name: string;
  shortName: string;
  /** Used in phrases like "Conversar sobre {topic}". */
  topic: string;
  /** One-line summary used in cards. */
  summary: string;
  /** Problem it solves, used in cards. */
  solves: string;
  /** Expected benefit, used in cards. */
  benefit: string;
  examples: string[];
  hero: { title: string; intro: string };
  problems: string[];
  approach: string;
  deliverables: { title: string; text: string }[];
  applications: string[];
  steps: { title: string; text: string }[];
  tools?: string[];
  faq: Faq[];
  related: ServiceSlug[];
  seo: { title: string; description: string };
};

export const services: Service[] = [
  {
    slug: "estrategia-comercial",
    number: "01",
    icon: "strategy",
    name: "Consultoria e estratégia comercial",
    shortName: "Estratégia comercial",
    topic: "sua estratégia comercial",
    summary: "Diagnóstico da operação e desenho do processo comercial que sustenta o crescimento.",
    solves: "Metas sem processo, funil indefinido e leads esquecidos na base.",
    benefit: "Um processo de vendas claro, documentado e possível de acompanhar.",
    examples: ["Diagnóstico comercial", "Funis de vendas", "Jornada do cliente", "Treinamento de equipes"],
    hero: {
      title: "Estratégia comercial para vender com processo, não com improviso.",
      intro:
        "Diagnosticamos como sua empresa atrai, atende e fecha negócios hoje e desenhamos o processo comercial que vai sustentar o crescimento — do funil de vendas à jornada do cliente.",
    },
    problems: [
      "Metas comerciais definidas, mas sem um processo claro para atingi-las.",
      "Funil de vendas indefinido: cada vendedor trabalha de um jeito.",
      "Leads antigos parados na base, sem nenhuma estratégia de reativação.",
    ],
    approach:
      "Partimos de um diagnóstico da operação atual para estruturar funis, etapas, critérios de qualificação e rotinas da equipe. O resultado é um processo documentado, que pode ser acompanhado no CRM e melhorado com base em dados.",
    deliverables: [
      { title: "Diagnóstico comercial", text: "Análise da operação atual com foco em crescimento: canais, conversão, gargalos e prioridades." },
      { title: "Estruturação de funis de vendas", text: "Etapas, critérios de passagem e responsáveis definidos para cada funil." },
      { title: "Jornadas do cliente", text: "Mapeamento da experiência na pré-venda e no pós-venda, com pontos de contato definidos." },
      { title: "Treinamento de equipes comerciais", text: "Capacitação da equipe para aplicar o processo no dia a dia." },
      { title: "Ativação e reativação de leads", text: "Estratégias para gerar movimento em contatos novos e retomar os que esfriaram." },
    ],
    applications: [
      "Definir etapas e critérios de qualificação para uma equipe comercial que está crescendo.",
      "Mapear a jornada pós-venda para estimular recompra e indicações.",
      "Criar uma rotina de reativação para leads que não avançaram no funil.",
    ],
    steps: [
      { title: "Diagnóstico", text: "Entrevistas, análise de dados disponíveis e mapeamento do processo atual." },
      { title: "Desenho do processo", text: "Funis, etapas, critérios e rotinas documentados e validados com a liderança." },
      { title: "Treinamento", text: "A equipe aprende o novo processo com exemplos da própria operação." },
      { title: "Acompanhamento", text: "Revisão dos indicadores e ajustes no processo conforme a operação evolui." },
    ],
    faq: [
      {
        q: "Preciso já ter um CRM para começar?",
        a: "Não. O processo é desenhado primeiro e a ferramenta vem depois. Quando faz sentido, o processo é levado para o Kommo CRM com a nossa implementação.",
      },
      {
        q: "A consultoria inclui a implementação do que for definido?",
        a: "Isso é definido no escopo de cada projeto. A estratégia pode ser aplicada pela sua equipe ou implementada em CRM e automações com o apoio da Vortex Hub.",
      },
      {
        q: "O trabalho serve para equipes pequenas?",
        a: "Sim. O nível de detalhe do processo é ajustado ao tamanho da equipe e ao momento da empresa.",
      },
    ],
    related: ["kommo-crm", "ia-e-automacoes"],
    seo: {
      title: "Consultoria e estratégia comercial",
      description:
        "Diagnóstico comercial, estruturação de funis de vendas, jornada do cliente e treinamento de equipes para vender com processo. Conheça a consultoria da Vortex Hub.",
    },
  },
  {
    slug: "marketing-digital",
    number: "02",
    icon: "marketing",
    name: "Marketing digital e vendas",
    shortName: "Marketing digital",
    topic: "suas campanhas",
    summary: "Campanhas em Meta, Google e TikTok Ads conectadas ao processo de vendas.",
    solves: "Investimento em mídia sem clareza sobre o que gera vendas.",
    benefit: "Leads que chegam ao comercial com origem e contexto.",
    examples: ["Tráfego pago", "Campanhas promocionais", "Funil automatizado", "Lançamentos"],
    hero: {
      title: "Campanhas pensadas para gerar oportunidades, não apenas cliques.",
      intro:
        "Planejamos e gerimos campanhas de tráfego pago em Meta, Google e TikTok Ads conectadas ao seu processo de vendas, para que cada lead gerado chegue ao time comercial com contexto.",
    },
    problems: [
      "Investimento em anúncios sem clareza sobre quais campanhas geram vendas.",
      "Leads chegam por vários canais e se perdem antes do primeiro contato.",
      "Lançamentos e promoções planejados em cima da hora.",
    ],
    approach:
      "Cada campanha começa pelo objetivo comercial e termina no CRM: definimos público, oferta e mensagem, estruturamos a captação e conectamos os leads ao funil para acompanhar o que realmente vira negócio.",
    deliverables: [
      { title: "Gestão de tráfego pago", text: "Planejamento, criação e otimização de campanhas em Meta Ads, Google Ads e TikTok Ads." },
      { title: "Campanhas promocionais", text: "Planejamento e execução de ações sazonais e promocionais com cronograma definido." },
      { title: "Funil de vendas automatizado", text: "Captação, nutrição e encaminhamento de leads com o mínimo de etapas manuais." },
      { title: "Lançamentos", text: "Estratégia e execução de lançamentos de imóveis, produtos e serviços." },
    ],
    applications: [
      "Campanha de lançamento imobiliário com captação direta para o CRM.",
      "Ações sazonais com anúncios, página de captura e cadência de follow-up.",
      "Funil automatizado para nutrir leads que ainda não estão prontos para comprar.",
    ],
    steps: [
      { title: "Objetivos e público", text: "Definição de metas, oferta, público e canais prioritários." },
      { title: "Estrutura de campanhas", text: "Criativos, mensagens, segmentações e páginas de captura." },
      { title: "Captação integrada", text: "Leads encaminhados ao CRM com origem identificada." },
      { title: "Otimização contínua", text: "Ajustes de investimento, público e criativos a partir dos dados." },
    ],
    tools: ["Meta Ads", "Google Ads", "TikTok Ads", "Kommo CRM", "WhatsApp"],
    faq: [
      {
        q: "Em quais plataformas de anúncio vocês atuam?",
        a: "Meta Ads (Facebook e Instagram), Google Ads e TikTok Ads. A escolha dos canais depende do público e do objetivo de cada campanha.",
      },
      {
        q: "A verba de mídia está incluída no serviço?",
        a: "Verba de mídia e gestão das campanhas são dimensionadas separadamente no escopo do projeto, de acordo com os objetivos definidos.",
      },
      {
        q: "Como sei quais campanhas geram vendas?",
        a: "Conectando a captação ao CRM. Com a origem de cada lead registrada, é possível acompanhar quais campanhas geram oportunidades e negócios fechados.",
      },
    ],
    related: ["social-media", "kommo-crm"],
    seo: {
      title: "Marketing digital e tráfego pago",
      description:
        "Gestão de tráfego pago em Meta, Google e TikTok Ads, campanhas promocionais, funis automatizados e lançamentos conectados ao seu processo de vendas.",
    },
  },
  {
    slug: "social-media",
    number: "03",
    icon: "content",
    name: "Social media e conteúdo",
    shortName: "Social media",
    topic: "seu conteúdo",
    summary: "Conteúdo estratégico que constrói autoridade e alimenta o funil de vendas.",
    solves: "Postagens sem planejamento e conteúdo desconectado da oferta.",
    benefit: "Presença consistente que apoia o trabalho do time comercial.",
    examples: ["Planejamento editorial", "Artes e vídeos", "Gestão de redes", "Copywriting"],
    hero: {
      title: "Conteúdo com estratégia, alinhado ao que o comercial precisa vender.",
      intro:
        "Planejamos, criamos e gerimos o conteúdo das suas redes sociais com um objetivo claro: construir autoridade para a marca e alimentar o funil de vendas.",
    },
    problems: [
      "Postagens sem planejamento, feitas quando sobra tempo.",
      "Conteúdo visualmente bonito, mas que não conversa com a oferta comercial.",
      "Textos de anúncios e páginas que não convencem o cliente.",
    ],
    approach:
      "A linha editorial nasce das perguntas e objeções que o seu cliente tem antes de comprar. Assim, o conteúdo educa, gera confiança e prepara o contato para a conversa com o time comercial.",
    deliverables: [
      { title: "Planejamento de conteúdo estratégico", text: "Linha editorial e calendário alinhados a campanhas e objetivos comerciais." },
      { title: "Criação de artes e vídeos", text: "Peças visuais e vídeos produzidos para cada formato e rede." },
      { title: "Gestão de redes sociais", text: "Publicação, organização e acompanhamento dos perfis da marca." },
      { title: "Copywriting", text: "Textos para posts, anúncios e páginas, escritos para gerar ação." },
    ],
    applications: [
      "Calendário editorial que acompanha campanhas e lançamentos.",
      "Série de conteúdos que responde às objeções que o time comercial ouve.",
      "Copy de páginas de captura integradas às campanhas de tráfego.",
    ],
    steps: [
      { title: "Imersão", text: "Entendimento da marca, do público, da oferta e do tom de voz." },
      { title: "Linha editorial", text: "Temas, formatos e calendário definidos e aprovados." },
      { title: "Produção", text: "Criação de artes, vídeos e textos com fluxo de aprovação." },
      { title: "Publicação e análise", text: "Gestão dos perfis e revisão periódica do que funciona melhor." },
    ],
    faq: [
      {
        q: "Vocês produzem vídeos?",
        a: "Sim. A criação de artes e vídeos faz parte do serviço; formatos e volume são definidos no escopo.",
      },
      {
        q: "Como funciona a aprovação dos conteúdos?",
        a: "O fluxo de aprovação é combinado no início do projeto, para que a sua equipe valide o que será publicado.",
      },
      {
        q: "O conteúdo se conecta às campanhas de anúncios?",
        a: "Sim, quando as duas frentes são contratadas juntas o planejamento é feito em conjunto, para que conteúdo e mídia contem a mesma história.",
      },
    ],
    related: ["marketing-digital", "estrategia-comercial"],
    seo: {
      title: "Social media e produção de conteúdo",
      description:
        "Planejamento de conteúdo, criação de artes e vídeos, gestão de redes sociais e copywriting alinhados aos objetivos comerciais da sua empresa.",
    },
  },
  {
    slug: "ia-e-automacoes",
    number: "04",
    icon: "automation",
    name: "Inteligência artificial e automações",
    shortName: "IA e automações",
    topic: "IA e automações",
    summary: "Fluxos automatizados, integrações e IA aplicada ao atendimento comercial.",
    solves: "Tarefas manuais repetitivas e leads sem resposta.",
    benefit: "Mais tempo da equipe para o que realmente gera vendas.",
    examples: ["Fluxos de atendimento", "Integração com WhatsApp", "IA no atendimento", "Prompts para equipes"],
    hero: {
      title: "Inteligência artificial e automações a serviço do atendimento comercial.",
      intro:
        "Automatizamos tarefas repetitivas, integramos canais como o WhatsApp ao CRM e aplicamos IA no atendimento para que sua equipe dedique tempo ao que gera venda.",
    },
    problems: [
      "Leads esperando resposta fora do horário comercial.",
      "Equipe copiando dados manualmente entre WhatsApp, planilhas e CRM.",
      "Uso de IA sem orientação, com resultados inconsistentes entre as pessoas.",
    ],
    approach:
      "Mapeamos o processo antes de automatizar. Só então desenhamos fluxos, integrações e assistentes de IA, com regras claras sobre o que é automático e o que continua nas mãos da equipe.",
    deliverables: [
      { title: "Fluxos automatizados de atendimento e venda", text: "Respostas, distribuição de leads, tarefas e lembretes que acontecem sem intervenção manual." },
      { title: "Integrações entre ferramentas", text: "Conexão entre CRM, WhatsApp e outras ferramentas usadas pela empresa." },
      { title: "IA no atendimento comercial", text: "Assistentes para triagem, qualificação inicial e apoio à equipe." },
      { title: "Prompts inteligentes para equipes", text: "Criação de prompts e orientações para o uso consistente de IA no dia a dia." },
    ],
    applications: [
      "Assistente que faz a triagem inicial no WhatsApp e registra o lead no CRM.",
      "Automação que cria uma tarefa de follow-up quando um negócio fica parado.",
      "Biblioteca de prompts para a equipe preparar propostas e respostas.",
    ],
    steps: [
      { title: "Mapeamento", text: "Levantamento das tarefas repetitivas e dos pontos onde oportunidades se perdem." },
      { title: "Desenho dos fluxos", text: "Regras, gatilhos e limites de cada automação e assistente." },
      { title: "Implementação e testes", text: "Configuração, integração e testes com casos reais da operação." },
      { title: "Ajustes e treinamento", text: "Refinamento a partir do uso e capacitação da equipe." },
    ],
    tools: ["Kommo CRM", "WhatsApp"],
    faq: [
      {
        q: "A IA vai substituir a minha equipe?",
        a: "Não é esse o objetivo. A IA assume tarefas repetitivas e de triagem; negociação e decisões continuam com as pessoas. O que será automatizado é definido junto com você.",
      },
      {
        q: "Funciona com as ferramentas que já uso?",
        a: "Avaliamos no diagnóstico quais integrações são viáveis com as ferramentas que sua empresa já utiliza.",
      },
      {
        q: "Como é garantida a qualidade das respostas da IA?",
        a: "Os assistentes são configurados com informações e limites definidos com a sua equipe, testados antes de entrar em operação e ajustados a partir do uso real.",
      },
    ],
    related: ["kommo-crm", "estrategia-comercial"],
    seo: {
      title: "Inteligência artificial e automações comerciais",
      description:
        "Fluxos automatizados de atendimento e vendas, integrações entre CRM e WhatsApp, IA no atendimento comercial e prompts para equipes.",
    },
  },
  {
    slug: "kommo-crm",
    number: "05",
    icon: "crm",
    name: "CRM e inteligência comercial",
    shortName: "Kommo CRM",
    topic: "o Kommo CRM",
    summary: "Implementação do Kommo CRM, treinamento e análise de funis por um parceiro oficial.",
    solves: "Leads espalhados e gestão sem visão do funil.",
    benefit: "Cada oportunidade registrada, com etapa, responsável e histórico.",
    examples: ["Implementação Kommo", "Treinamento de uso", "Automação de tarefas", "Análise de funis"],
    hero: {
      title: "Kommo CRM implementado para organizar cada oportunidade.",
      intro:
        "Como parceira oficial Kommo, a Vortex Hub implementa e configura o CRM de acordo com o seu processo comercial, treina a equipe e automatiza tarefas para que o funil seja acompanhado com dados.",
    },
    problems: [
      "Leads espalhados entre WhatsApp, planilhas e anotações pessoais.",
      "Gestão sem visão clara de quantos negócios estão em cada etapa.",
      "CRM contratado, mas pouco utilizado pela equipe.",
    ],
    approach:
      "Configuramos o Kommo a partir do processo comercial — funis, etapas, campos e automações refletem a forma como sua empresa vende. Depois, treinamos a equipe e acompanhamos o uso para que o CRM vire rotina.",
    deliverables: [
      { title: "Implementação e configuração do Kommo", text: "Funis, etapas, campos, permissões e canais configurados conforme o processo." },
      { title: "Treinamento de uso", text: "Capacitação de vendedores e gestores para o uso diário do CRM." },
      { title: "Automação de tarefas comerciais", text: "Tarefas, lembretes e movimentações automáticas que reduzem trabalho manual." },
      { title: "Análise de funis e performance", text: "Leitura de conversão por etapa e por origem para orientar decisões." },
    ],
    applications: [
      "Funis separados por produto ou unidade, com etapas e responsáveis definidos.",
      "Centralização das conversas de WhatsApp dentro do CRM.",
      "Relatórios de conversão por etapa para orientar reuniões comerciais.",
    ],
    steps: [
      { title: "Diagnóstico do processo", text: "Entendimento de como a empresa vende hoje e do que precisa acompanhar." },
      { title: "Configuração do Kommo", text: "Funis, campos, integrações e automações configurados." },
      { title: "Treinamento da equipe", text: "Uso prático do CRM com os casos da própria operação." },
      { title: "Acompanhamento", text: "Revisão do uso e dos indicadores, com ajustes na configuração." },
    ],
    tools: ["Kommo CRM", "WhatsApp"],
    faq: [
      {
        q: "Já uso o Kommo. Vocês podem reorganizar a conta?",
        a: "Sim. A configuração pode partir de uma conta existente — o diagnóstico mostra o que manter, ajustar ou reestruturar.",
      },
      {
        q: "Vocês implementam outros CRMs?",
        a: "Nossa especialidade de implementação é o Kommo, do qual somos parceiros oficiais. Se sua empresa usa outra ferramenta, avaliamos no diagnóstico o caminho mais adequado.",
      },
      {
        q: "A equipe recebe treinamento?",
        a: "Sim. O treinamento de uso faz parte da implementação, para vendedores e gestores.",
      },
    ],
    related: ["ia-e-automacoes", "estrategia-comercial"],
    seo: {
      title: "Implementação de Kommo CRM",
      description:
        "Parceira oficial Kommo: implementação e configuração do Kommo CRM, treinamento da equipe, automação de tarefas e análise de funis de vendas.",
    },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const servicePath = (slug: ServiceSlug) => `/servicos/${slug}/`;
