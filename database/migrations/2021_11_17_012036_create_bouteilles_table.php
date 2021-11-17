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
            $table->string('description');
            $table->string('url_saq')->nullable();
            $table->string('format')->nullable();
            $table->tinyInteger('millesime')->nullable();
            $table->unsignedInteger('categorie_id')->index('bouteilles_categorie_id_foreign');
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
