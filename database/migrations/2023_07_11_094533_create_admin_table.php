<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string("name",50);
            $table->string('email_id',50);
            $table->string('mobile',20);
            $table->string('whatsapp_mobile',20)->nullable();
            $table->string('city',50)->nullable();
            $table->string('address',100)->nullable();
            $table->string('admin_id',20);
            $table->string('password',20);
            $table->string('status',10);
            $table->string('image',50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
