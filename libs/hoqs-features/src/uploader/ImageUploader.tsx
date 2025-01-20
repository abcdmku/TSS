
import { AbstractStorageFile, ImageCarousel, StorageImage } from '@hoqs/core-components';
import { Uploader } from '@hoqs-features';

interface Props {
  images: StorageImage[] | null;
  setImages: (images: StorageImage[]) => void;
  bucket: string;
  path: string;
}

export function ImageUploader({ images, setImages, path, bucket }: Props) {
  function addImage(file: AbstractStorageFile) {
    if (!images) {
      setImages([{ ...file }]);
      return;
    }

    setImages([...images, { ...file }]);
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <Uploader
        supabaseBucket={bucket}
        supabasePath={path}
        onFileUploaded={addImage}
        subtitle="PNG, JPG or SVG"
        allowedTypes={allowedFileTypes}
      />
      <ImageCarousel images={images} setImages={setImages} />
    </div>
  );
}

const allowedFileTypes = [
  'image/png',
  'image/jpeg',
  'image/svg+xml',
  'image/jpg',
  'image/svg',
];

export default ImageUploader;
