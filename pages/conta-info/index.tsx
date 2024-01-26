import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { boxStyle } from 'src/shared/styles'

const ContaInfo = (): JSX.Element => {
  return (
    <>
      <Box paddingTop={'10px'}>
        <Box style={boxStyle.cardInfoBox}>
          <Text fontSize="3x1" fontWeight="bold">
            Informações da Conta
          </Text>
          <Link href={'/conta/1'}>
            <Text fontSize="x1">Conta</Text>
          </Link>
        </Box>
      </Box>
    </>
  )
}
export default ContaInfo
