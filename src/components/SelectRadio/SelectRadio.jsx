import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export default function SelectRadio() {
  return (
    <FormControl
      sx={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '15px'
      }}
    >
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Tin nhắn" />
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Cuộc gọi điện"
        />
      </RadioGroup>
    </FormControl>
  )
}
