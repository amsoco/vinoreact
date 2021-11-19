<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBouteillesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bouteilles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nom');
            $table->string('pays');
            $table->string('description')->nullable();
            $table->date('date_achat');
            $table->decimal('prix_achat', 5)->nullable();
            $table->string('url_saq')->nullable();
            $table->tinyInteger('note')->nullable();
            $table->string('commentaire', 500)->nullable();
            $table->tinyInteger('quantite');
            $table->tinyInteger('millesime')->nullable();
            $table->string('format')->nullable();
            $table->string('url_img')->nullable();
            $table->unsignedInteger('categorie_id')->index('fk_bouteilles_categories1_idx');
            $table->unsignedInteger('cellier_id')->index('fk_bouteilles_celliers1_idx');
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
        Schema::dropIfExists('bouteilles');
    }
}
