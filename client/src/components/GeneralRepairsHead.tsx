import { useEffect } from 'react';

export default function GeneralRepairsHead() {
  useEffect(() => {
    document.title = 'Handyman Hereford | General Repairs, Odd Jobs & Property Maintenance';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Reliable handyman in Hereford for general repairs and odd jobs. Door repairs, window repairs, wall repairs, shelving, picture hanging & more. Fixed rates from £40/hr. Fully insured.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'handyman Hereford, property repairs Hereford, general repairs Hereford, odd jobs Herefordshire, door repair Hereford, window repair Hereford');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Handyman Hereford | General Repairs & Property Maintenance');
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Reliable handyman for general repairs in Hereford. Doors, windows, walls, shelving & odd jobs. Fixed rates, fully insured.');
    }
  }, []);

  return null;
}
