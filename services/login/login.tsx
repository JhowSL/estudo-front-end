import { api } from './api/api'

export const login = async (email: string): Promise<void> => {
  const data: any = await api
  if (email !== data.conta) {
    alert('E-mail inválido')
  }
  alert(`Bem vindo ${email}!`)
}
