import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import Feature from './NavMenu/Feature'
import Review from './NavMenu/Review'
import Specification from './NavMenu/Specifications'
import Support from './NavMenu/Support'

const HeaderNavigation = () => {
  return (
    <Box
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        }}
      >
        <h1>GALAXY WATCH7(BLUETOOTH,44mm)</h1>
        <Button
          variant="contained"
          size="small"
          sx={{
            borderRadius: '20px',
            marginLeft: '20px',
            marginTop: '20px',
            backgroundColor: '#212121',
            color: '#ffffff',
            fontWeight: 'bold'
          }}
        >
          Tiếp tục
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Feature />
        <Specification />
        <Review />
        <Support />
      </Box>
    </Box>
  )
}

export default HeaderNavigation
