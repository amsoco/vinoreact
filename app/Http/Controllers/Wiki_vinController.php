<?php

namespace App\Http\Controllers;

use App\Models\Wiki_vin;
use Illuminate\Http\Request;

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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Wiki_vin  $wiki_vin
     * @return \Illuminate\Http\Response
     */
    public function show(Wiki_vin $wiki_vin)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Wiki_vin  $wiki_vin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Wiki_vin $wiki_vin)
    {
        //
    }
}
