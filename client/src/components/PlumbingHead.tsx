import { useEffect } from 'react';

export default function PlumbingHead() {
  useEffect(() => {
    document.title = 'Plumber Hereford | Tap Replacement, Radiators & Leak Repairs';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Reliable plumber in Hereford. Tap replacement, toilet fitting, radiator installation, leak repairs & basic plumbing services. Fixed rates from £40/hr. Fully insured.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'plumber Hereford, plumbing repairs Hereford, tap replacement Hereford, radiator installation Herefordshire, leak repair Hereford, toilet fitting Hereford');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Plumber Hereford | Reliable Plumbing Repairs & Installation');
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Reliable plumbing services in Hereford. Taps, toilets, radiators & leak repairs. Fixed rates, fully insured.');
    }
  }, []);

  return null;
}
