const conta = {
  conta: 'jonathan@email.com',
  password: '12345',
  name: 'Jonathan',
  balance: 2000.0,
  id: '1',
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})
