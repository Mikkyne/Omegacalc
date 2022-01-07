import React from 'react'
import { Button, Input, Grid, Divider } from 'semantic-ui-react'
import { useSave, useDecodedSave } from '../../hooks/saveHooks'

const SaveInput = () => {
  const { save, setSave } = useSave()
  const { setDecodedSave } = useDecodedSave()
  const saveChanged = (newSave: string) => {
    setSave(newSave)
  }

  const decodeSave = () => {
    const newDecodedSave = atob(save)
    setDecodedSave(JSON.parse(newDecodedSave))
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Input placeholder='Enter save here...' size='large' onChange={(e) => saveChanged(e.target.value)} value={save} />
        </Grid.Column>
        <Grid.Column width={16}>
        </Grid.Column>
        <Divider hidden />
        <Grid.Column width={16}>
          <Button onClick={() => decodeSave()}>Decode Save</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default SaveInput
