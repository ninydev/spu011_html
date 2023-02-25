<?php

namespace App\Http\Requests\Entity;

use Illuminate\Foundation\Http\FormRequest;

class CreateEntityRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|unique:entities|max:32',
            'body'  => 'required',
        ];
    }
}
