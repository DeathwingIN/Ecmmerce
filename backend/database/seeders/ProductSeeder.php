<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::withoutEvents(function () {
            $categories = Category::all();
            $categories->each(function ($category) {
                Product::factory(5)->create([
                    'category_id' => $category->id,
                ]);
            });
        });
    }
}
