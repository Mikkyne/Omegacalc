import React from 'react'
import { Input, Grid } from 'semantic-ui-react'
import { useSave, useDecodedSave } from '../../hooks/saveHooks'
import Explanation from '../Explanation'

const SaveInput = () => {
  const { save, setSave } = useSave()
  const { setDecodedSave } = useDecodedSave()
  const saveChanged = (newSave: string) => {
    const decodedSave = atob(newSave)
    setSave(newSave)
    setDecodedSave(JSON.parse(decodedSave))
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Input placeholder='Enter save here...' size='large' onChange={(e) => saveChanged(e.target.value)} value={save} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default SaveInput
