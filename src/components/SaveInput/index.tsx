import React from 'react'
import { Button, Input, Grid, Divider } from 'semantic-ui-react'
import { useSave, useDecodedSave } from '../../hooks/saveHooks'
import Explanation from '../Explanation'

const SaveInput = () => {
  const { save, setSave } = useSave()
  const { setDecodedSave } = useDecodedSave()
  const saveChanged = (newSave: string) => {
    setSave(newSave)
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
          <Explanation/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default SaveInput
