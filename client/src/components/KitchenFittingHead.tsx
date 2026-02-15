import { useEffect } from 'react';

export default function KitchenFittingHead() {
  useEffect(() => {
    document.title = 'Kitchen Fitter Hereford | Kitchen Installation, Worktops & Cabinet Assembly';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional kitchen fitter in Hereford. Full kitchen installation, worktop fitting, cabinet assembly & splashbacks. Fixed rates from £40/hr. Fully insured.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'kitchen fitter Hereford, kitchen installation Hereford, worktop fitting Hereford, cabinet assembly Herefordshire, kitchen splashbacks Hereford');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Kitchen Fitter Hereford | Professional Kitchen Installation');
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Professional kitchen installation in Hereford. Worktop fitting, cabinet assembly & splashbacks. Fixed rates, fully insured.');
    }
  }, []);

  return null;
}
