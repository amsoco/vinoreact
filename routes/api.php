<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BouteilleController;
use App\Http\Controllers\Wiki_vinController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

//Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/bouteilles/{cellieId}', [BouteilleController::class, 'show']);
    Route::get('/bouteilles', [BouteilleController::class, 'index']);
    Route::get('/store', [Wiki_vinController::class, 'index']);
    Route::get('/user', function (Request $request) {
        return $request->user()->only(['id', 'name', 'email']);
    });
});
