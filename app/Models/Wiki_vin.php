<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store_item extends Model
{
    use HasFactory;
    protected $fillable = ['nom', 'pays', 'description', 'url_saq','format','millesime', 'categorie_id'];
}
