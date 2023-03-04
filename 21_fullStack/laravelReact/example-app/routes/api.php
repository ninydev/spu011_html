<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('entity', \App\Http\Controllers\EntityController::class . '@getAll');
Route::post('entity', \App\Http\Controllers\EntityController::class . '@save');
Route::get('entity/first', \App\Http\Controllers\EntityController::class . '@getFirst');


Route::apiResource('entity_api', \App\Http\Controllers\EntityRApiController::class);
