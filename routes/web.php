<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Auth::routes();
Route::get('/admin', function(){
    return view('admin.main');
});


// Route::view('/{path?}', 'app');


Route::view('/{path?}', 'app')
     ->where('path', '.*')
     ->name('react');