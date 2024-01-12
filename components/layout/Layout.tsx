import { Header } from '../Header/Header'
import Footer from '../footer/Footer'

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
