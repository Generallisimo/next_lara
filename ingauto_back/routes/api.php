<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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



// роутер регистрации
Route::post('/register', [RegisteredUserController::class, 'store']);
// Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/login', function (Request $request) {
    $credentials = $request->only('email', 'password');
    
    if (auth()->attempt($credentials)) {
        // Вход в систему успешный
        return response()->json(['message' => 'Authenticated']);
    }
    
    // Неверные учетные данные
    return response()->json(['message' => 'Invalid credentials'], 401);
});

Route::middleware(['auth'])->group(function(){
    // роутеры для изменения цены
    Route::get('/price', [\App\Http\Controllers\PriceController::class, 'Price']);
    Route::post('/price', [\App\Http\Controllers\PriceController::class, 'PriceUpdate']);
});






Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});