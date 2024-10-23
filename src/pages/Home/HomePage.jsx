import { BottomNavigation, Box, Container } from '@mui/material'
import React, { useEffect } from 'react'
import Slider from '../../components/Slider/Slider'
import ProductSlider from './ProductSlider/ProductSlider'
import ProductPhone from './ProductSlider/ProductPhone'
import TVandRadio from './ProductSlider/TVandRadio/TVandRadio'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import instance from '@/apis/apiConfig'

export default function HomePage() {
  return (
    // * code cho phan body
    <Container>
      {/* //* phan nay cho slider */}
      <Box sx={{ marginTop: '10px' }}>
        <Slider
          url1="/images/16pro.jpg"
          url2="/images/HOME_R12_KV_Main-KV_pc.webp"
          url3="/images/galaxy.jpg"
        />
      </Box>
      {/* //* code cho phan san pham noi bat */}
      <Box>
        <h1
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          SẢN PHẨM NỔI BẬT
        </h1>
        <Box>
          <ProductSlider />
        </Box>
        <h1
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          MOBILE & COMPUTING
        </h1>
        <Box>
          <ProductPhone />
        </Box>
        <Box sx={{ position: 'relative' }}>
          {' '}
          {/* Thêm position: relative cho box chứa TVandRadio */}
          <h1
            style={{
              position: 'absolute', // Đặt vị trí chữ
              top: '20px', // Điều chỉnh khoảng cách từ trên xuống
              left: '50%', // Căn giữa theo chiều ngang
              transform: 'translateX(-50%)', // Điều chỉnh để chữ nằm giữa
              zIndex: 10, // Đảm bảo chữ nằm trên TVandRadio
              color: 'Black' // Đặt màu chữ cho dễ nhìn
            }}
          >
            TV And Radio
          </h1>
          <Box>
            <TVandRadio />
          </Box>
          <Box
            sx={{
              display: 'flex', // Căn giữa cả theo chiều ngang và dọc
              flexDirection: 'column', // Đặt các phần tử theo cột
              alignItems: 'center', // Căn giữa theo chiều ngang
              justifyContent: 'center', // Căn giữa theo chiều dọc
              marginBottom: '20px'
              // Đảm bảo thẻ ở giữa toàn bộ chiều cao màn hình
            }}
          >
            <h1>LOOKING FOR SOMETHING ELSE? </h1>
            <Box sx={{ width: 500, maxWidth: '100%' }}>
              <TextField
                fullWidth
                label="Search"
                id="fullWidth"
                sx={{
                  borderRadius: '40px', // Bo góc cho TextField
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '40px' // Bo góc khi TextField đang focus
                  }
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, marginTop: '15px' }}>
              <Button
                variant="outlined"
                sx={{ borderColor: 'black', borderRadius: '20px' }}
              >
                Garaxy Gplis
              </Button>
              <Button
                variant="outlined"
                sx={{ borderColor: 'black', borderRadius: '20px' }}
              >
                Television{' '}
              </Button>
              <Button
                variant="outlined"
                sx={{ borderColor: 'black', borderRadius: '20px' }}
              >
                Iphone 16{' '}
              </Button>
              <Button
                variant="outlined"
                sx={{ borderColor: 'black', borderRadius: '20px' }}
              >
                Tai nghe{' '}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
