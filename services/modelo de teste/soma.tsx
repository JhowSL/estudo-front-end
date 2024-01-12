export const soma = (num: number) => {
  return num + 1
}

export const multiplica = (num: number, mult: number): number | string => {
  if (mult === 2 || mult === 3) {
    return num * mult
  }

  return 'Mutiplicador não aceito'
}
