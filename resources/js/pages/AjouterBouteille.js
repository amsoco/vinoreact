import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Recherche from "../components/Recherche";
import { useCellier } from "../context/cellier";
import useDebounce from "../hooks/useDebounce";
import { Button } from "../components/styles/Button.styled";
import Accordeon from "../components/Accordeon";
import {
    ResultatsRecherche,
    Resultat,
    BouteilleSelectionnee,
    DetailBouteille,
    RechercheVins,
} from "../components/styles/ResultatsRecherche.styled";
import AjouterBouteilleForm from "../components/Forms/AjouterBouteille";

const AjouterBouteille = () => {
    const { searchWiki } = useCellier();
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [selectedBouteille, setSelectedBouteille] = useState();
    const [isSearching, setIsSearching] = useState(false);
    const debouncedSearch = useDebounce(search, 500);
    const [step, setStep] = useState(1);

    useEffect(() => {
        if (debouncedSearch) {
            setIsSearching(true);
            searchWiki(debouncedSearch).then((results) => {
                setIsSearching(false);
                setResults(results.data);
            });
        } else {
            setResults([]);
            setIsSearching(false);
        }
    }, [debouncedSearch]);

    // réinitialisation du formulaire

    const renderSearchResults = (results) => {
        return results?.map((result) => {
            return (
                <Resultat
                    key={result.id}
                    onClick={() => {
                        setSelectedBouteille(result);
                        setStep(2);
                    }}
                >
                    <h2>{result.nom}</h2>
                    <img
                        src={result.url_img ? result.url_img : DummyBouteille}
                        alt={result.nom}
                    />
                    <div>
                        <p>{result.pays}</p>
                        <p>{result.millesime}</p>
                        <p>{result.format}</p>
                    </div>
                </Resultat>
            );
        });
    };

    switch (step) {
        case 1:
            return (
                <Layout>
                    <RechercheVins>
                        <h2>
                            Ajouter une bouteille dans{" "}
                            {
                                JSON.parse(localStorage.getItem("cellier"))
                                    .nom_cellier
                            }
                        </h2>

                        <Recherche
                            placeholder="Rechercher dans le wiki vins"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <h2>OU</h2>
                        <Button
                            bg="#303031"
                            color="#fff"
                            bgHover="#fff"
                            colorHover="#000"
                            borderColor="#303031"
                            onClick={() => setStep(3)}
                        >
                            Aller au formulaire d'ajout
                        </Button>

                        <ResultatsRecherche>
                            {renderSearchResults(results)}
                        </ResultatsRecherche>
                    </RechercheVins>
                </Layout>
            );

        case 2:
            return (
                <Layout>
                    <BouteilleSelectionnee>
                        <img
                            src={
                                selectedBouteille.url_img
                                    ? selectedBouteille.url_img
                                    : DummyBouteille
                            }
                            alt={selectedBouteille.nom}
                        />
                        <h2>{selectedBouteille.nom}</h2>
                        <p>Ajouter à ton cellier</p>
                        <DetailBouteille>
                            <p>
                                <span>Pays</span>
                                <span>{selectedBouteille.pays}</span>
                            </p>
                            <p>
                                <span>Catégorie</span>
                                <span>{selectedBouteille.categorie}</span>
                            </p>
                            <p>
                                <span>Format</span>
                                <span>{selectedBouteille.format}</span>
                            </p>
                            <Accordeon
                                titre="Description"
                                content={selectedBouteille.description}
                            />
                        </DetailBouteille>
                        <Button
                            bg="#303031"
                            color="#fff"
                            bgHover="#fff"
                            colorHover="#000"
                            borderColor="#303031"
                            onClick={() => setStep(3)}
                        >
                            PRENDRE INFOS
                        </Button>

                        <Button
                            bg="#fff"
                            color="#303031"
                            bgHover="#303031"
                            colorHover="#fff"
                            borderColor="#303031"
                            onClick={() => setStep(1)}
                        >
                            ANNULER
                        </Button>
                    </BouteilleSelectionnee>
                </Layout>
            );

        case 3:
            return (
                <Layout>
                    <AjouterBouteilleForm bouteille={selectedBouteille} />

                    <Button
                        bg="#fff"
                        color="#303031"
                        bgHover="#303031"
                        colorHover="#fff"
                        borderColor="#303031"
                        onClick={() => setStep(1)}
                    >
                        RETOUR
                    </Button>
                </Layout>
            );
    }
};

export default AjouterBouteille;
