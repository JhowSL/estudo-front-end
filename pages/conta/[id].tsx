import { Box, Center, SimpleGrid, Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import CardInfo from 'src/components/card/CardInfo'
import { api } from 'src/services/login/api/api'

interface UserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

const Conta = (): React.ReactNode => {
  const [userData, setUserData] = useState<null | UserData>()
  const [loading, setLoading] = useState(true)

  const actualData: Date = new Date()
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
      setLoading(false)
    }

    getData()
  }, [])

  if (loading) {
    return (
      <Center>
        <Spinner size="xl" color="#fff" />
      </Center>
    )
  }

  if (!userData || (id && id !== userData.id)) {
    router.push('/')
    return null
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        <CardInfo
          mainContainer={`Bem-vindo, ${userData?.name}`}
          content={`${actualData.getDate()}/${
            actualData.getMonth() + 1
          }/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}
        />

        <CardInfo mainContainer={'Saldo'} content={`R$ ${userData.balance}`} />
      </SimpleGrid>
    </Center>
  )
}

export default Conta
