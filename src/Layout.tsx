function Layout(props: any) {

    return (
        <>
            <main role="main">
                {props.children}
            </main>
        </>
    );
}

export default Layout;