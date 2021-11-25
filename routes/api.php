<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BouteilleController;
use App\Http\Controllers\Wiki_vinController;
use App\Http\Controllers\CellierController;

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

    Route::get('/bouteilles', [BouteilleController::class, 'index']);
    Route::get('/bouteilles/{id}', [BouteilleController::class, 'show']);
    Route::post('/bouteilles/create', [BouteilleController::class, 'store']);
    Route::get('/bouteilles/edit/{id}', [BouteilleController::class, 'edit']);
    Route::put('/bouteilles/edit/{id}', [BouteilleController::class, 'update']);
    Route::delete('/bouteilles/{id}', [BouteilleController::class, 'destroy']);

    Route::get('/cellier', [CellierController::class, 'index']);
    Route::get('/cellier/{id}', [CellierController::class, 'show']);
    Route::post('/cellier/create', [CellierController::class, 'store']);
    Route::get('/cellier/edit/{id}', [CellierController::class, 'edit']);
    Route::put('/cellier/edit/{id}', [CellierController::class, 'update']);
    Route::delete('/cellier/{id}', [CellierController::class, 'destroy']);

    Route::get('/wiki', [Wiki_vinController::class, 'index']);
    Route::get('/wiki/{id}', [Wiki_vinController::class, 'show']);
    Route::get('/user', function (Request $request) {
        return $request->user()->only(['id', 'name', 'email']);
    });

});
