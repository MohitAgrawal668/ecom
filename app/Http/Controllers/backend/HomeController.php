<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminRequest;
use App\Models\Admin;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
        {
            return view("backend.index");
        }

    public function login()
        {
            return view("backend.login");
        }
    public function checkAdmin(AdminRequest $request)
        {
            $admin = new Admin();
            $email = $request->email;
            $password = $request->password;
            $login_data = $admin->where('email_id',$email)->first();
            if($login_data!==NULL)
                {
                    if($password==$login_data->password)
                        {
                            $request->session()->put('user_id',$login_data->id);
                            $request->session()->put('user_name',$login_data->name);
                            $request->session()->put('user_email',$login_data->email_id);
                            $request->session()->put('user_profile',$login_data->profile);
                            return redirect(route("myadmin.home"));
                        }
                    else
                        {
                            return redirect()->back()
                            ->with([ 'error' => 'Wrong Login Credential' ])
                            ->withInput();
                        }
                }
            else
                {   
                    return redirect()->back()
                    ->with([ 'id' => 'Wrong Login Credential' ])
                    ->withInput();   
                }    
        }        
}
