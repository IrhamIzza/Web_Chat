<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MessageController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/message', [MessageController::class, 'store']);
    Route::get('/messages', [MessageController::class, 'index']);
});
Route::get('/admin/messages', [MessageController::class, 'all']);
Route::post('/admin/answer/{id}', [MessageController::class, 'answer']);