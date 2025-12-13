/* --- Base ------------------------------------------------------------------------------------- */
import type { WithContext, PoliticalParty, ImageObject, ContactPoint, PostalAddress } from "schema-dts";
/* --- Data ------------------------------------------------------------------------------------- */
import { SITE } from "@/configs/site";
/* --- Functions -------------------------------------------------------------------------------- */
export function getJsonLd(): WithContext<PoliticalParty> {
  /* --- Constants -------------------------------------------------- */
  /* --- Logo ----------------------- */
  const logo: ImageObject = {
    "@type": "ImageObject",
    url: `${SITE.data.url}/logo.png`,
    width: {
      "@type": "QuantitativeValue",
      value: SITE.number.logoSize,
    },
    height: {
      "@type": "QuantitativeValue",
      value: SITE.number.logoSize,
    },
  };
  /* --- Address -------------------- */
  const address: PostalAddress = {
    "@type": "PostalAddress",
    addressCountry: SITE.data.country,
    addressLocality: SITE.data.city,
  };
  /* --- Contact Point -------------- */
  const contactPoint: ContactPoint = {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: [SITE.data.language],
  };
  /* --- Run -------------------------------------------------------- */
  return {
    "@context": "https://schema.org",
    "@type": "PoliticalParty",
    name: SITE.data.name,
    url: SITE.data.url,
    logo,
    image: logo,
    slogan: SITE.data.slogan,
    address,
    areaServed: SITE.data.country,
    sameAs: Object.values(SITE.media),
    contactPoint,
    foundingDate: SITE.Date.foundingDate.toISOString(),
    founders: SITE.person.founders,
    members: SITE.person.members,
  };
}