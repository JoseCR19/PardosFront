<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Main extends Controller
{
    public function Reserva()
    {
        return view('Cliente.reserva');
    }
    public function VerificarReserva()
    {
        return view('Cliente.verificarreserva');
    }
    
}
