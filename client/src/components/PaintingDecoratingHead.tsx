import { useEffect } from 'react';

export default function PaintingDecoratingHead() {
  useEffect(() => {
    document.title = 'Painter & Decorator Hereford | Interior & Exterior Painting, Wallpapering';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional painter and decorator in Hereford. Interior & exterior painting, wallpapering, wall panelling & colour consultations. Fixed rates from £40/hr. Fully insured.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'painter decorator Hereford, wallpapering Hereford, interior painting Hereford, exterior painting Hereford, wall panelling Hereford, decorating services Herefordshire');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Painter & Decorator Hereford | Professional Painting & Wallpapering');
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Professional painting and decorating in Hereford. Interior & exterior painting, wallpapering, wall panelling. Fixed rates, fully insured.');
    }
  }, []);

  return null;
}
