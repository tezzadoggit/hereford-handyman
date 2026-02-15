import { useEffect } from 'react';

export default function MediaWallsHead() {
  useEffect(() => {
    // Update page title
    document.title = 'Media Wall Installers & Smart Home Setup Hereford';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Transform your lounge with bespoke media walls & smart tech installation in Hereford. Floating TVs, electric fires & hidden cables. See our portfolio online.');
    
    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'media walls Hereford, media wall installation, floating TV wall, slat wall panels, smart home installation Hereford, electric fire installation');
    
    // Update Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Media Wall Installers & Smart Home Setup Hereford');
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Bespoke media walls & smart tech installation. Floating TVs, electric fires & hidden cables.');
    }
  }, []);
  
  return null;
}
