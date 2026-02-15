import { useEffect } from 'react';

export default function CarpentryHead() {
  useEffect(() => {
    document.title = 'Carpenter & Joiner Hereford | Bespoke Shelving, Panelling & Staircase Refurbishment';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Expert carpenter and joiner in Hereford. Bespoke shelving, wall panelling, staircase refurbishment, door hanging & skirting boards. Fixed rates from £40/hr. Fully insured.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'carpenter Hereford, joinery Hereford, bespoke shelving Hereford, wall panelling Hereford, staircase refurbishment Herefordshire, door hanging Hereford');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Carpenter & Joiner Hereford | Bespoke Woodwork & Joinery');
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Expert carpentry and joinery in Hereford. Bespoke shelving, panelling, staircases & door hanging. Fixed rates, fully insured.');
    }
  }, []);

  return null;
}
