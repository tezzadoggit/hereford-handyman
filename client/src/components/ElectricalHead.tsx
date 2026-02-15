import { useEffect } from 'react';

export default function ElectricalHead() {
  useEffect(() => {
    document.title = 'Electrician Hereford | Light Fitting, Socket Replacement & Smart Home Setup';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional electrician services in Hereford. Light fitting installation, socket replacement, smart home setup & TV mounting. Fixed rates from £40/hr. Fully insured.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'electrician Hereford, light fitting installation Hereford, socket replacement Hereford, smart home setup Herefordshire, TV mounting Hereford');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Electrician Hereford | Light Fitting & Smart Home Installation');
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Professional electrical services in Hereford. Light fittings, sockets, smart home & TV mounting. Fixed rates, fully insured.');
    }
  }, []);

  return null;
}
