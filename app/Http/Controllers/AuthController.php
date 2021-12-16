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
    /**
     * Enregistrer un nouvel usager et créer son cellier.
     *
     * @param  Request  $request
     * @return response
     */
    public function register(Request $request)
    {
        //valider les champs requis pour enregistrer un nouvel usager
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
        ]);
        //créer un nouvel usager
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        //créer le cellier du nouvel usager
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

    /**
     * Connexion de l'usager.
     *
     * @param  Request  $request
     * @return response
     */
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

    /**
     * Récupérer l'utilisateur connecté et son cellier.
     *
     * @param  Request  $request
     * @return response
     */
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

    /**
     * Déconnexion de l'usager.
     *
     * @param  Request  $request
     */
    public function logout(Request $request)
    {
        Auth::logout();
    }

    /**
     * Récupérer la liste des usagers.
     *
     * @return $users
     */
    public function index()
    {
        $users = User::all();
        return $users;
    }

    /**
     * Afficher un usager.
     *
     * @param  int  $id
     * @return $user
     */
    public function show($id)
    {
        $user = User::find($id);
        return $user;
    }

    /**
     * Afficher le formulaire pour modifier un usager.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return User::find($id);
    }

    /**
     * Modifier un usager.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //si l'email n'est pas modifié, effacer le champ pour le remettre car il est unique
        $user = User::where('id', $request->id)->first();
        if ($request->email == $user->email){
            User::where('id', $request->id)->update([
                'email' => "",
            ]);
        }
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
        ]);

        return User::where('id', $request->id)->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);
    }

    /**
     * Supprimer un usager.
     * 
     * @param  int  $id 
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return User::where('id', $id)->delete();
    }

    /**
     * Rechercher un usager.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function search($key)
    {
        $usagers = User::where('name', 'LIKE', '%' .$key. '%')->limit(20)->get();
        return $usagers;
    }


}
