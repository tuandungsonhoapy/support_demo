import * as React from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import CardProduct from '../../../../components/CardProduct/CardProduct'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027'
  })
}))

export default function Household() {
  return (
    <Box sx={{ width: '100%', marginTop: '30px' }}>
      <Grid container spacing={2}>
        <Grid container xs={6}>
          <Item sx={{ width: '98%' }}>
            {''}
            <CardProduct
              image={'/images/iphone13.jpg'}
              label="Sale"
              content1="iPhone 16" // Dòng chữ lớn (tên sản phẩm)
              content="Giá ưu đãi cho khách hàng thanh toán trước"
            />
          </Item>
        </Grid>
        <Grid container xs={6}>
          <Item sx={{ width: '98%' }}>
            <Box sx={{ width: '100%' }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Item>
                    {' '}
                    <CardProduct
                      image={'/images/iphone13.jpg'}
                      label="Mới"
                      content1="iPhone 16" // Dòng chữ lớn (tên sản phẩm)
                      content="Giá ưu đãi cho khách hàng thanh toán trước"
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    {' '}
                    <CardProduct
                      image={'/images/iphone13.jpg'}
                      label="Mới"
                      content1="iPhone 15" // Dòng chữ lớn (tên sản phẩm)
                      content="Thanh toán trước ưu đãi tới 500k"
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    {' '}
                    <CardProduct
                      image={'/images/iphone13.jpg'}
                      label="Mới"
                      content1="iPhone 16" // Dòng chữ lớn (tên sản phẩm)
                      content="Gía sốc, deal hời"
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    {' '}
                    <CardProduct
                      image={'/images/iphone13.jpg'}
                      label="Mới"
                      content1="iPhone 16" // Dòng chữ lớn (tên sản phẩm)
                      content="Nhập DEADL hời giảm 30%"
                    />
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}
