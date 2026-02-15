import { useEffect } from 'react';

export default function ElderlyHead() {
  useEffect(() => {
    // Update page title
    document.title = 'Elderly Home Adaptations Hereford | Grab Rails, Key Safes & Ramps';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Expert elderly home adaptations in Hereford. Grab rails, key safes & ramps installed by experienced pros. Trusted by local families. Book a safety check today.');
    
    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'grab rail installation Hereford, key safe fitter Hereford, elderly home adaptations, mobility ramp installation, handyman for elderly');
    
    // Update Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Elderly Home Adaptations Hereford | Safety Installations');
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Expert elderly home adaptations. Grab rails, key safes & ramps by experienced professionals.');
    }
  }, []);
  
  return null;
}
