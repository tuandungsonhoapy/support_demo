import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Box } from '@mui/material'
import dayjs from 'dayjs'

export default function MyDatePicker({ dob, setFormData }) {
  const formattedDob = dob ? dayjs(dob, 'YYYY-MM-DD') : null

  const handleDateChange = (newValue) => {
    const formattedDate = newValue ? dayjs(newValue).format('YYYY-MM-DD') : ''
    setFormData((prev) => ({ ...prev, dob: formattedDate }))
  }

  return (
    <Box sx={{ marginTop: '10px' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker value={formattedDob} onChange={handleDateChange} />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  )
}
