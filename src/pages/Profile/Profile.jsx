import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  InputAdornment
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import PhoneIcon from '@mui/icons-material/Phone'
import EventIcon from '@mui/icons-material/Event'
import LanguageIcon from '@mui/icons-material/Language'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LockIcon from '@mui/icons-material/Lock'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import WcIcon from '@mui/icons-material/Wc'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: 'Trần Thị Mỹ Xoan',
    email: 'xoan25012003@gmail.com',
    phone: '(0)',
    birthDate: 'Jan 25, 2003',
    gender: 'Female',
    twoStepVerification: 'Enabled',
    country: 'Việt Nam',
    address: '123 Đường ABC, Quận 1, TP.HCM',
    language: 'Tiếng Việt',
    paymentInfo: 'Visa **** 1234'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserInfo({ ...userInfo, [name]: value })
  }

  const handleSave = () => {
    setIsEditing(false)
  }

  return (
    <Container
      sx={{
        backgroundColor: '#f5f5f5',
        padding: 4
      }}
    >
      <h1
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        Tài khoản của tôi
      </h1>
      <Box>
        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 2,

              margin: '10px 0px 50px 0px',
              backgroundColor: 'white',
              borderRadius: '20px'
            }}
          >
            <img
              src="/images/avt.jpg"
              alt="avatar"
              style={{
                height: '200px',
                width: '200px',
                borderRadius: '180px'
              }}
            />

            {/* Tên với biểu tượng */}
            {isEditing ? (
              <TextField
                label="Tên"
                variant="standard"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  )
                }}
                fullWidth
              />
            ) : (
              <Typography variant="h6">{userInfo.name}</Typography>
            )}

            {/* Email với biểu tượng */}
            {isEditing ? (
              <TextField
                label="Email"
                variant="standard"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  )
                }}
                fullWidth
              />
            ) : (
              <Typography variant="h6">{userInfo.email}</Typography>
            )}
          </Box>
          <Box
            sx={{
              margin: '10px 0px 30px 0px',
              backgroundColor: 'white',
              borderRadius: '20px'
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              alignItems="center"
            >
              {/* Điện thoại với biểu tượng */}
              <Grid item xs={6}>
                <Item sx={{ height: '80px', marginLeft: '20px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      height: '100%'
                    }}
                  >
                    <TextField
                      label="Điện thoại"
                      variant="standard"
                      name="phone"
                      value={userInfo.phone}
                      onChange={isEditing ? handleInputChange : null}
                      InputProps={{
                        readOnly: !isEditing,
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon />
                          </InputAdornment>
                        )
                      }}
                      fullWidth
                    />
                  </Box>
                </Item>
              </Grid>

              {/* Ngày sinh với biểu tượng */}
              <Grid item xs={6}>
                <Item sx={{ height: '80px', marginLeft: '20px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      height: '100%'
                    }}
                  >
                    <TextField
                      label="Ngày sinh"
                      variant="standard"
                      name="birthDate"
                      value={userInfo.birthDate}
                      onChange={isEditing ? handleInputChange : null}
                      InputProps={{
                        readOnly: !isEditing,
                        startAdornment: (
                          <InputAdornment position="start">
                            <EventIcon />
                          </InputAdornment>
                        )
                      }}
                      fullWidth
                    />
                  </Box>
                </Item>
              </Grid>

              {/* Giới tính với biểu tượng */}
              <Grid item xs={6}>
                <Item sx={{ height: '80px', marginLeft: '20px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      height: '100%'
                    }}
                  >
                    <TextField
                      label="Giới tính"
                      variant="standard"
                      name="gender"
                      value={userInfo.gender}
                      onChange={isEditing ? handleInputChange : null}
                      InputProps={{
                        readOnly: !isEditing,
                        startAdornment: (
                          <InputAdornment position="start">
                            <WcIcon />
                          </InputAdornment>
                        )
                      }}
                      fullWidth
                    />
                  </Box>
                </Item>
              </Grid>

              {/* Địa chỉ với biểu tượng */}
              <Grid item xs={6}>
                <Item sx={{ height: '80px', marginLeft: '20px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      height: '100%'
                    }}
                  >
                    <TextField
                      label="Địa chỉ"
                      variant="standard"
                      name="address"
                      value={userInfo.address}
                      onChange={isEditing ? handleInputChange : null}
                      InputProps={{
                        readOnly: !isEditing,
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOnIcon />
                          </InputAdornment>
                        )
                      }}
                      fullWidth
                    />
                  </Box>
                </Item>
              </Grid>

              {/* Bảo mật hai lớp với biểu tượng */}
              <Grid item xs={6}>
                <Item sx={{ height: '80px', marginLeft: '20px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      height: '100%'
                    }}
                  >
                    <TextField
                      label="Bảo mật hai lớp"
                      variant="standard"
                      name="twoStepVerification"
                      value={userInfo.twoStepVerification}
                      onChange={isEditing ? handleInputChange : null}
                      InputProps={{
                        readOnly: !isEditing,
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon />
                          </InputAdornment>
                        )
                      }}
                      fullWidth
                    />
                  </Box>
                </Item>
              </Grid>

              {/* Thông tin thanh toán với biểu tượng */}
              <Grid item xs={6}>
                <Item sx={{ height: '80px', marginLeft: '20px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      height: '100%'
                    }}
                  >
                    <TextField
                      label="Thông tin thanh toán"
                      variant="standard"
                      name="paymentInfo"
                      value={userInfo.paymentInfo}
                      onChange={isEditing ? handleInputChange : null}
                      InputProps={{
                        readOnly: !isEditing,
                        startAdornment: (
                          <InputAdornment position="start">
                            <CreditCardIcon />
                          </InputAdornment>
                        )
                      }}
                      fullWidth
                    />
                  </Box>
                </Item>
              </Grid>

              {/* Ngôn ngữ với biểu tượng */}
              <Grid item xs={6}>
                <Item sx={{ height: '80px', marginLeft: '20px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      height: '100%'
                    }}
                  >
                    <TextField
                      label="Ngôn ngữ"
                      variant="standard"
                      name="language"
                      value={userInfo.language}
                      onChange={isEditing ? handleInputChange : null}
                      InputProps={{
                        readOnly: !isEditing,
                        startAdornment: (
                          <InputAdornment position="start">
                            <LanguageIcon />
                          </InputAdornment>
                        )
                      }}
                      fullWidth
                    />
                  </Box>
                </Item>
              </Grid>

              {/* Quốc gia với biểu tượng */}
              <Grid item xs={6}>
                <Item sx={{ height: '80px', marginLeft: '20px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      height: '100%'
                    }}
                  >
                    <TextField
                      label="Quốc gia"
                      variant="standard"
                      name="country"
                      value={userInfo.country}
                      onChange={isEditing ? handleInputChange : null}
                      InputProps={{
                        readOnly: !isEditing,
                        startAdornment: (
                          <InputAdornment position="start">
                            <LanguageIcon />
                          </InputAdornment>
                        )
                      }}
                      fullWidth
                    />
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'white', // Màu nền trắng
                color: 'black', // Màu chữ đen
                border: '2px solid black', // Viền màu đen

                '&:hover': {
                  border: '2px solid black', // Viền đen vẫn giữ nguyên khi hover
                  backgroundColor: 'white' // Giữ nguyên màu nền khi hover
                },
                marginTop: 2 // Khoảng cách trên để tách khỏi các thành phần khác
              }}
              startIcon={<EditIcon />}
              onClick={() => {
                if (isEditing) {
                  handleSave() // Gọi hàm lưu khi đang chỉnh sửa
                } else {
                  setIsEditing(true) // Bắt đầu chế độ chỉnh sửa
                }
              }}
            >
              {isEditing ? 'Lưu' : 'Chỉnh sửa'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
