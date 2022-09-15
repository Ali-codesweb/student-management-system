import { Button, Modal } from "@mantine/core";
import React from "react";

function CustomDeleteModal({ opened, setOpened, onDelete, title }) {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title={title}
      centered
    >
      
          <Button
          mt={30}
            fullWidth
            leftIcon={<i className="fas fa-trash"></i>}
            color="red"
            variant="filled"
            onClick={async () => {
              await onDelete();
              setOpened(false);
            }}
          >
            Delete
          </Button>
       
    </Modal>
  );
}

export default CustomDeleteModal;
