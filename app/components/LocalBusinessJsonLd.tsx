
import { oficina } from "@/app/data/oficina";
import { conteudoCard } from "@/app/data/servicos";

export default function LocalBusinessJsonLd() {
  // Não publicar os dados demonstrativos como um negócio real.
  if (oficina.demonstracao) return null;

  // Pendentes de confirmação: postalCode (CEP), geo (coordenadas),
  // priceRange (faixa de preços) e image (foto real da oficina).
  // A imagem em oficina.imagem é ilustrativa, por isso não é usada aqui.

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",

    "@id": "https://www.ajuniao.com.br/#business",

    name: oficina.nome,

    description:
      "Oficina mecânica em Joinville - SC, especializada em manutenção preventiva e corretiva de veículos.",

    url: "https://www.ajuniao.com.br/",

    telephone: [oficina.telefone, oficina.telefone2].map(
      (telefone) => `+55${telefone.replace(/\D/g, "")}`,
    ),

    logo: "https://www.ajuniao.com.br/img/navbar/logo.png",

    currenciesAccepted: "BRL",

    paymentAccepted: "Dinheiro, Pix, Cartões",

    address: {
      "@type": "PostalAddress",
      streetAddress: oficina.endereco.trim(),
      addressLocality: "Joinville",
      addressRegion: "SC",
      addressCountry: "BR",
    },

    areaServed: {
      "@type": "City",
      name: "Joinville",
    },

    // Horários confirmados em oficina-real.ts (oficina.horarios).
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],

    sameAs: [
      oficina.instagram,
      oficina.facebook,
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de mecânica automotiva",
      itemListElement: conteudoCard.map((servico) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: [servico.title, servico.title2].filter(Boolean).join(" "),
          description: servico.text,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
