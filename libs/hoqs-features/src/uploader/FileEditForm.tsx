import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from '@heroui/react';
import { useEffect, useState } from 'react';
import { BadgeSelector, FILE_BADGES, formatBytes, formatDateTime, StorageFile, Text } from '@hoqs/core-components';

import UploaderReplacerButton from './UploadReplacerButton';

type FileEditFormProps = {
  initialFile: StorageFile;
  onChange: (file: StorageFile) => void;
} & Omit<React.ComponentProps<typeof Button>, 'onChange'>;

export function FileEditForm({
  initialFile,
  onChange,
  children,
  ...props
}: FileEditFormProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [file, setFile] = useState(initialFile);

  useEffect(() => {
    setFile(initialFile);
  }, [initialFile]);

  function saveChanges() {
    onChange(file);
  }

  return (
    <>
      <Button onPress={onOpen} {...props} color="primary">
        {children}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit file
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Title"
                  aria-label="Edit title"
                  placeholder="Enter the title of the file"
                  value={file.title}
                  onChange={(e) => setFile({ ...file, title: e.target.value })}
                  variant="bordered"
                />

                <Textarea
                  label="Description"
                  aria-label="Edit description"
                  placeholder="Enter the description of the file"
                  value={file.description}
                  onChange={(e) =>
                    setFile({ ...file, description: e.target.value })
                  }
                  variant="bordered"
                  minRows={10}
                  maxRows={20}
                />
                <BadgeSelector
                  badges={file.badges ?? []}
                  badgeTypes={FILE_BADGES}
                  setBadges={(badges) => setFile({ ...file, badges })}
                  label="Select File Badges"
                />

                <div className="flex justify-between w-full">
                  <Text variant="small" color="muted">
                    {file.mimetype} - {formatBytes(file.size)}
                  </Text>
                  <UploaderReplacerButton
                    file={file}
                    setFile={setFile}
                    variant="bordered"
                    color="secondary"
                  >
                    Replace file
                  </UploaderReplacerButton>
                </div>
                <Text variant="small" color="muted">
                  Created at {formatDateTime(file.createdAt)}
                  <br /> Updated at {formatDateTime(file.updatedAt)}
                </Text>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    saveChanges();
                    onClose();
                  }}
                >
                  Continue
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default FileEditForm;
