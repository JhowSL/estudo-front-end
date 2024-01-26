import { CSSProperties } from 'react'

export const boxStyle: {
  cardInfoBox: CSSProperties
  container: CSSProperties
} = {
  container: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '5px',
    minHeight: '25vh',
  },
  cardInfoBox: {
    backgroundColor: '#fff',
    color: '#000',
    minHeight: '12vh',
    padding: '10px',
    borderRadius: '25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
