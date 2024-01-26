import ButtonEvents from './button'
import { render, fireEvent } from '@testing-library/react'
import React from 'react'

describe('ButtonEvents Component', () => {
  test('deve chamar a função onClick ao clicar no botão', () => {
    // Mock da função onClick
    const onClickMock = jest.fn()

    // Renderiza o componente
    const { getByText } = render(
      <ButtonEvents onClick={onClickMock} nameButton="Test Button" />,
    )

    // Encontra o botão pelo texto
    const button = getByText('Test Button')

    // Simula um clique no botão
    fireEvent.click(button)

    // Verifica se a função onClick foi chamada
    expect(onClickMock).toHaveBeenCalled()
  })

  test('deve exibir o texto correto no botão', () => {
    // Mock da função onClick
    const onClickMock = jest.fn()

    // Renderiza o componente
    const { getByText } = render(
      <ButtonEvents onClick={onClickMock} nameButton="Test Button" />,
    )

    // Verifica se o texto do botão está correto
    expect(getByText('Test Button')).toBeInTheDocument()
  })
})
