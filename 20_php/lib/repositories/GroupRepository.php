<?php

class GroupRepository extends BaseRepository
{
    //private $name;
    public function __construct(
        // создание поля при конструировании объекта
        private readonly string $name
    ) {
    }

    public function getName(): string
    {
        return $this->name;
    }


}