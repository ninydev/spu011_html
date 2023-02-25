<?php

namespace App\Http\Controllers;

use App\Http\Requests\Entity\CreateEntityRequest;
use App\Models\Entity;
use App\Services\Interface\EntityServiceInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class EntityController extends Controller
{
    public function __construct(
        private readonly EntityServiceInterface $entityService
    ) {}

    /**
     * Сохранить новый элемент
     * @param Request $request
     */
    public function save(CreateEntityRequest $request)
    {
        $newEntity = $this->entityService->createModelFromRequest($request);
        $this->entityService->save($newEntity);
        return response(null, '201');

//        $newEntity = new Entity($request->all());
//        $newEntity->save();
//        return response(null, '201');

//        Log::debug('+----------+');
//        Log::debug(__FILE__ . ' ' . __LINE__);
//        Log::debug(json_encode($newEntity));

    }

    /**
     * Получить всю коллекцию
     * @param Request $request
     * @return Collection
     */
    public function getAll(Request $request) : Collection
    {
//        return Entity::query()
//            ->first();
        return Entity::all();
    }

    /**
     * Получить первый элемент коллекции
     * @return Model
     */
    public function getFirst() : Model
    {
        return Entity::query()
            ->first();
    }
}
