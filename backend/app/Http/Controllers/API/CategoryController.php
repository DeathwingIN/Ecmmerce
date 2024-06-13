<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;


class CategoryController extends Controller
{

    public function index()
    {
        $categories = Category::with('products') -> get();
        return response()->json($categories);
    }


    public function store(Request $request)
    {
        try {
            // Validate the request data
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'description' => 'required|string|max:255',
                'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            // Create a new Category instance
            $category = new Category();
            $category->name = $validated['name'];
            $category->description = $validated['description'];

            // Check if the avatar file is present and handle the file upload
            if ($request->hasFile('avatar')) {
                $avatar = $request->file('avatar');
                $filename = time() . '.' . $avatar->getClientOriginalExtension();
                $avatar->storeAs('public/categories', $filename);
                $category->avatar = $filename;
            }

            // Save the category to the database
            $category->save();

            // Return a success response
            return response()->json([
                'success' => true,
                'message' => 'Category created successfully',
                'category' => $category
            ], 201);

        } catch (\Exception $e) {
            // Log the error
            \Log::error('Error creating category: ' . $e->getMessage());

            // Return an error response
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while creating the category',
                'error' => $e->getMessage()
            ], 500);
        }
    }



    public function show($id)
    {
        $category = Category::with('products') -> where('id',$id)->first();
        if(!$category){
            return response()->json(['error' => 'Category not found'],404);
        }
        return response()->json($category);
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
