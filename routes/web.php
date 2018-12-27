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
Route::resource('admin/posts', 'PostController');

Route::view('/{path?}', 'app');


