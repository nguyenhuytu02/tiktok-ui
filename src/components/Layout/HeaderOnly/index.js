import Header from '../components/Header';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="contents">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
