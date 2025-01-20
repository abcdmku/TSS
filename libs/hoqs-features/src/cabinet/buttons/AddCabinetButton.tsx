import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from '@heroui/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import slugify from 'slugify';
import { Text } from '@hoqs/core-components';
import { useNavigate } from '@tanstack/react-router';
import { supabase, toPromise } from '../../helpers/supabase';

export function AddCabinetButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [cabinet, setCabinet] = useState({
    brand: 'Paraflex',
    model: 'Type C',
    max_spl: [],
  });
  const navigate = useNavigate();

  const slug = slugify(cabinet.model, { lower: true, strict: true });

  function createCabinet() {
    const uploader = toPromise(
      supabase.from('cabinets').insert([{ ...cabinet, id: slug }])
    );
    toast.promise(uploader, {
      loading: 'Saving cabinet to database',
      success: (c) => {
        navigate(`/cabinets/${slug}/edit`);
        return `Successfully saved cabinet ${cabinet.brand} - ${cabinet.model}`;
      },
      error: (e) => `Error saving cabinet ${e.message}`,
    });
  }

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Add
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create new cabinet
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Brand"
                  placeholder="Enter cabinet brand"
                  variant="bordered"
                  defaultValue="Paraflex"
                  onChange={(e) =>
                    setCabinet((c) => ({ ...c, brand: e.target.value }))
                  }
                />
                <Input
                  autoFocus
                  label="Model"
                  placeholder="Enter cabinet model"
                  variant="bordered"
                  defaultValue="Type C"
                  onChange={(e) =>
                    setCabinet((c) => ({ ...c, model: e.target.value }))
                  }
                />
                <Text color="muted">ID: {slug}</Text>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={createCabinet}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddCabinetButton;
