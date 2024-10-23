import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useEffect } from 'react'
import { useState } from 'react'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

export default function CountrySelection() {
  const theme = useTheme()

  const [countries, setCountries] = useState([])
  const [selectCountry, setSelectCountry] = useState('')

  // * api thực thi import các quốc gia.
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCountries(data)
      })
  }, [])
  const handleChange = (even) => {
    setSelectCountry(even.target.value)
  }
  return (
    <div>
      <FormControl sx={{ m: 1, width: '100%' }}>
        <InputLabel id="demo-multiple-name-label">Quốc gia/vùng</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={selectCountry}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {countries.map((country, index) => (
            <MenuItem key={index} value={country.name.common}>
              {country.name.common}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
