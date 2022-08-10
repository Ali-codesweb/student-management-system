import { Button, Modal } from '@mantine/core'
import React from 'react'

function CustomDeleteModal({opened,setOpened,onDelete,title}) {
    
  return (
    <Modal
    opened={opened}
    onClose={() => setOpened(false)}
    title={title}
    centered
  >
    <div className="d-flex">
      <div className=" w-100">
        <Button
          leftIcon={<i class="fas fa-times"></i>}
          variant="outline"
          onClick={() => setOpened(false)}
        >
          Close
        </Button>
      </div>
      <div>
        <Button
          leftIcon={<i class="fas fa-trash"></i>}
          color="red"
          variant="filled"
          onClick={async() => {
            await onDelete()
            setOpened(false)}}
        >
          Delete
        </Button>
      </div>
    </div>
  </Modal>
  )
}

export default CustomDeleteModal