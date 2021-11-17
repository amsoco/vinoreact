<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCelliersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('celliers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nom_cellier', 45);
            $table->date('date_achat');
            $table->decimal('prix_achat', 5)->nullable();
            $table->integer('note')->nullable();
            $table->string('commentaire', 500)->nullable();
            $table->integer('quantite');
            $table->string('url_img')->nullable();
            $table->unsignedInteger('bouteille_id')->index('celliers_bouteille_id_foreign');
            $table->string('user_email')->index('fk_celliers_users1_idx');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('celliers');
    }
}
