import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { UserProvider } from "../context/user";
import GlobalStyles from "../components/styles/Global";
import { CellierProvider } from "../context/cellier";
import RequireAuth from "./RequireAuth";
import CircleLoader from "./CircleLoader";
import GlobalFonts from "../../fonts/fonts";

// lazy load les pages que le user demande au lieu de charger le bundle JS/CSS de toute l'app
const SeConnecter = lazy(() => import("../pages/SeConnecter"));
const CreerCompte = lazy(() => import("../pages/CreerCompte"));
const MonCompte = lazy(() => import("../pages/MonCompte"));
const TestStyle = lazy(() => import("../pages/TestStyle"));
const Accueil = lazy(() => import("../pages/Accueil"));
const Cellier = lazy(() => import("../pages/Cellier"));
const Bouteille = lazy(() => import("../pages/Bouteille"));
const AjouterBouteille = lazy(() => import("../pages/AjouterBouteille"));
const ModifierBouteille = lazy(() => import("../pages/ModifierBouteille"));
const Admin = lazy(() => import("../pages/Admin"));

const App = () => (
    // le user connecté est rendu disponible dans toute l'app via context
    <Router>
        <UserProvider>
            <CellierProvider>
                <GlobalFonts />
                <GlobalStyles />

                {/* afficher un fallback au chargement de la page avec Suspense: un spinner ou la page de loading vino? */}
                <Suspense
                    fallback={
                        <div
                            style={{
                                minHeight: "100vh",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <CircleLoader />
                        </div>
                    }
                >
                    <Routes>
                        <Route path="/" element={<SeConnecter />} />
                        <Route
                            path="/admin"
                            element={
                                <RequireAuth>
                                    <Admin />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/nouveau-compte"
                            element={<CreerCompte />}
                        />
                        <Route path="/mon-compte" element={<MonCompte />} />
                        <Route path="/test-style" element={<TestStyle />} />
                        <Route
                            path="/celliers"
                            element={
                                <RequireAuth>
                                    <Accueil />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/:cellier"
                            element={
                                <RequireAuth>
                                    <Cellier />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/:cellier/:bouteilleId"
                            element={
                                <RequireAuth>
                                    <Bouteille />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/:cellier/nouvelle-bouteille"
                            element={
                                <RequireAuth>
                                    <AjouterBouteille />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/:cellier/modifier-bouteille/:bouteilleId"
                            element={
                                <RequireAuth>
                                    <ModifierBouteille />
                                </RequireAuth>
                            }
                        />
                        {/* <Route path="*" element={<NotFound />} /> */}
                    </Routes>
                </Suspense>
            </CellierProvider>
        </UserProvider>
    </Router>
);

export default App;
