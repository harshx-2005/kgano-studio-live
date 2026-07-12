import { createFileRoute } from "@tanstack/react-router";
import { KganoSite } from "@/components/kgano/KganoSite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KGANO Brand Studio — Building Brands. Inspiring Success." },
      {
        name: "description",
        content:
          "Premium South African branding agency delivering strategy, identity, web design, marketing and business development for startups, SMEs and established brands.",
      },
      { property: "og:title", content: "KGANO Brand Studio — Premium Branding Agency" },
      {
        property: "og:description",
        content:
          "We craft memorable brands through strategy, design and innovation. Based in South Africa, serving the world.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "KGANO Brand Studio",
          url: "/",
          email: "KganoBrandStudio@gmail.com",
          telephone: "+27793212561",
          areaServed: "ZA",
          address: {
            "@type": "PostalAddress",
            streetAddress: "59 Clarke St, Rynfield",
            addressLocality: "Benoni",
            addressRegion: "Gauteng",
            postalCode: "1501",
            addressCountry: "ZA",
          },
          sameAs: ["https://www.facebook.com/abednigokhwere.mokalapa"],
          description:
            "Premium creative branding agency based in Lebowakgomo, South Africa, offering brand identity, marketing, web design and business development.",
        }),
      },
    ],
  }),
  component: KganoSite,
});