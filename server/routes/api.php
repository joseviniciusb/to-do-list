<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Listar as tasks 
Route::get('task', [TaskController::class, 'index']);

// Listar uma única task
Route::get('task/{id}', [TaskController::class, 'show']);

// Criar uma nova task
Route::post('task', [TaskController::class, 'store']);

// Edita uma task
Route::put('task/{id}', [TaskController::class, 'update']);

// Delete artigo
Route::delete('task/{id}', [TaskController::class, 'destroy']);
