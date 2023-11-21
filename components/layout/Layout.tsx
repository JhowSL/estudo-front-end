import { Footer, Header } from '@/components/index';

export default function Layout({ children }: any) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}