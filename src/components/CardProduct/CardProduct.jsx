import React from 'react'
import { Card, CardMedia, Typography, Button, Box, Chip } from '@mui/material'
import { styled } from '@mui/system'

const HoverCard = styled(Card)(({ theme }) => ({
  position: 'relative',

  overflow: 'hidden',
  borderRadius: 16, // Bo góc giống mẫu
  textAlign: 'center', // Căn giữa nội dung
  // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Tạo hiệu ứng đổ bóng nhẹ
  width: '100%', // Chiều rộng cố định
  height: '100%', // Chiều cao bằng với chiều rộng để thành hình vuông
  '&:hover .hover-image': {
    transform: 'scale(1.05)' // Zoom nhẹ khi hover
  },
  '&:hover .hover-button': {
    opacity: 1 // Hiển thị nút khi hover
  }
}))

const HoverCardImage = styled(CardMedia)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out', // Hiệu ứng zoom mượt mà
  width: '100%',
  height: '100%' // Hình ảnh bao phủ toàn bộ card
}))

const HoverButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  bottom: '10px',
  left: '50%',
  transform: 'translateX(-50%)', // Căn giữa nút theo chiều ngang
  opacity: 0, // Ẩn nút khi không hover
  transition: 'opacity 0.3s ease-in-out', // Hiệu ứng hiện nút khi hover
  borderRadius: 16, // Bo tròn nút
  backgroundColor: '#000', // Màu nền đen cho nút
  color: '#fff', // Màu chữ trắng
  padding: '6px 12px', // Kích thước nút nhỏ hơn
  fontSize: '0.8rem', // Font chữ nhỏ hơn
  '&:hover': {
    backgroundColor: '#333' // Màu nền khi hover
  }
}))

const NewChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 10,
  left: 10,
  backgroundColor: '#1e88e5', // Màu xanh cho chip "Mới"
  color: '#fff',
  fontWeight: 'bold',
  zIndex: 2 // Đảm bảo chip luôn nằm trên cùng
}))

const TextOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -10%)', // Căn giữa chữ theo cả hai trục
  color: 'black',
  textAlign: 'center',
  padding: '10px',
  width: '100%', // Để chữ chiếm hết chiều ngang
  zIndex: 1 // Đảm bảo text không bị che bởi nút
}))

const CardProduct = (props) => {
  return (
    <HoverCard>
      {/* Thẻ chip "Mới" luôn hiển thị */}
      <NewChip label={props.label} size="small" />

      {/* Hình ảnh */}
      <HoverCardImage
        className="hover-image"
        component="img"
        image={props.image}
        alt="Hover effect image"
      />

      {/* Dòng chữ đè lên hình ảnh */}
      <TextOverlay>
        <Typography variant="h6" component="div">
          {props.content1}
        </Typography>
        <Typography variant="body2" color="inherit">
          {props.content}
        </Typography>
      </TextOverlay>

      {/* Nút mua hàng chỉ hiển thị khi hover */}
      <HoverButton className="hover-button" variant="contained">
        Mua ngay
      </HoverButton>
    </HoverCard>
  )
}

export default CardProduct
