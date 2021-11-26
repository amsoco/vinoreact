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
            'nom_cellier' => "Mon Cellier",
            'user_id' => $user->id,
        ]);

        if ($user && $cellier) {
            $response = [
                'user' => $user,
                'cellier' => $cellier
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
            return response()->json(["user" => Auth::user()], 200);
        }

        throw ValidationException::withMessages(([
            'password' => ["L'authentification a échoué. Veuillez vérifier votre courriel et votre mot de passe."]
        ]));

    }


    public function logout(Request $request)
    {
        Auth::logout();
    }
}



