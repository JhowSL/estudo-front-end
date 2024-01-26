import React from 'react'
import { Card } from 'src/components/card/Card'

const Home = ({ children }: React.PropsWithChildren): JSX.Element => {
  return (
    <main>
      <div>
        <Card />
        {children}
      </div>
    </main>
  )
}

export default Home
