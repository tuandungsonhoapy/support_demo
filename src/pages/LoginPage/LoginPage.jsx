import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { authAPI } from '@/apis/authAPI'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const navigate = useNavigate()

  const formDataSchema = z.object({
    username: z.string().email({ message: 'Invalid username address' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' })
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formDataSchema)
  })

  const handleLogin = (data) => {
    authAPI.loginAPI(data).then((res) => {
      const data = res.result
      if (data.authenticated === true) {
        localStorage.setItem('accessToken', data.token)
        navigate('/')
      }
    })
  }

  return (
    <Box
      sx={{
        minHeight: '60vh'
      }}
    >
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography
          sx={{
            fontSize: '1.6rem',
            marginTop: '40px'
          }}
        >
          Đăng nhập vào tài khoản SamSung
        </Typography>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              marginTop: '20px'
            }}
          >
            <TextField
              id="outlined-required"
              label="Username or Phone"
              error={errors.username}
              {...register('username')}
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              sx={{
                width: '480px',
                height: '56px',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderRadius: '12px'
                }
              }}
            />
            {errors.username && (
              <Typography sx={{ color: 'red' }}>
                {errors.username.message}
              </Typography>
            )}
            <TextField
              id="outlined"
              label="Password"
              error={errors.password}
              {...register('password')}
              value={formData.password}
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              sx={{
                width: '480px',
                height: '56px',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderRadius: '12px'
                }
              }}
            />
            {errors.password && (
              <Typography sx={{ color: 'red' }}>
                {errors.password.message}
              </Typography>
            )}
          </Box>
          <Button color="primary" type="submit">
            Login
          </Button>
        </form>
        <Box
          sx={{
            marginTop: '24px',
            textAlign: 'center'
          }}
        >
          <Link to={'/forgot-password'}>Bạn đã quên mật khẩu</Link>
          <Typography
            sx={{
              marginTop: '20px'
            }}
          >
            Bạn đã có Tài khoản?
            <Link to={'/register-page'}>Tạo tài khoản ngay bây giờ</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginPage
