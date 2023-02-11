<?php

class BaseRepository implements ReadableInterface, StorableInterface
{
    private array $items = [];

    public function getAll(): array
    {
        return $this->items;
    }

    public function get($elNum)
    {
        if(isset($this->items[$elNum])){
            return $this->items[$elNum];
        }
        return null;
    }

    public function push($el)
    {
        $this->items[] = $el;
    }

    public function pop()
    {
        return array_pop($this->items);
    }
}