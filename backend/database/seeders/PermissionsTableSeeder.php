<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::create(['name' => 'post list']);
        Permission::create(['name' => 'post create']);
        Permission::create(['name' => 'post edit']);
        Permission::create(['name' => 'post delete']);
    }
}
