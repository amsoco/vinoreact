<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Http\Response;
use App\Models\Bouteille;
use App\Models\Categorie;
use App\Models\Wiki_vin;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use cloudinary\Api\Upload\UploadApi;



class BouteilleController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Bouteille::all();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showCellier(Request $request)
    {
        return Bouteille::all()->where('cellier_id', $request->id);
    }


    /**
     * Store a newly created resource in storage.
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
            'date_achat' => 'required|date_format:"Y"',
            'prix_achat' => 'regex:/^\d+(\.\d{1,2})?$/',
            // 'url_saq' => 'string|max:255',
            // 'note' => 'integer|max:10',
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
     * Display the specified resource.
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Bouteille::find($id);
    }

    /**
     * Update the specified resource in storage.
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
            'date_achat' => 'required|date_format:"Y"',
            'prix_achat' => 'regex:/^\d+(\.\d{1,2})?$/',
            'url_saq' => 'string|max:255',
            'note' => 'integer|max:10',
            'commentaire' => 'string|max:255',
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
     * Update the specified field in storage.
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
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Bouteille::where('id', $id)->delete();
    }
}
