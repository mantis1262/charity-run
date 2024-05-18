import { Helmet } from 'react-helmet-async';

import Gallery from '../../components/GalleryAll/Gallery/Gallery';

export default function GalleryPage() {
  return (
    <div>
      <Helmet>
        <title>Gallery</title>
      </Helmet>
      <Gallery />
    </div>
  );
}
