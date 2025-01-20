import Text from '../Text';
import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@heroui/react';

type WarningModalProps = {
  onConfirm: () => void;
  onClose?: () => void;
  cancelText?: string;
  title: string;
  description?: string;
} & React.ComponentProps<typeof Button>;

export function ButtonWithConfirm({
  onConfirm,
  onClose: outerOnClose,
  children,
  cancelText = 'Cancel',
  title,
  description,
  ...props
}: WarningModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} {...props}>
        {children}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              {description && (
                <ModalBody>
                  <Text>{description}</Text>
                </ModalBody>
              )}
              <ModalFooter>
                <div className="flex w-full justify-between">
                  <Button
                    variant="flat"
                    onPress={() => {
                      onClose();
                      outerOnClose?.();
                    }}
                  >
                    {cancelText}
                  </Button>
                  <Button
                    {...props}
                    onPress={() => {
                      onConfirm();
                      onClose();
                      outerOnClose?.();
                    }}
                  >
                    {children}
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ButtonWithConfirm;
