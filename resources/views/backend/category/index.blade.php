@extends('backend.layouts.main')
@section('main-container')
    <div class="content-wrapper">

        <!-- Page header -->
        <div class="page-header page-header-light">
            <div class="page-header-content header-elements-md-inline">
                <div class="page-title d-flex">
                    <h4><i class="icon-arrow-left52 mr-2"></i> <span class="font-weight-semibold">Home</span> - Product Category</h4>
                    <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
                </div>
            </div>

            <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                <div class="d-flex">
                    <div class="breadcrumb">
                        <a href="{{route('myadmin.home')}}" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> Home</a>
                        <span class="breadcrumb-item active">Product Category</span>
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
                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-header header-elements-sm-inline">
                            <h6 class='card-title'>Add Product Category</h6>
                        </div>
                        <hr style="margin-top:0px;margin-bottom:0px;">
                        <form action="{{route('category.store')}}" method="post" enctype="multipart/form-data" onkeydown="return event.key != 'Enter';">
                        <div class="card-body border-top-0 rounded-0 rounded-bottom tab-content mb-0">
                            <div class="tab-pane fade active show" id="tab-dark-1">
                                <fieldset>
                                    <div class="row">	
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" name="name" value="<?=@$name;?>" class="form-control">
                                            </div>	
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Parent Category</label>
                                                <select name="parent_id" id="parent_id" class="form-control">
                                                    <option value="0">Select Parent Category</option>
                                                </select>    
                                            </div>	
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Sort Order</label>
                                                <input type="text" name="sort_order" class="form-control">
                                            </div>	
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Is Featured</label>
                                                <select name="is_featured" id="is_featured" class="form-control">
                                                    <option value="0" >No</option>
                                                    <option value="1" >Yes</option>
                                                </select>    
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Status</label>
                                                <select name="status" id="status" class="form-control">
                                                    <option value="0">Select Status</option>
                                                    <option value="published">Published</option>
                                                    <option value="unpublished">Unpublished</option>
                                                </select>    
                                            </div>
                                        </div>	
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Thumbnail</label>
                                                <input type="file" name="main_image" id="main_image" class="form-control">
                                                <div class="main_image img-thumbnail" onclick="product_category.select_image()">
                                                    <p style="font-size:24px;text-align:center;margin-bottom:0px;">
                                                        <img src="{{asset('backend/img/icon/upload.png')}}" style="width:120px;">
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                </fieldset>
                                
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input type='submit' class='waves-effect waves-light btn-large btn btn-info' id='submit' name='submit' value='Save'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    
                </div>
                <div class="col-xl-8">

                    <!-- Marketing campaigns -->
                    <div class="card">
                        <div class="card-header header-elements-sm-inline">
                            <h6 class="card-title">Product Category List</h6>
                        </div>


                        <div class="table-responsive">
                            <table class="table datatable-save-state">
                                <thead>
                                    <tr>
                                        <th style="width:15%">Image</th>
                                        <th style="width:25%">Name</th>
                                        <th style="width:20%">Parent Id</th>
                                        <th style="width:10%">Is Featured</th>
                                        <th style="width:20%">Sort Order</th>
                                        <th class="text-center" style="width:10%">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
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

