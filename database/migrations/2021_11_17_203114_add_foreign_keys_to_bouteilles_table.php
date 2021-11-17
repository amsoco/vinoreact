<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToBouteillesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bouteilles', function (Blueprint $table) {
            $table->foreign(['store_item_id'], 'bouteilles_ibfk_1')->references(['id'])->on('store_items');
            $table->foreign(['user_id'], 'bouteilles_ibfk_2')->references(['id'])->on('users');
            $table->foreign(['cellier_id'], 'bouteilles_ibfk_3')->references(['id'])->on('celliers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bouteilles', function (Blueprint $table) {
            $table->dropForeign('bouteilles_ibfk_1');
            $table->dropForeign('bouteilles_ibfk_2');
            $table->dropForeign('bouteilles_ibfk_3');
        });
    }
}
