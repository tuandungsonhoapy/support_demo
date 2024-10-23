import React from 'react'
import { Container, Paper, Grid, Box, Chip } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { styled } from '@mui/system'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './style.css'
import Slider from '../../components/Slider/Slider'
import HeaderNavigation from './HeaderNavigation/HeaderNavigation'

const useStyles = makeStyles((theme) => ({
  left: {
    width: '50%'
  },
  right: {
    flex: '1 1 0'
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

const MobileDetail = (props) => {
  const classes = useStyles()
  return (
    <>
      <HeaderNavigation />
      <Box>
        <Container maxWidth="lg">
          <Paper elevation={0}>
            <Grid container spacing={2}>
              {/* Left Side with Slider */}
              <Grid item className={classes.left}>
                <Box position="relative">
                  <Slider
                    url1="/images/image-removebg-preview-12.png"
                    url2="/images/image-removebg-preview-12.png"
                    url3="/images/image-removebg-preview-12.png"
                  />
                  <NewChip label={props.label} size="small" />
                </Box>
              </Grid>

              <Grid item className={classes.right}>
                <Box p={2}>
                  <h2>Product Info</h2>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </>
  )
}
export default MobileDetail
