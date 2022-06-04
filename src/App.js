import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from '~/Components/Routers';
import { DefaultLayout } from '~/Components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <Routes>
                {publicRouters.map((item, index) => {
                    const Layout = item.layout ? item.layout : item.layout === null ? Fragment : DefaultLayout;

                    return <Route key={index} path={item.path} element={<Layout>{item.component}</Layout>} />;
                })}
            </Routes>
        </Router>
    );
}

export default App;
