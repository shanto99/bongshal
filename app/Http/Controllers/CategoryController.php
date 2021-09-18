<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function create_category(Request $request)
    {
        $request->validate([
            'category_name' => 'required'
        ]);

        $category = Category::create([
            'category_name' => $request->category_name
        ]);

        return response()->json([
            'category' => $category,
            'status' => 200
        ]);
    }

    public function get_categories()
    {
        $categories = Category::all();
        return response()->json([
           'categories' => $categories,
           'status' => 200
        ]);
    }
}
