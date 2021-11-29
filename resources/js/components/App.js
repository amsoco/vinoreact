import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { UserProvider } from "../context/user";
import GlobalStyles from "../components/styles/Global";

// lazy load les pages que le user demande au lieu de charger le bundle JS/CSS de toute l'app
const SeConnecter = lazy(() => import("../pages/SeConnecter"));
const CreerCompte = lazy(() => import("../pages/CreerCompte"));
const TestStyle = lazy(() => import("../pages/TestStyle"));
const Accueil = lazy(() => import("../pages/Accueil"));
const Cellier = lazy(() => import("../pages/Cellier"));
const Bouteille = lazy(() => import("../pages/Bouteille"));
const AjouterBouteille = lazy(() => import("../pages/AjouterBouteille"));

const App = () => (
    // le user connecté est rendu disponible dans toute l'app via context
    <UserProvider>
        <GlobalStyles />
        <Router>
            {/* afficher un fallback au chargement de la page avec Suspense: un spinner ou la page de loading vino? */}
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path="/" element={<SeConnecter />} />
                    <Route path="/nouveau-compte" element={<CreerCompte />} />
                    <Route path="/test-style" element={<TestStyle />} />
                    <Route path="/celliers" element={<Accueil />} />
<<<<<<< HEAD

                    <Route path="/bouteille" element={<Bouteille />}/>
                    <Route path="/celliers/:cellierId" element={<Cellier />} />
=======
                    <Route path="/celliers/:cellier" element={<Cellier />} />
>>>>>>> upstream/main
                    <Route
                        path="/celliers/nouvelle-bouteille"
                        element={<AjouterBouteille />}
                    />
                    <Route path="/:bouteilleId" element={<Bouteille />} />
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </Suspense>
        </Router>
    </UserProvider>
);

export default App;
