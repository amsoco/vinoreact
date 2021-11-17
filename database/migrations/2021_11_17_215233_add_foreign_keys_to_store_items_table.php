<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToStoreItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('store_items', function (Blueprint $table) {
            $table->foreign(['categorie_id'], 'bouteilles_categorie_id_foreign')->references(['id'])->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('store_items', function (Blueprint $table) {
            $table->dropForeign('bouteilles_categorie_id_foreign');
        });
    }
}
