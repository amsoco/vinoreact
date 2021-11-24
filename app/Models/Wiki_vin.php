<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wiki_vin extends Model
{
    use HasFactory;
    protected $fillable = ['nom', 'pays', 'description', 'url_saq','format','millesime', 'url_img', 'categorie_id'];
}
