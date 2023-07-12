<?php

use App\Http\Controllers\backend\HomeController;
use App\Http\Controllers\CategoryController;
use App\Http\Middleware\UserAuth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get("/myadmin",[HomeController::class,"index"])->middleware(UserAuth::class)->name("myadmin.home");
Route::get("/myadmin/login",[HomeController::class,'login'])->name('myadmin.login');
Route::Post("/myadmin/checkAdmin",[HomeController::class,'checkAdmin'])->name('myadmin.checkAdmin');

Route::Post("/category",[HomeController::class,'checkAdmin'])->name('myadmin.checkAdmin');

Route::resource("category",CategoryController::class);