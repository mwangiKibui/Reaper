import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) =>
{
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;
