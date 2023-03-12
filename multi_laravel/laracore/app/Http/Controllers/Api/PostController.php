<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use TCG\Voyager\Models\Post;

class PostController extends Controller
{

    /**
     * Получить все посты по апи
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index(){
        $content =Post::all();
        Storage::cloud()->put("test.json", $content);
        return $content;
    }

}
