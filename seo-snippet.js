// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.gvginsurancellc.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.gvginsurancellc.com/","title_tag":"Chattanooga auto insurance quotes | GVG Insurance Chattanooga","meta_description":"GVG Insurance Chattanooga offers family-friendly insurance for auto, home, renters, motorcycle, RV, and more. Get personalized insurance quotes Chattanooga today."},{"page_url":"https://www.gvginsurancellc.com/aboutus","title_tag":"Family-friendly insurance Chattanooga | GVG Insurance Chattanooga","meta_description":"Learn about GVG Insurance Chattanooga, a family-friendly insurance agency serving Chattanooga and North Georgia with bilingual agents dedicated to your protection."},{"page_url":"https://www.gvginsurancellc.com/insuranceservices","title_tag":"Chattanooga auto & home insurance | GVG Insurance Chattanooga","meta_description":"Explore auto, homeowners, renters, motorcycle, RV, boat, and jewelry insurance Chattanooga. GVG Insurance Chattanooga provides tailored coverage for your needs."},{"page_url":"https://www.gvginsurancellc.com/our-agents","title_tag":"Family-friendly insurance experts | GVG Insurance Chattanooga","meta_description":"Meet the licensed, bilingual, family-friendly insurance Chattanooga team at GVG Insurance Chattanooga. Local experts dedicated to protecting what matters most."},{"page_url":"https://www.gvginsurancellc.com/getaquote","title_tag":"Insurance quotes Chattanooga | GVG Insurance Chattanooga","meta_description":"Request fast, personalized insurance quotes Chattanooga for auto, homeowners, renters, motorcycle, RV, boat, and more from GVG Insurance Chattanooga today."},{"page_url":"https://www.gvginsurancellc.com/carinsurance","title_tag":"Chattanooga auto insurance experts | GVG Insurance Chattanooga","meta_description":"Get customized Chattanooga auto insurance from licensed local agents at GVG Insurance Chattanooga. Protect your car and finances with tailored coverage today."},{"page_url":"https://www.gvginsurancellc.com/motorcycleinsurance","title_tag":"Motorcycle insurance Chattanooga | GVG Insurance Chattanooga","meta_description":"Protect your ride with motorcycle and RV insurance Chattanooga from GVG Insurance Chattanooga. Enjoy peace of mind on every trip with tailored coverage."},{"page_url":"https://www.gvginsurancellc.com/homeinsurance","title_tag":"Homeowners & renters insurance Chattanooga | GVG Insurance","meta_description":"Secure your home and belongings with homeowners insurance Chattanooga and renters insurance Chattanooga from GVG Insurance Chattanooga. Get a custom quote today."},{"page_url":"https://www.gvginsurancellc.com/boatinsurance","title_tag":"Boat insurance Chattanooga | GVG Insurance Chattanooga","meta_description":"Enjoy the water with confidence using boat insurance Chattanooga from GVG Insurance Chattanooga. Protect your boat and adventures with local, reliable coverage."}],"keywords":["Chattanooga auto insurance","GVG Insurance Chattanooga","homeowners insurance Chattanooga","renters insurance Chattanooga","motorcycle insurance Chattanooga","RV insurance Chattanooga","boat insurance Chattanooga","jewelry insurance Chattanooga","insurance quotes Chattanooga","family-friendly insurance Chattanooga"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://www.gvginsurancellc.com/#insuranceagency",
  "name": "GVG Insurance LLC",
  "url": "https://www.gvginsurancellc.com/",
  "image": "https://static.wixstatic.com/media/cbe278_c711ec88c5654117ae80621be87adc0b%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/cbe278_c711ec88c5654117ae80621be87adc0b%7Emv2.png",
  "logo": "https://static.wixstatic.com/media/cbe278_c711ec88c5654117ae80621be87adc0b%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/cbe278_c711ec88c5654117ae80621be87adc0b%7Emv2.png",
  "description": "GVG Insurance LLC is the only GEICO Exclusive Insurance Agency in the Tennessee Valley and North Georgia market, providing bilingual auto, home, renters, motorcycle, RV, boat and jewelry insurance from its Chattanooga local office since 2005.",
  "telephone": "+1-423-398-4445",
  "email": "info@gvgig.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6227 Lee Hwy",
    "addressLocality": "Chattanooga",
    "addressRegion": "TN",
    "postalCode": "37421",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Chattanooga"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Tennessee Valley"
    },
    {
      "@type": "AdministrativeArea",
      "name": "North Georgia"
    }
  ],
  "sameAs": [
    "https://www.facebook.com"
  ],
  "foundingDate": "2005",
  "founder": {
    "@type": "Person",
    "name": "Greta"
  },
  "slogan": "Real People with a Passion for Protecting you.",
  "knowsLanguage": [
    "English",
    "Spanish"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Insurance Coverages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Auto Insurance",
          "description": "Customized auto insurance solutions tailored to individual needs, provided by the only GEICO Exclusive Agency in the Tennessee Valley and North Georgia since 2005.",
          "url": "https://www.gvginsurancellc.com/carinsurance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Motorcycle and RV Insurance",
          "description": "Comprehensive motorcycle and RV insurance coverage for riders in Chattanooga and North Georgia, designed to provide peace of mind on and off the road.",
          "url": "https://www.gvginsurancellc.com/motorcycleinsurance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Homeowners Insurance",
          "description": "Home insurance options for primary residences, vacation homes, vacant properties, and landlords, tailored to protect your property investment.",
          "url": "https://www.gvginsurancellc.com/homeinsurance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Renters Insurance",
          "description": "Renters insurance with coverage for personal belongings and liability protection to help cover the cost of replacing everyday items.",
          "url": "https://www.gvginsurancellc.com/homeinsurance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Boat and Watercraft Insurance",
          "description": "Boat and personal watercraft insurance to protect aquatic adventures on the lakes and rivers around Chattanooga and North Georgia.",
          "url": "https://www.gvginsurancellc.com/boatinsurance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Jewelry Insurance",
          "description": "Jewelry insurance coverage with minimal to no deductible to help safeguard valuable jewelry pieces wherever you go.",
          "url": "https://www.gvginsurancellc.com/insuranceservices"
        }
      }
    ]
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-423-398-4445",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": [
        "English",
        "Spanish"
      ]
    }
  ],
  "hasMap": "https://www.google.com/maps/search/?api=1&query=6227+Lee+Hwy,+Chattanooga,+TN",
  "urlTemplate": "https://www.gvginsurancellc.com/getaquote"
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
