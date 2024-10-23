import TextField from '@mui/material/TextField'
import { Box, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { Checkbox } from '@mui/material'
import { FormControlLabel } from '@mui/material'
import { FormGroup } from '@mui/material'
import Button from '@mui/material/Button'
import SelectRadio from '../../components/SelectRadio/SelectRadio'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import MyDatePicker from '../../components/DatePicker/DatePicker'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { authAPI } from '@/apis/authAPI'
import dayjs from 'dayjs'

const minimumAgeDate = new Date()
minimumAgeDate.setFullYear(minimumAgeDate.getFullYear() - 16)

const RegisterPage = (props) => {
  // Định nghĩa schema cho formData
  const formDataSchema = z.object({
    username: z.string().email({ message: 'Invalid username address' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),
    firstName: z.string().min(3, { message: 'First name is required' }),
    lastName: z.string().min(3, { message: 'Last name is required' }),
    confirmPassword: z.string().min(6, {
      message: 'Confirm password must be at least 6 characters long'
    })
  })

  // Kiểm tra confirmPassword khớp với password
  const extendedFormDataSchema = formDataSchema.refine(
    (data) => data.password === data.confirmPassword,
    {
      message: 'Passwords do not match',
      path: ['confirmPassword'] // Đặt lỗi vào trường confirmPassword
    }
  )

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: '',
    dob: dayjs(Date.now()).format('YYYY-MM-DD')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formDataSchema)
  })

  const handleRegister = (data) => {
    const newData = { ...data, dob: formData.dob }
    console.log('🚀 ~ handleRegister ~ newData:', newData)

    authAPI.registerAPI(newData).then((res) => {
      console.log('🚀 ~ handleRegister ~ res', res)
    })
  }

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '32px',
          gap: 2
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 'bold'
          }}
        >
          TẠO TÀI KHOẢN APPLE
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            marginTop: '5px'
          }}
        >
          Chỉ cần có một Tài khoản Apple để truy cập vào tất cả dịch vụ của
          Apple.
        </Typography>
        <Container sx={{ width: '48%' }}>
          <form onSubmit={handleSubmit(handleRegister)}>
            <Box
              sx={{
                display: 'flex',
                gap: 2
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="first name"
                  error={errors.firstName}
                  variant="outlined"
                  {...register('firstName')}
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
                {errors.firstName && (
                  <Typography sx={{ color: 'red' }}>
                    {errors.firstName.message}
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="last name"
                  error={errors.lastName}
                  variant="outlined"
                  {...register('lastName')}
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
                {errors.lastName && (
                  <Typography sx={{ color: 'red' }}>
                    {errors.lastName.message}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: '32px',
                width: '100%'
              }}
            >
              <MyDatePicker
                dob={formData.dob}
                setFormData={setFormData}
                register={register}
                errors={errors}
              />
            </Box>
            <Box
              sx={{
                marginTop: '20px',
                gap: 2,
                marginBottom: '20px'
              }}
            >
              <hr></hr>
              <Box sx={{ gap: 2, marginTop: '15px', marginBottom: '20px' }}>
                <TextField
                  sx={{
                    width: '100%'
                  }}
                  id="outlined-basic"
                  label="username"
                  error={errors.username}
                  {...register('username')}
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  variant="outlined"
                />
                {errors.username && (
                  <Typography sx={{ color: 'red' }}>
                    {errors.username.message}
                  </Typography>
                )}
                <Typography
                  sx={{
                    fontSize: '15px',
                    marginTop: '20px'
                  }}
                >
                  Đây sẽ là Tài khoản Apple mới của bạn.
                </Typography>
              </Box>
              <Box>
                <TextField
                  sx={{
                    width: '100%'
                  }}
                  id="outlined-basic"
                  label="password"
                  type="password"
                  error={errors.password}
                  {...register('password')}
                  variant="outlined"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                {errors.password && (
                  <Typography sx={{ color: 'red' }}>
                    {errors.password.message}
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  marginTop: '15px'
                }}
              >
                <TextField
                  sx={{
                    width: '100%'
                  }}
                  id="outlined-basic"
                  label="confirm password"
                  {...register('confirmPassword')}
                  variant="outlined"
                  type="password"
                  error={errors.confirmPassword}
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value
                    })
                  }
                />
                {errors.confirmPassword && (
                  <Typography sx={{ color: 'red' }}>
                    {errors.confirmPassword.message}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '10px',
                gap: 2
              }}
            >
              <Button type="submit" variant="contained">
                register
              </Button>
              <Link to={'/login-page'}>
                <Button variant="contained">back to login</Button>
              </Link>
            </Box>
          </form>
        </Container>
      </Box>
    </Container>
  )
}

export default RegisterPage
