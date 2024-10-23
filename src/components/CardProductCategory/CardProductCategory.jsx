import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActionArea from '@mui/material/CardActionArea'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

export default function CardProductCategory(props) {
  return (
    <Card
      sx={{
        maxWidth: '100%',
        backgroundColor: '#f7f7f7',
        height: '100%',
        borderRadius: '15px',
        padding: '10px'
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.url}
          alt="Product Image"
          sx={{ height: '300px', objectFit: 'contain' }} // Adjusting image height
        />
        <CardContent>
          {/* Product Information */}
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              display: 'block', // Ensure it's block-level for ellipsis
              width: '100%', // Make it take up full available width
              fontWeight: 'bold',
              textAlign: 'center', // Center text
              overflow: 'hidden', // Hide overflow
              whiteSpace: 'nowrap', // Keep the text in one line
              textOverflow: 'ellipsis' // Add ellipsis at the end of overflowed content
            }}
          >
            {props.content}
          </Typography>

          <Typography
            variant="body2"
            sx={{ textAlign: 'center', color: 'gray', marginBottom: '10px' }}
          >
            {props.color}
          </Typography>

          {/* Capacity Information */}
          <Grid
            container
            spacing={2}
            sx={{ textAlign: 'center', marginBottom: '10px' }}
          >
            <Grid item xs={6}>
              <Typography variant="body2">{props.type1}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">{props.type2}</Typography>
            </Grid>
          </Grid>

          {/* Price Information */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="body2"
              sx={{
                textDecoration: 'line-through',
                color: 'gray',
                marginBottom: '5px'
              }}
            >
              {props.price}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: '#d32f2f', fontWeight: 'bold', marginBottom: '5px' }}
            >
              {props.priceSale}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'gray', marginBottom: '15px' }}
            >
              {props.salePrice}
            </Typography>
          </Box>

          {/* Buy Now Button */}
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '20px',
                padding: '10px 20px'
              }}
            >
              Mua ngay
            </Button>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
