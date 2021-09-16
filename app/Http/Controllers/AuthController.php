<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
           'email' => 'required',
           'password' => 'required'
        ]);

        if(Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
               'status' => 200,
                'user' => Auth::user()
            ]);
        } else {
            return response()->json([
                'status' => 400,
                'error' => 'Invalid credentials'
            ]);
        }
    }

    public function getUser()
    {
        $user = Auth::user();
        return response()->json([
            'user' => $user,
            'status' => 200
        ], 200);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
           'status' => 200
        ]);
    }
}
