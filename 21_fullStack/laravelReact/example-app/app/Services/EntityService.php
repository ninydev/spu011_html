<?php

namespace App\Services;

use App\Http\Requests\Entity\CreateEntityRequest;
use App\Models\Entity;
use App\Repositories\EntityRepository;
use App\Repositories\Interfaces\EntityRepositoryInterface;
use App\Services\Interface\EntityServiceInterface;
use Illuminate\Database\Eloquent\Model;

class EntityService implements EntityServiceInterface
{
    public function __construct(
        private readonly EntityRepository $entityRepository
    ) {}

    /**
     * Процесс создания новой сущности
     * @param CreateEntityRequest $request
     * @return Model
     */
    function createModelFromRequest(CreateEntityRequest $request): Model
    {
        return new Entity($request->all());
    }

    /**
     * Процесс сохранения сущности
     * @param Model $model
     * @return void
     */
    function save(Model $model)
    {
        $this->entityRepository->save($model);
    }
}
