<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bouteille extends Model
{
    use HasFactory;
    protected $fillable = ['date_achat', 'prix_achat', 'note', 'commentaire','quantite','url_img', 'store_item_id','user_id', 'cellier_id'];
}
