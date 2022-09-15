import React from 'react'
import {Text} from '@mantine/core'
function RecAdmissions({name}) {
  return (
    <div>
       <Text size="xl" weight={600}>
        {name}
      </Text>
    </div>
  )
}

export default RecAdmissions