import Header from "./components/header";
import Footer from "./components/footer";

function Layout(props: any) {

    return (
        <>
            <Header />
            <main role="main">
                {props.children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;