import React from 'react'
import { Input } from 'semantic-ui-react'

interface SaveInputProps {
  setSave:Function
}

const SaveInput = ({setSave}:SaveInputProps) => {
  const saveChanged = (newSave:string) => {
    const decodedSave = atob(newSave)
    setSave(JSON.parse(decodedSave))
  }

  return <Input onChange={(e) => saveChanged(e.target.value)}
                fluid
                placeholder='Enter Save here..'
                size='massive'
                />
}

export default SaveInput
