import {
    Center,
    ChakraProvider,
    Input,
    Box,
    Button
} from '@chakra-ui/react'



import { Header } from '../Header/Header'
import ButtonEvents from '../Button/button'
import { login } from 'services/login/login'





export const Card = () => {


    return (
        <Box minHeight='100vh' backgroundColor='#0D0D0D' padding='25px'>
            <Box backgroundColor='#A6A6A6' borderRadius='25px' padding='15px' >
                <Header />
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Center>
                    <ButtonEvents onClick={login} nameButton={'Login'} />

                </Center>
            </Box>
        </Box>
    )
}