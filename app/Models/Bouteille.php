<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bouteille extends Model
{
    use HasFactory;
    protected $fillable = ['nom', 'pays', 'description', 'date_achat','prix_achat','url_saq', 'note','commentaire', 'quantite','millesime', 'format', 'url_img', 'categorie_id', 'cellier_id'];
}
