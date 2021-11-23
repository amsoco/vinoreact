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
            $table->foreign(['categorie_id'], 'fk_bouteilles_categories1')->references(['id'])->on('categories')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['cellier_id'], 'fk_bouteilles_celliers1')->references(['id'])->on('celliers')->onUpdate('NO ACTION')->onDelete('NO ACTION');
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
            $table->dropForeign('fk_bouteilles_categories1');
            $table->dropForeign('fk_bouteilles_celliers1');
        });
    }
}
