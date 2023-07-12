<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Home :: </title>

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
	<script src="{{asset('backend/global_assets/js/plugins/visualization/d3/d3.min.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/plugins/visualization/d3/d3_tooltip.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/plugins/forms/styling/switchery.min.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/plugins/ui/moment/moment.min.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/plugins/pickers/daterangepicker.js')}}"></script>

	<script src="{{asset('backend/assets/js/app.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/demo_pages/dashboard.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/demo_charts/pages/dashboard/light/streamgraph.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/demo_charts/pages/dashboard/light/sparklines.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/demo_charts/pages/dashboard/light/lines.js')}}"></script>	
	<script src="{{asset('backend/global_assets/js/demo_charts/pages/dashboard/light/areas.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/demo_charts/pages/dashboard/light/donuts.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/demo_charts/pages/dashboard/light/bars.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/demo_charts/pages/dashboard/light/progress.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/demo_charts/pages/dashboard/light/heatmaps.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/demo_charts/pages/dashboard/light/pies.js')}}"></script>
	<script src="{{asset('backend/global_assets/js/demo_charts/pages/dashboard/light/bullets.js')}}"></script>
	<!-- /theme JS files -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
	<link rel="shortcut icon" href=""/>
		<style>
		.pending
			{
				background:#e6b400;
				color:white;
			}
		.dispatched
			{
				background:teal;
				color:white;
			}
		.cancelled
			{
				background:tomato;
				color:white;
			}
		.delivered
			{
				background:green;
				color:white;
			}
		.completed,.confirmed
			{
				background:green;
				color:white;
			}	
	</style>	
</head>

<body>