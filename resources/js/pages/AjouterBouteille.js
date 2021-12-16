import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Recherche from "../components/Recherche";
import { useCellier } from "../context/cellier";
import useDebounce from "../hooks/useDebounce";
import { Button } from "../components/styles/Button.styled";
import Accordeon from "../components/Accordeon";
import styled from "styled-components";
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

                        <h3>OU</h3>
                        <Button
                            bg="#303031"
                            color="#fff"
                            bgHover="#fff"
                            colorHover="#000"
                            borderColor="#303031"
                            onClick={() => setStep(3)}
                        >
                            Formulaire d'ajout
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
                            }
                            alt={selectedBouteille.nom}
                        />
                        <h2>{selectedBouteille.nom}</h2>
                        <p>Ajouter à ton cellier</p>
                        <DetailBouteille>
                            <div>
                                <div>
                                    <p>Pays</p>
                                    <p>Catégorie</p>
                                    <p>Format</p>
                                </div>
                                <div>
                                    <p>{selectedBouteille.pays}</p>
                                    <p>{selectedBouteille.categorie}</p>
                                    <p>{selectedBouteille.format}</p>
                                </div>
                            </div>
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
                    <CountainerExtreme>
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
                    </CountainerExtreme>
                </Layout>
            );
    }
};

export default AjouterBouteille

const CountainerExtreme = styled.form`
    padding-left:20px;
    padding-right:20px;

`

;
