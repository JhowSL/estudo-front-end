import ButtonEvents from '../button/button'
import { Box, Center, Input } from '@chakra-ui/react'
import { useState, useEffect, SetStateAction } from 'react'
import { api } from 'src/services/login/api/api'
import { login } from 'src/services/login/login'

interface UserData {
  email: string
  password: string
  name: string
}

export const Card = () => {
  const [email, setEmail] = useState<string>('')
  const [userData, setUserData] = useState<null | UserData>()

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = api
      setUserData(data)
    }
    getData()
  })
  console.log(userData)

  return (
    <Box minHeight="100vh" backgroundColor="#0D0D0D" padding="25px">
      <Box
        backgroundColor="#A6A6A6"
        borderRadius="25px"
        padding="15px"
        color="black"
      >
        {userData === null ||
          (userData === undefined ? <h1>Loading...</h1> : <h1></h1>)}
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input
          background="white"
          borderColor="#0D0D0D"
          focusBorderColor="##262626"
          placeholder="email"
          value={email}
          onChange={(event: { target: { value: SetStateAction<string> } }) =>
            setEmail(event.target.value)
          }
        />
        <Input
          background="white"
          borderColor="#0D0D0D"
          focusBorderColor="##262626"
          placeholder="password"
        />
        <Center>
          <ButtonEvents onClick={() => login(email)} nameButton={'Login'} />
        </Center>
      </Box>
    </Box>
  )
}