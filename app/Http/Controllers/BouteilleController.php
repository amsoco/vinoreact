<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Bouteille;
use App\Models\Categorie;
use App\Models\Wiki_vin;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use cloudinary\Api\Upload\UploadApi;


class BouteilleController extends Controller
{

    /**
     * Afficher la liste des bouteilles.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Bouteille::all();
    }

    /**
     * Afficher les bouteilles d'un cellier.
     *
     * @return \Illuminate\Http\Response
     */
    public function showCellier(Request $request)
    {
        $bouteilles = Bouteille::where('cellier_id', $request->id)->paginate(5);
        return $bouteilles;
    }

    /**
     * Rechercher les bouteilles dans un cellier par nom ou par pays.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $bouteilles = Bouteille::where('cellier_id', $request->id)
        ->where('nom', 'LIKE', '%' . $request->search . '%')
        ->orWhere('pays', 'LIKE', '%' . $request->search . '%')->paginate(5);
        return $bouteilles;
    }

    /**
     * Créer une nouvelle bouteille dans un cellier.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'pays' => 'required|string|max:255',
            'description' => 'string|max:255',
            'date_achat' => 'required|date_format:"Y-m-d"',
            'prix_achat' => 'regex:/^\d+(\.\d{1,2})?$/',
            // 'url_saq' => 'string|max:255',
            'note' => 'integer|max:5',
            // 'commentaire' => 'string|max:255',
            'quantite' => 'required|integer|min:0',
            'millesime' => 'date_format:"Y"',
            'format' => 'string|max:255',
            'url_img' => 'string|max:255',
            'categorie_id' => 'integer|required',
            'cellier_id' => 'integer|required',
        ]);

        return Bouteille::create([
            'nom' => $request->nom,
            'pays' => $request->pays,
            'description' => $request->description,
            'date_achat' => $request->date_achat,
            'prix_achat' => $request->prix_achat,
            'url_saq' => $request->url_saq,
            'note' => $request->note,
            'commentaire' => $request->commentaire,
            'quantite' => $request->quantite,
            'millesime' => $request->millesime,
            'format' => $request->format,
            'url_img' => $request->url_img,
            'categorie_id' => $request->categorie_id,
            'cellier_id' => $request->cellier_id,
        ]);
    }

    /**
     * Afficher une bouteille.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $bouteille = Bouteille::find($id);
        $categorie = Categorie::where('id', $bouteille->categorie_id)->first();
        $response = [
            'bouteille' => $bouteille,
            'categorie' => $categorie->nom,
        ];
        return response($response);
    }

    /**
     * Afficher le formulaire pour modifier une bouteille.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Bouteille::find($id);
    }

    /**
     * Modifier une bouteille.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'pays' => 'required|string|max:255',
            'description' => 'string|max:255',
            'date_achat' => 'required|date_format:"Y-m-d"',
            'prix_achat' => 'regex:/^\d+(\.\d{1,2})?$/',
            //'url_saq' => 'string|max:255',
            'note' => 'integer|max:5',
            //'commentaire' => 'string|max:255',
            'quantite' => 'required|integer|min:0',
            'millesime' => 'date_format:"Y"',
            'format' => 'string|max:255',
            'url_img' => 'string|max:255',
            'categorie_id' => 'integer|required',
            'cellier_id' => 'integer|required',
        ]);

        return Bouteille::where('id', $request->id)->update([
            'nom' => $request->nom,
            'pays' => $request->pays,
            'description' => $request->description,
            'date_achat' => $request->date_achat,
            'prix_achat' => $request->prix_achat,
            'url_saq' => $request->url_saq,
            'note' => $request->note,
            'commentaire' => $request->commentaire,
            'quantite' => $request->quantite,
            'millesime' => $request->millesime,
            'format' => $request->format,
            'url_img' => $request->url_img,
            'categorie_id' => $request->categorie_id,
            'cellier_id' => $request->cellier_id,
        ]);
    }

    /**
     * Modifier un champ spécifique (note, quantité, commentaire) d'une bouteille.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateField(Request $request)
    {
        if ($request->note) {
            $request->validate([
                'note' => 'integer|max:5',
            ]);
            return Bouteille::where('id', $request->id)->update([
                'note' => $request->note,
            ]);
        } elseif ($request->quantite) {
            $request->validate([
                'quantite' => 'required|integer|min:0',
            ]);
            return Bouteille::where('id', $request->id)->update([
                'quantite' => $request->quantite,
            ]);
        } else {
            $request->validate([
                'commentaire' => 'string|max:255',
            ]);
            return Bouteille::where('id', $request->id)->update([
                'commentaire' => $request->commentaire,
            ]);
        }
    }

    /**
     * Supprimer une bouteille.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Bouteille::where('id', $id)->delete();
    }

}
