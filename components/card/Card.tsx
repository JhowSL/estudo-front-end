import {
    Center,
    Input,
    Box,
} from '@chakra-ui/react'

import ButtonEvents from '../Button/button'
import { login } from 'services/login/login'
import { SetStateAction, useState } from 'react'

export const Card = () => {
    const [email, setEmail] = useState('')
    console.log('email digitado', email)

    const logar = () => {
        alert(email)
    }
    return (
        <Box minHeight='100vh' backgroundColor='#0D0D0D' padding='25px'>
            <Box backgroundColor='#A6A6A6' borderRadius='25px' padding='15px' >
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="email" value={email} onChange={(event: { target: { value: SetStateAction<string> } }) => setEmail(event.target.value)} />
                <Input placeholder="password" />
                <Center>
                    <ButtonEvents onClick={() => login(email)} nameButton={'Login'} />

                </Center>
            </Box>
        </Box>
    )
}