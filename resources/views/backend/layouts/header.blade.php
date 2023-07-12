<div class="navbar navbar-expand-md navbar-dark">
    <div class="navbar-brand" style="padding-top:5px;padding-bottom:5px;">
        <a href="index.php" class="d-inline-block" style="font-size:18px;margin-top:6px;color:white;text-shadow:1px 1px 1px black;">
            {{Session::get('user_name')}}
        </a>
    </div>

    <div class="d-md-none">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
            <i class="icon-tree5"></i>
        </button>
        <button class="navbar-toggler sidebar-mobile-main-toggle" type="button">
            <i class="icon-paragraph-justify3"></i>
        </button>
    </div>

    <div class="collapse navbar-collapse" id="navbar-mobile">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="#" class="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
                    <i class="icon-paragraph-justify3"></i>
                </a>
            </li>
        </ul>
        
        <span class="badge bg-success ml-md-3 mr-md-auto">Online</span>
        <ul class="navbar-nav">
            <li class="nav-item dropdown dropdown-user">
                <a href="#" class="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">
                    @if(!empty(Session::get('user_profile')))
                        <img src="{{asset(Session::get('user_profile'))}}" class="rounded-circle mr-2" height="34" alt="">
                    @else
                        <img src="{{asset('backend/img/icon/user.png')}}" class="rounded-circle mr-2" height="34" alt="">
                    @endif
                    <span>{{Session::get('user_name')}}</span>
                </a>

                <div class="dropdown-menu dropdown-menu-right">
                    <a href="#" class="dropdown-item"><i class="icon-user-plus"></i> My profile</a>
                    <div class="dropdown-divider"></div>
                    <a href="logout.php" class="dropdown-item"><i class="icon-switch2"></i> Logout</a>
                </div>
            </li>
        </ul>
    </div>
</div>
<div class="page-content">
    <div class="sidebar sidebar-dark sidebar-main sidebar-expand-md">

        <!-- Sidebar mobile toggler -->
        <div class="sidebar-mobile-toggler text-center">
            <a href="#" class="sidebar-mobile-main-toggle">
                <i class="icon-arrow-left8"></i>
            </a>
            Navigation
            <a href="#" class="sidebar-mobile-expand">
                <i class="icon-screen-full"></i>
                <i class="icon-screen-normal"></i>
            </a>
        </div>
        <!-- /sidebar mobile toggler -->


        <!-- Sidebar content -->
        <div class="sidebar-content">

            <!-- User menu -->
            <div class="sidebar-user">
                <div class="card-body">
                    <div class="media">
                        <div class="mr-3">
                            <a href="#"><img src="{{asset('backend/img/icon/user.png')}}" width="38" height="38" class="rounded-circle" alt=""></a>
                        </div>

                        <div class="media-body">
                            <div class="media-title font-weight-semibold">{{Session::get('user_name')}}</div>
                            <div class="font-size-xs opacity-50">
                                <i class="icon-pin font-size-sm"></i> &nbsp;{{Session::get('user_email')}}
                            </div>
                        </div>

                        <div class="ml-3 align-self-center">
                            <a href="#" class="text-white"><i class="icon-cog3"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /user menu -->


            <!-- Main navigation -->
            <div class="card card-sidebar-mobile">
                <ul class="nav nav-sidebar" data-nav-type="accordion">
                    <li class="nav-item">
                        <a href="index.php" class="nav-link active">
                            <i class="icon-home4"></i>
                            <span>
                                Dashboard
                            </span>
                        </a>
                    </li>
                    
                    <li class="nav-item-header"><div class="text-uppercase font-size-xs line-height-xs">Products</div> <i class="icon-menu" title="Main"></i></li>
                    <li class="nav-item"><a href="{{route('category.index')}}" class="nav-link"><i class="fa fa-plus-square"></i><span>Categorys</span></a></li>
                    <li class="nav-item"><a href="product-add.php" class="nav-link"><i class="fa fa-plus-square"></i><span>Add Product</span></a></li>
                    <li class="nav-item"><a href="products.php" class="nav-link"><i class="fa fa-list-ul"></i><span>Product List</span></a></li>
                    
                    <li class="nav-item-header"><div class="text-uppercase font-size-xs line-height-xs">Sale</div> <i class="icon-menu" title="Main"></i></li>
                    <li class="nav-item"><a href="orders.php" class="nav-link"><i class="fa fa-shopping-cart"></i><span>Orders</span></a></li>
                    <li class="nav-item"><a href="report.php" class="nav-link"><i class="fa fa-shopping-cart"></i><span>Report</span></a></li>
                    
                    <li class="nav-item"><a href="feedbacks.php" class="nav-link"><i class="fa fa-shopping-cart"></i><span>Fedbacks</span></a></li>
                    <li class="nav-item"><a href="enquiry.php" class="nav-link"><i class="fa fa-shopping-cart"></i><span>Contact Enquirys</span></a></li>
                </ul>
            </div>
            <!-- /main navigation -->

        </div>
        <!-- /sidebar content -->
        
    </div>