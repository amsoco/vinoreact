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
            $table->date('date_achat');
            $table->decimal('prix_achat', 5)->nullable();
            $table->integer('note')->nullable();
            $table->string('commentaire', 500)->nullable();
            $table->integer('quantite');
            $table->string('url_img')->nullable();
            $table->unsignedInteger('store_item_id')->index('store_item_id');
            $table->unsignedInteger('user_id')->index('user_id');
            $table->unsignedInteger('cellier_id')->index('cellier_id');
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
