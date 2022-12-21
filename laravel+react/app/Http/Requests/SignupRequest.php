<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
    /**
     * @author Nguyễn Tiến Tài
     * @created 21/12/2022
     * @description change check false -> true
    */
        return true;
    }

    public function rules()
    {
    /**
     * @author Nguyễn Tiến Tài
     * @created 21/12/2022
     * @description validate
    */
        return [
            'name' => ['required', 'string'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => [
                'required',
                'confirmed',
                Password::min(8)
                    ->letters()
                    ->symbols()
                    ->numbers()
            ]
        ];
    }
}
