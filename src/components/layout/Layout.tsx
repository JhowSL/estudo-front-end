import Footer from '../footer/Footer'
import Header from '../header/Header'
import { Box } from '@chakra-ui/react'
import { LayoutStyle } from 'src/shared/styles'

export default function Layout({ children }: any) {
  return (
    <Box style={LayoutStyle.container} minHeight="100vh" padding="25px">
      <Header />
      {children}
      <Footer />
    </Box>
  )
}
