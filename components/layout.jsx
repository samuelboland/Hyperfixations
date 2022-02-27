import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
    if (children.key === '/') {
        return <>{children}</>;
    } else {
        return (
            <>
                <Header />
                {children}
                <Footer />
            </>
        );
    }
};;

export default Layout;
