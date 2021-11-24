<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bouteille;
use App\Models\Wiki_vin;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
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
        return Bouteille::find($id);
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
