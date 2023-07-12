@extends('backend.layouts.main');

@section('main-container')
	<!-- Main content -->
	<div class="content-wrapper">
		<!-- Page header -->
		<div class="page-header page-header-light">
			<div class="page-header-content header-elements-md-inline">
				<div class="page-title d-flex">
					<h4><i class="icon-arrow-left52 mr-2"></i> <span class="font-weight-semibold">Home</span> - Dashboard</h4>
					<a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
				</div>
			</div>

			<div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
				<div class="d-flex">
					<div class="breadcrumb">
						<a href="index.html" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> Home</a>
						<span class="breadcrumb-item active">Dashboard</span>
					</div>

					<a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
				</div>

			</div>
		</div>
		<!-- /page header -->


		<!-- Content area -->
		<div class="content">
			<!-- Dashboard content -->
			<div class="row">
				<div class="col-xl-12">

					<!-- Marketing campaigns -->
					<div class="card">
						<div class="card-header header-elements-sm-inline">
							<h6 class="card-title">Today's Orders</h6>
							<div class="header-elements">
								<a href="orders.php"><span class="badge bg-success badge-pill">Show All</span></a>
							</div>
						</div>


						<div class="table-responsive">
							<table class="table datatable-save-state">
								<thead>
									<tr>
										<th>Order Id</th>
										<th>Customer</th>
										<th>Total</th>
										<th>Status</th>
										<th>Payment Status</th>
										<th>Date Added</th>
										<th>Date Modified</th>
										<th class="text-center">Actions</th>
									</tr>
								</thead>
								
							</table>
						</div>
					</div>
					<!-- /marketing campaigns -->


					<!-- Quick stats boxes -->
					
					<!-- /latest posts -->

				</div>

			</div>
			<!-- /dashboard content -->
		</div>
		<!-- /content area -->
@endsection
	


		
		
