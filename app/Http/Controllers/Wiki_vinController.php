<?php

namespace App\Http\Controllers;

use App\Models\Wiki_vin;
use Illuminate\Http\Request;
use App\Models\Categorie;

class Wiki_vinController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Wiki_vin::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
             'url_saq' => 'string|max:255',
            'millesime' => 'date_format:"Y"',
            'format' => 'string|max:255',
            'categorie_id' => 'integer|required',
        ]);

        return Wiki_vin::create([
            'nom' => $request->nom,
            'pays' => $request->pays,
            'description' => $request->description,
            'url_saq' => $request->url_saq,
            'millesime' => $request->millesime,
            'format' => $request->format,
            'url_img' => $request->url_saq,
            'categorie_id' => $request->categorie_id,
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
        return Wiki_vin::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Wiki_vin  $wiki_vin
     * @return \Illuminate\Http\Response
     */
    public function edit(Wiki_vin $wiki_vin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Wiki_vin  $wiki_vin
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Wiki_vin $wiki_vin)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'pays' => 'required|string|max:255',
            'description' => 'string|max:255',
            'url_saq' => 'string|max:255',
            'millesime' => 'date_format:"Y"',
            'format' => 'string|max:255',
            'categorie_id' => 'integer|required',
        ]);

        return Wiki_vin::where('id', $request->id)->update([
            'nom' => $request->nom,
            'pays' => $request->pays,
            'description' => $request->description,
            'url_saq' => $request->url_saq,
            'millesime' => $request->millesime,
            'format' => $request->format,
            'url_img' => $request->url_saq,
            'categorie_id' => $request->categorie_id,
        ]);
    }

    /**
     * Search the request in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function search($key)
    {
        //return Wiki_vin::where('nom', 'LIKE', '%' .$key. '%')->limit(2)->get();

        $vins = Wiki_vin::join('categories', 'categories.id', '=', 'wiki_vins.categorie_id')
            ->where('wiki_vins.nom', 'LIKE', '%' . $key . '%')
            ->limit(5)
            ->select(['wiki_vins.*', 'categories.nom AS categorie'])
            ->get();

        return $vins;
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Wiki_vin  $wiki_vin
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Wiki_vin::where('id', $id)->delete();
    }
}
