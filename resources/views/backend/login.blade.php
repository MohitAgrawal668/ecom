
<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from demo.interface.club/limitless/demo/Template/layout_1/LTR/default/full/login_transparent.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 26 Jan 2021 12:37:48 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Admin Login :: {{env('APP_NAME')}}</title>

	<!-- Global stylesheets -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">
	<link href="{{asset('backend/global_assets/css/icons/icomoon/styles.min.css')}}" rel="stylesheet" type="text/css">
	<link href="{{asset('backend/assets/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css">
	<link href="{{asset('backend/assets/css/bootstrap_limitless.min.css')}}" rel="stylesheet" type="text/css">
	<link href="{{asset('backend/assets/css/layout.min.css')}}" rel="stylesheet" type="text/css">
	<link href="{{asset('backend/assets/css/components.min.css')}}" rel="stylesheet" type="text/css">
	<link href="{{asset('backend/assets/css/colors.min.css')}}" rel="stylesheet" type="text/css">
	<!-- /global stylesheets -->

	<!-- Core JS files -->
	<script src="{{asset('backend/global_assets/js/main/jquery.min.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/main/bootstrap.bundle.min.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/plugins/loaders/blockui.min.js')}}"></script>
	<!-- /core JS files -->

	<!-- Theme JS files -->
	<script src="{{asset('backend/global_assets/js/plugins/forms/styling/uniform.min.js')}}"></script>

	<script src="{{asset('backend/assets/js/app.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/demo_pages/login.js')}}"></script>
	<!-- /theme JS files -->
	<link rel="shortcut icon" href="{{asset('frontend/assets/images/pack-favicon.png')}}"/>
</head>

<body style="background:url({{asset('backend/img/login_banner.jpg')}});background-position:center;background-size:cover;">

	<!-- Main navbar -->

	<div class="page-content">

		<!-- Main content -->
		<div class="content-wrapper">

			<!-- Content area -->
			<div class="content d-flex align-items-center">

				<!-- Login card -->
				<form class="login-form" action="{{route('myadmin.checkAdmin')}}" method="POST" style="background:rgba(0,0,0,0.4)">
					@csrf
					<div class="card-body">
						<div class="text-center mb-3">
							<i class="icon-people icon-2x text-warning-400 border-warning-400 border-3 rounded-round p-3 mb-3 mt-1"></i>
							<h5 class="mb-0" style="color:white;">Login to your account</h5>
							<span class="d-block text-muted" style="color:white !important">Your credentials</span>
						</div>
						
						@if(session()->get('id'))
							<p class='alert alert-danger'>{{session()->get('id')}}</p>
						@endif	
						<div class="form-group form-group-feedback form-group-feedback-left">
							<input type="text" class="form-control" name="email" placeholder="Email" value="{{old('email')}}">
							<div class="form-control-feedback">
								<i class="icon-user text-muted"></i>
							</div>
							@error('email')
								<span class="badge badge-danger">
									{{$message}}
								</span>	
							@enderror
						</div>

						<div class="form-group form-group-feedback form-group-feedback-left">
							<input type="password" class="form-control" name="password" placeholder="Password">
							<div class="form-control-feedback">
								<i class="icon-lock2 text-muted"></i>
							</div>
							@error('password')
								<span class="badge badge-danger">
									{{$message}}
								</span>
							@enderror
						</div>

						<div class="form-group d-flex align-items-center">
							<div class="form-check mb-0">
								<label class="form-check-label" style="color:white;">
									<input type="checkbox" name="remember" class="form-input-styled" checked data-fouc>
									Remember
								</label>
							</div>

							<a href="#" class="ml-auto" style="color:#B0DCF6">Forgot password?</a>
						</div>

						<div class="form-group">
							<button type="submit" name="submit" class="btn btn-primary btn-block">Sign in <i class="icon-circle-right2 ml-2"></i></button>
						</div>
					</div>
				</form>
				<!-- /login card -->

			</div>
			<!-- /content area -->

			<!-- /footer -->

		</div>
		<!-- /main content -->

	</div>
	<!-- /page content -->

</body>

<!-- Mirrored from demo.interface.club/limitless/demo/Template/layout_1/LTR/default/full/login_transparent.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 26 Jan 2021 12:37:48 GMT -->
</html>
