import { Box, Button } from '@mui/material'
import * as React from 'react'
import CardTV from '../../../../components/CardTV/CardTV'

const TVandRadio = () => {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(true)

  const cards = [
    {
      id: 1,
      title: 'TV',
      buttonText: 'TV',
      backgroundImage:
        './images/1-thiet-ke-tuong-nen-tivi-ngoisaovn-w1240-h930.jpeg'
    },
    {
      id: 2,
      title: 'Radio',
      buttonText: 'Radio',
      backgroundImage:
        './images/ambient-mode-tren-tivi-samsung-qled-la-gi-cach-kich-1.jpg'
    },
    {
      id: 3,
      title: 'VT',
      buttonText: 'VT',
      backgroundImage:
        './images/pngtree-living-room-tv-cabinet-chandelier-modern-photography-map-with-pictures-image_790016.jpg'
    }
  ]

  const handleCardChange = (index) => {
    setIsVisible(false) // Ẩn card trước khi chuyển đổi
    setTimeout(() => {
      setCurrentCardIndex(index)
      setIsVisible(true) // Hiện card mới
    }, 0) // Thay đổi thời gian delay để hiệu ứng hoạt động mượt mà hơn
  }

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      {/* Nút chuyển đổi */}
      <Box
        sx={{
          position: 'absolute',
          top: '100px', // Đặt vị trí của các nút ở trên cùng
          left: '50%',
          transform: 'translate(-50%, 0)',
          display: 'flex',
          justifyContent: 'space-between',
          width: '250px', // Đặt chiều rộng của container
          zIndex: 1 // Đảm bảo các nút luôn hiển thị trên card
        }}
      >
        {cards.map((card, index) => (
          <Button
            key={card.id}
            variant="outlined"
            onClick={() => handleCardChange(index)} // Cập nhật chỉ số card hiện tại
            sx={{
              flex: 1,
              margin: '0 5px', // Khoảng cách giữa các nút
              padding: '10px 0', // Padding cho nút
              borderRadius: '20px',
              backgroundColor: currentCardIndex === index ? '#1976d2' : '#fff', // Màu nền cho nút đang chọn
              color: currentCardIndex === index ? '#fff' : '#1976d2', // Màu chữ cho nút đang chọn
              '&:hover': {
                backgroundColor:
                  currentCardIndex === index ? '#115293' : '#e0e0e0' // Màu hover
              }
            }}
          >
            {card.buttonText}
          </Button>
        ))}
      </Box>

      {/* Hiển thị card hiện tại */}
      <CardTV
        title={cards[currentCardIndex].title} // Truyền tiêu đề
        buttonText={cards[currentCardIndex].buttonText} // Truyền tên nút
        backgroundImage={cards[currentCardIndex].backgroundImage} // Truyền hình nền
        show={isVisible} // Truyền prop show để điều khiển hiệu ứng
      />
    </Box>
  )
}

export default TVandRadio
