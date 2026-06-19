import { useEffect } from "react";
import { CONTACT_INFO } from "../data";

export default function LocalSEOAndSchema() {
  useEffect(() => {
    // Schema Markup JSON-LD for Local Restaurant Big Business
    const schema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": CONTACT_INFO.name,
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      "telephony": CONTACT_INFO.phone,
      "url": window.location.href,
      "telephone": CONTACT_INFO.phone,
      "priceRange": "$$",
      "servesCuisine": "Multi-Cuisine, Indian, Italian, Continental, Fast Food",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": CONTACT_INFO.rating.toString(),
        "reviewCount": "128"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5th Floor, 48, Rajeev Gandhi Nagar, Instrumentation Limited Colony",
        "addressLocality": "Kota",
        "addressRegion": "Rajasthan",
        "postalCode": "324005",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.1388",
        "longitude": "75.8340"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "12:00",
          "closes": "23:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Friday", "Saturday", "Sunday"],
          "opens": "12:00",
          "closes": "23:59"
        }
      ]
    };

    // Remove old schema if exists
    const existingScript = document.getElementById("restaurant-schema");
    if (existingScript) {
      existingScript.remove();
    }

    // Insert new schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "restaurant-schema";
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("restaurant-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null; // Side-effect only component
}
