<?php

namespace App\Services\Interface;

use App\Http\Requests\Entity\CreateEntityRequest;
use Illuminate\Database\Eloquent\Model;

interface EntityServiceInterface extends ServiceInterface
{
    function createModelFromRequest(CreateEntityRequest $request) : Model;
    function save(Model $model);

}
