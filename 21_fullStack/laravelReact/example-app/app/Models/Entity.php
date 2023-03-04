<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Entity extends Model
{
    protected $table = 'entities';
    protected $hidden = [
        'created_at'
    ];
    protected $fillable = [
      'name',
      'body'
    ];
}
