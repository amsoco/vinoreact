<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWikiVinsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wiki_vins', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nom');
            $table->string('pays');
            $table->string('description');
            $table->string('url_saq');
            $table->string('format');
            $table->tinyInteger('millesime');
            $table->string('url_img');
            $table->unsignedInteger('categorie_id')->index('bouteilles_categorie_id_foreign');
            $table->timestamp('created_at')->useCurrentOnUpdate()->useCurrent();
            $table->timestamp('updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wiki_vins');
    }
}
