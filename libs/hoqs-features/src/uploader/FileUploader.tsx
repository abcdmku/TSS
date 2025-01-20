import Uploader from './Uploader';
import { AbstractStorageFile, StorageFile } from '@hoqs/core-components';
import { FileList } from './FileList';

interface Props {
  files: StorageFile[] | null;
  setFiles: (files: StorageFile[] | null) => void;
  bucket: string;
  path: string;
}

export function FileUploader({ files, setFiles, path, bucket }: Props) {
  function addFile(file: AbstractStorageFile) {
    const newFile = {
      description: '',
      ...file,
    };

    if (!Array.isArray(files)) {
      setFiles([newFile]);
    } else {
      setFiles([...files, newFile]);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Uploader
        supabaseBucket={bucket}
        supabasePath={path}
        onFileUploaded={addFile}
        subtitle="PDF, DOCS, XLSX, etc. Max 20mb"
      />
      <FileList files={files} setFiles={setFiles} />
    </div>
  );
}

export default FileUploader;
