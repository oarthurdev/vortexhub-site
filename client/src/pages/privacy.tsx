import { company, mailto } from "@/content/site";
import { getPageMeta } from "@/lib/seo";
import { PageHero } from "@/components/site/page-hero";

// Plain-language notice based on how this site actually handles data.
const UPDATED = "15 de outubro de 2026";

const sections = [
  {
    title: "1. Quem é o controlador dos dados",
    body: [
      `O controlador dos dados pessoais tratados por meio deste site é ${company.legalName}, inscrita no CNPJ sob o nº ${company.cnpj}, com endereço na ${company.address.street}, Bairro das Nações, 2º andar, sala 6.`,
    ],
  },
  {
    title: "2. Quais dados coletamos",
    body: [
      "Pelo formulário de contato, coletamos os dados que você informa: nome, telefone, e-mail, nome da empresa e a mensagem enviada. Se você nos escrever por e-mail, recebemos o endereço e o conteúdo da mensagem.",
      "Este site não utiliza cookies próprios de publicidade nem ferramentas de análise de navegação.",
    ],
  },
  {
    title: "3. Para que usamos os dados",
    body: [
      "Usamos os dados exclusivamente para responder ao seu contato, entender a sua necessidade e, quando solicitado, apresentar uma proposta comercial. A base legal é o procedimento preliminar a um possível contrato, a pedido do titular (art. 7º, V, da LGPD), e o nosso legítimo interesse em responder solicitações recebidas.",
    ],
  },
  {
    title: "4. Com quem compartilhamos",
    body: [
      "O formulário é fornecido pela Kommo, plataforma de CRM que utilizamos para organizar os contatos recebidos. Os dados são armazenados nessa plataforma, que atua como operadora. Não vendemos nem cedemos seus dados a terceiros para fins de marketing.",
      "O formulário é carregado a partir dos servidores da Kommo, que pode utilizar cookies técnicos necessários ao seu funcionamento, conforme a política de privacidade da própria Kommo.",
    ],
  },
  {
    title: "5. Por quanto tempo mantemos",
    body: [
      "Mantemos os dados pelo tempo necessário para atender à sua solicitação e à eventual relação comercial, ou enquanto houver obrigação legal de guarda. Depois disso, os dados são excluídos ou anonimizados.",
    ],
  },
  {
    title: "6. Seus direitos",
    body: [
      "Você pode, a qualquer momento, solicitar confirmação do tratamento, acesso, correção, anonimização, portabilidade ou exclusão dos seus dados, além de informações sobre compartilhamento, nos termos do art. 18 da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).",
    ],
  },
];

export default function PrivacyPage() {
  const meta = getPageMeta("/privacidade/");
  return (
    <>
      <PageHero
        breadcrumbs={meta.breadcrumbs}
        eyebrow="Privacidade"
        title="Política de privacidade"
        intro={`Como a ${company.name} trata os dados pessoais enviados por este site. Última atualização: ${UPDATED}.`}
      />
      <section className="section bg-white text-on-light">
        <div className="site-container">
          <div className="max-w-prose">
            {sections.map((s) => (
              <div key={s.title} className="mb-10">
                <h2 className="type-h3">{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-4 leading-relaxed text-on-light-muted">
                    {p}
                  </p>
                ))}
              </div>
            ))}
            <div className="mb-10">
              <h2 className="type-h3">7. Contato</h2>
              <p className="mt-4 leading-relaxed text-on-light-muted">
                Para exercer seus direitos ou tirar dúvidas sobre esta política, escreva para{" "}
                <a href={mailto("Privacidade e dados pessoais")} className="font-semibold text-brand-700 underline underline-offset-2">
                  {company.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
