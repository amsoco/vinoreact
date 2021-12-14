<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Cellier;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $cellier = Cellier::create([
            'nom_cellier' => $request->nom_cellier,
            'user_id' => $user->id,
        ]);

        if ($user && $cellier) {
            $response = [
                'user' => $user->only(['id', 'name', 'email', 'privilege_id']),
                'celliers' => array($cellier->only(['id', 'nom_cellier']))
            ];
        }

        return response($response, 201);
    }


    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::user();
            $celliers = Cellier::where('user_id', $user->id)->select('id', 'nom_cellier')->get();

            $response = [
                'user' => $user,
                'celliers' => $celliers
            ];

            return response($response, 201);
        }

        throw ValidationException::withMessages(([
            'password' => ["L'authentification a échoué. Veuillez vérifier votre courriel et votre mot de passe."]
        ]));
    }

    public function me(Request $request)
    {
        $user = $request->user()->only(['id', 'name', 'email', 'privilege_id']);
        $celliers = Cellier::where('user_id', $user['id'])->select('id', 'nom_cellier')->get();

        if ($user && $celliers) {
            $response = [
                'user' => $user,
                'celliers' => $celliers
            ];

            return response($response, 201);
        }

        return response()->json([], 401);
    }


    public function logout(Request $request)
    {
        Auth::logout();
    }


    /**
     * Liste des usagers 
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        return User::all()->where('id', $user->id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return User::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user = User::where('id', $request->id)->first();
        if ($request->email == $user->email){
            User::where('id', $request->id)->update([
                'email' => "",
            ]);
        }
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            //'password' => 'required|string|min:8|confirmed',
        ]);

        return User::where('id', $request->id)->update([
            'name' => $request->name,
            'email' => $request->email,
            //'password' => Hash::make($request->password),
        ]);
    }

    /**
     * Supprimer un usager
     * 
     * @param  int  $id 
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return User::where('id', $id)->delete();
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

        $usagers = User::where('name', 'LIKE', '%' .$key. '%')->limit(20)->get();


        return $usagers;
    }

    /**
     * Search the request in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function search($key)
    {
        return User::where('name', 'LIKE', '%' .$key. '%')->limit(2)->get();
    }


}
