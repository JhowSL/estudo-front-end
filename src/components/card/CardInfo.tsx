import { Box, Text } from '@chakra-ui/react'
import { boxStyle } from 'src/shared/styles'

interface CardInfoProps {
  mainContainer: string
  content: string
}

const CardInfo = ({ mainContainer, content }: CardInfoProps): JSX.Element => {
  return (
    <Box style={boxStyle.cardInfoBox}>
      <Text fontSize="2x1" fontWeight="bold">
        {mainContainer}
      </Text>

      <Text fontSize="x1">{content}</Text>
    </Box>
  )
}
export default CardInfo
