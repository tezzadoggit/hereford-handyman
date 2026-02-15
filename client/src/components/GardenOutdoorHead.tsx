import { useEffect } from 'react';

export default function GardenOutdoorHead() {
  useEffect(() => {
    document.title = 'Garden Maintenance Hereford | Fencing, Decking, Patios & Shed Assembly';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional garden maintenance and outdoor services in Hereford. Fencing, decking, patios, shed assembly, garden clearance & pressure washing. Fixed rates from £40/hr. Fully insured.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'garden maintenance Hereford, fencing Hereford, decking Hereford, patio laying Herefordshire, shed assembly Hereford, pressure washing Hereford');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Garden & Outdoor Services Hereford | Fencing, Decking & Patios');
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Professional garden and outdoor services in Hereford. Fencing, decking, patios & shed assembly. Fixed rates, fully insured.');
    }
  }, []);

  return null;
}
