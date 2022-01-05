import React, { useState } from 'react'
import { Button, Input, Grid } from 'semantic-ui-react'

interface SaveInputProps {
  setSave:Function
}

const SaveInput = ({setSave}:SaveInputProps) => {
  const [saveInput, setSaveInput] = useState('')
  const saveChanged = (newSave:string) => {
    const decodedSave = atob(newSave)
    setSave(JSON.parse(decodedSave))
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={4}>
          <Input fluid placeholder='Enter save here...' size='massive' onChange={(e) => setSaveInput(e.target.value)} value={saveInput} />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button onClick={() => saveChanged(saveInput)}>Decode Save</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default SaveInput
