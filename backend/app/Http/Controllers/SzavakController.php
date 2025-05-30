<?php

namespace App\Http\Controllers;

use App\Models\Szavak;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SzavakController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Szavak::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Szavak $szavak)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Szavak $szavak)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Szavak $szavak)
    {
        //
    }

    public function getSzavakTemakSzerint($id){
        $data = DB::select("
            select sz.id, angol, magyar, temaId, temanev
            from szavaks as sz
            inner join temas as t on t.id = sz.temaId
            where sz.temaId = $id
        ");

        return response()->json($data);
    }

    public function getSzavakEsTemak(){
        $data = DB::select("
            select sz.id, angol, magyar, temaId, temanev
            from szavaks as sz
            inner join temas as t on t.id = sz.temaId
        ");

        return response()->json($data);
    }

}
