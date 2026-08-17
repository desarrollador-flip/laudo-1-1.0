import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components/common/Navbar';
import { HomePage } from './components/pages/HomePage';
import { Footer } from './components/common/Footer';

import { Cargando } from './components/utils/Cargando';
import { ScrollToTop } from './utils/scrollToTop';

const ErrorPage = lazy(() => import('./components/pages/ErrorPage'));

function App() {
    return (
        <>
            <ScrollToTop />

            <Navbar />

            <Suspense
                fallback={
                    <main className="cargando">
                        <Cargando />
                    </main>
                }
            >
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
            </Suspense>

            <Footer />
        </>
    );
}

export default App;
