const conta = {
    email: 'vasco@vasco',
    password: 'vasco',
    name: 'Vasco da Game'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})