import { useEffect } from 'react';

export default function BathroomRenovationsHead() {
  useEffect(() => {
    document.title = 'Bathroom Fitter Hereford | Bathroom Renovation, Tiling & Shower Installation';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Expert bathroom fitter in Hereford. Full bathroom renovation, tile fitting, plumbing, shower installation & accessibility adaptations. Fixed rates from £40/hr. Fully insured.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'bathroom fitter Hereford, bathroom renovation Hereford, tile fitting Hereford, shower installation Herefordshire, bathroom refurbishment Hereford');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Bathroom Fitter Hereford | Professional Bathroom Renovations');
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Expert bathroom renovations in Hereford. Full refurbishment, tiling, plumbing & shower installation. Fixed rates, fully insured.');
    }
  }, []);

  return null;
}
