import { useEffect } from 'react';

export default function FlatPackAssemblyHead() {
  useEffect(() => {
    document.title = 'Flat Pack Assembly Hereford | IKEA Furniture Assembly & Installation';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional flat pack assembly in Hereford. IKEA furniture, wardrobes, desks, beds & garden furniture assembled quickly and correctly. Fixed rates from £40/hr. Fully insured.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'flat pack assembly Hereford, furniture assembly Hereford, IKEA assembly Hereford, wardrobe assembly Herefordshire, flatpack furniture Hereford');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Flat Pack Assembly Hereford | Professional Furniture Assembly');
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Professional flat pack assembly in Hereford. IKEA, wardrobes, desks & beds assembled correctly. Fixed rates, fully insured.');
    }
  }, []);

  return null;
}
