import { Box, Typography } from '@mui/material'
import * as React from 'react'
import Button from '@mui/material/Button'
import './CardTV.css' // Đảm bảo bạn đã nhập file CSS này

const CardTV = ({ title, buttonText, backgroundImage, show }) => {
  return (
    <Box
      className={`card ${show ? 'show' : ''}`} // Thêm class show nếu show là true
      sx={{
        width: '100%',
        height: '700px',
        backgroundImage: `url(${backgroundImage})`, // Đặt hình nền từ props
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}
    >
      <h2
        className="h2-container" // Thêm class để áp dụng hiệu ứng
        style={{
          marginTop: 'auto',
          marginBottom: '5%',
          textAlign: 'center',
          background:
            'linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.7))'
        }}
      >
        YOUR ART. YOUR SHOWS. DISTRACTION- FREE
      </h2>

      <Typography
        className="text-container" // Thêm class để áp dụng hiệu ứng
        sx={{
          textAlign: 'center',
          marginBottom: '4.5%',
          background:
            'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 1))'
        }}
      >
        Your art. Your shows. Distraction- free
      </Typography>

      <Button
        variant="contained"
        sx={{
          display: 'block',
          alignItems: 'center',
          justifyContent: 'center',
          width: '150px',
          borderRadius: '20px',
          margin: '20px auto'
        }}
      >
        MUA NGAY
      </Button>
    </Box>
  )
}

export default CardTV
