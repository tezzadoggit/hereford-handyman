import { useEffect } from 'react';

export default function FlooringHead() {
  useEffect(() => {
    document.title = 'Flooring Hereford | Laminate, Vinyl, Parquet & Tile Floor Fitting';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional floor fitter in Hereford. Laminate, vinyl, parquet restoration, tile flooring & underlay installation. Fixed rates from £40/hr. Fully insured.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'flooring Hereford, floor fitter Hereford, laminate flooring Hereford, vinyl flooring Herefordshire, parquet restoration Hereford, tile flooring Hereford');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Flooring Hereford | Professional Floor Fitting & Restoration');
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Professional flooring installation in Hereford. Laminate, vinyl, parquet & tile. Fixed rates, fully insured.');
    }
  }, []);

  return null;
}
