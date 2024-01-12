const conta = {
  conta: 'jonathan@email.com',
  password: '12345',
  name: 'Jonathan',
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})
