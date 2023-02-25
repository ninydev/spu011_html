<?php

namespace App\Providers;

use App\Repositories\EntityRepository;
use App\Repositories\Interfaces\EntityRepositoryInterface;
use App\Services\EntityService;
use App\Services\Interface\EntityServiceInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(
            EntityServiceInterface::class,
            EntityService::class);

        $this->app->bind(
            EntityRepositoryInterface::class,
            EntityRepository::class);

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
