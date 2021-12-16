<?php

namespace App\Http\Controllers;

use App\Models\Cellier;
use Illuminate\Http\Request;

class CellierController extends Controller
{
    /**
     * Afficher une liste des celliers.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Cellier::all();
    }

    /**
     * Créer un nouveau cellier.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nom_cellier' => 'required|string|max:100',
            'user_id' => 'required||integer|min:1',
        ]);

        return Cellier::create([
            'nom_cellier' => $request->nom_cellier,
            'user_id' => $request->user_id
        ]);
    }

    /**
     * Afficher un cellier.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Cellier::find($id);
    }

    /**
     * Afficher le formulaire pour modifier un cellier.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Cellier::find($id);
    }

    /**
     * Modifier un cellier.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $request->validate([
            'nom_cellier' => 'required|string|max:100',
            'user_id' => 'required||integer|min:1',
        ]);

        return Cellier::where('id', $request->id)->update([
            'nom_cellier' => $request->nom_cellier,
            'user_id' => $request->user_id
        ]);
    }

    /**
     * Supprimer un cellier.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Cellier::where('id', $id)->delete();
    }

}
