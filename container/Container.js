import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";

export default function Container({children, ...props}) {

    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}