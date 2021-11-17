<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToCelliersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('celliers', function (Blueprint $table) {
            $table->foreign(['bouteille_id'])->references(['id'])->on('bouteilles');
            $table->foreign(['user_email'], 'fk_celliers_users1')->references(['email'])->on('users')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('celliers', function (Blueprint $table) {
            $table->dropForeign('celliers_bouteille_id_foreign');
            $table->dropForeign('fk_celliers_users1');
        });
    }
}
