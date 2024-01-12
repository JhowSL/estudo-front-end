import { Card } from '@/components/Card/Card'
import { Header } from '@/components/Header/Header'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Card />
    </ChakraProvider>
  )
}

export default App
