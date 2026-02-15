import { useEffect } from 'react';

export default function B2BHead() {
  useEffect(() => {
    // Update page title
    document.title = 'Commercial Property Maintenance Hereford | Retainer Packages for Agents';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Priority maintenance for Hereford Letting Agents & Care Homes. Our retainer guarantees 48hr response times, flat hourly rates & monthly invoicing. Partner now.');
    
    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'property maintenance Hereford, letting agent maintenance, care home maintenance, HMO maintenance, commercial handyman Hereford');
    
    // Update Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Commercial Property Maintenance Hereford | B2B Retainer Packages');
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Priority maintenance for Hereford Letting Agents & Care Homes. 48hr response guarantee.');
    }
  }, []);
  
  return null;
}
