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
    }


    public function logout(Request $request)
    {
        Auth::logout();
    }

    /**
     * @param  \App\Models\User  $user
     */
    public function destroyUser(User $user)
    {
        $user = User::where('id', $user->id)->first();
        $user->delete();
    }
}
