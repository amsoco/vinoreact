import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// lazy load les pages que le user demande au lieu de charger le bundle JS/CSS de toute l'app
const SeConnecter = lazy(() => import("../pages/SeConnecter"));
const CreerCompte = lazy(() => import("../pages/CreerCompte"));

const App = () => (
    <Router>
        {/* afficher un fallback au chargement de la page avec Suspense: un spinner ou la page de loading vino? */}
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route path="/" element={<SeConnecter />} />
                <Route path="/nouveau-compte" element={<CreerCompte />} />
            </Routes>
        </Suspense>
    </Router>
);

export default App;
