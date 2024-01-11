import { Header } from "@telefonica/mistica";
import Footer from "../footer/Footer";

export default function Layout({ children }: any) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}