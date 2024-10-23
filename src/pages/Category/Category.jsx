import React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import CardProductCategory from '../../components/CardProductCategory/CardProductCategory'
import { Container } from '@mui/material'
import { productsData, categoriesData } from '../../apis/mock-data'

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

export default function Category() {
  const renderProductsData = (category) =>
    productsData
      .filter((item) => item.categoryId === category.id)
      .map((item) => (
        <Grid item xs={12} sm={6} md={2.3}>
          <Item>
            <CardProductCategory
              url={item.urlImage}
              content={item.productName}
              color={item.color}
              salePrice={item.priceSale}
              price={item.price}
            />
          </Item>
        </Grid>
      ))

  const renderCategoriesData = () =>
    categoriesData.map((item) => (
      <Box>
        <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>
          {item.categoryName}
        </h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0.5} justifyContent="space-between">
            {/* Mỗi cột chiếm 2/12 -> 1/6 chiều rộng màn hình */}
            {renderProductsData(item)}
          </Grid>
        </Box>
      </Box>
    ))

  return <Container>{renderCategoriesData()}</Container>
}
