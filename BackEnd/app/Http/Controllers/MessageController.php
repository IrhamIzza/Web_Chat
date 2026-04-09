<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        return Message::create([
            'user_id' => auth()->id(),
            'question' => $request->question
        ]);
    }

    public function index()
    {
        return Message::where('user_id', auth()->id())->get();
    }

    public function answer(Request $request, $id)
    {
        $msg = Message::find($id);
        $msg->answer = $request->answer;
        $msg->save();

        return $msg;
    }
    public function all()
    {
        return Message::with('user')->latest()->get();
    }
}
