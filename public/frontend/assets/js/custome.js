$(".add-cart-btn").click(function(){
	var product_id=$(this).attr("data-product-id");
	$(this).html("<i class='fa fa-spin fa-spinner'></i>");
	$.ajax({
		url: "ajax/cart/add.php?product_id="+product_id,
		type: "POST",
		data:  "",
		contentType: false,
		cache: false,
		processData:false,
		success: function(data)
		{
			var a=JSON.parse(data);
			if(a.status=='Success')
				{
					$(this).html("<i class='fi flaticon-add-to-cart'></i>");
					$.Toast("", a.message, "success", {
						has_icon:false,
						has_close_btn:true,
						stack: true,
						fullscreen:true,
						timeout:2000,
						sticky:false,
						has_progress:true,
						rtl:false,
					});
					refresh_header_cart();
				}
			else	
				{
					$(this).html("<i class='fi flaticon-add-to-cart'></i>");
					$.Toast("", a.message, "error", {
						has_icon:false,
						has_close_btn:true,
						stack: true,
						fullscreen:true,
						timeout:2000,
						sticky:false,
						has_progress:true,
						rtl:false,
					});
				}								
		},
		error: function() 
		{
		} 	        
   });
});

//Refresh Cart
function refresh_header_cart()
	{
		$.ajax({
			url: "ajax/cart/refresh-header-cart.php",
			type: "POST",
			data:  "",
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
				{
					var a=JSON.parse(data);
					$(".mini-cart .cart-subtotal").html(a.subtotal);
					$(".mini-cart .cart-count").html(a.count);
					$(".mini-cart .mini-cart-items").html(a.items);
				},
			error: function() 
				{
				} 	        
		});
	}

//Refresh Wishlist
function refresh_header_wishlist()
	{
		$.ajax({
			url: "ajax/wishlist/refresh-header-wishlist.php",
			type: "POST",
			data:  "",
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
				{
					var a=JSON.parse(data);
					$(".header-wishlist-form-wrapper .wishlist-subtotal").html(a.subtotal);
					$(".header-wishlist-form-wrapper .cart-count").html(a.count);
					$(".header-wishlist-form-wrapper .mini-cart-items").html(a.items);
				},
			error: function() 
				{
				} 	        
		});
	}	
	
//Refresh Cart
function refresh_cart()
	{
		$.ajax({
			url: "ajax/cart/refresh-cart.php",
			type: "POST",
			data:  "",
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
				{
					var a=JSON.parse(data);
					$(".cart-body").html(a.items);
					$(".count-text").html(a.count);
					$("#subtotal-text").html(a.subtotal);
					$("#total-text").html(a.total);
					$("#tax-text").html(a.total_tax);
					$(".qtybutton").on("click", function () {
						var $button = $(this);
						var oldValue = $button.parent().find("input").val();
						if ($button.text() == "+") {
							var newVal = parseFloat(oldValue) + 1;
						} else {
							// Don't allow decrementing below zero
							if (oldValue > 0) {
								var newVal = parseFloat(oldValue) - 1;
							} else {
								newVal = 0;
							}
						}
						$button.parent().find("input").val(newVal);
					});
				},
			error: function() 
				{
				} 	        
		});
	}
	
//Refresh Wishlist
function refresh_wishlist()
	{
		$.ajax({
			url: "ajax/wishlist/refresh-wishlist.php",
			type: "POST",
			data:  "",
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
				{
					$("#wishlist-box").html(data);	
				},
			error: function() 
				{
				} 	        
		});
	}	
	
	
//Remove Cart item
function remove_cart_item(product_id)
	{
		$.ajax({
			url: "ajax/cart/remove-cart-item.php?product_id="+product_id,
			type: "POST",
			data:  "",
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
				{
					refresh_header_cart();
				},
			error: function() 
				{
				} 	        
		});
	}
	
//Remove Cart item
function remove_cart_item2(product_id)
	{
		$.ajax({
			url: "ajax/cart/remove-cart-item.php?product_id="+product_id,
			type: "POST",
			data:  "",
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
				{
					refresh_header_cart();
					refresh_cart();
				},
			error: function() 
				{
				} 	        
		});
	}
//Remove Wishlist item
function remove_wishlist_item(product_id)
	{
	    $("#wishlist_btn"+product_id).html("<i class='fa fa-spin fa-spinner'></i>");
		$.ajax({
			url: "ajax/wishlist/remove.php?product_id="+product_id,
			type: "POST",
			data:  "",
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
				{
					refresh_header_wishlist();
					refresh_wishlist();
				},
			error: function() 
				{
				} 	        
		});
	}	
	
	
$(document).ready(function(){
	refresh_header_cart();
	refresh_header_wishlist();
});


//Add to cart
function add_to_cart(product_id)
	{
		var qty=$("#qty").val();
		var max_qty_carton=$("#max_qty_carton").val();
		var max_qty_packet=$("#max_qty_packet").val();
		if(($('#sz1').is(':checked')) || ($('#sz2').is(':checked')))
			{
			    if($('#sz1').is(':checked'))
			        {
			            if(qty>max_qty_carton)
			                {
			                    $.Toast("", "You can purchase up to "+max_qty_carton+" carton", "error", {
                					has_icon:false,
                					has_close_btn:true,
                					stack: true,
                					fullscreen:true,
                					timeout:2000,
                					sticky:false,
                					has_progress:true,
                					rtl:false,
                				});
                				return;
			                }
			        }
		        else if($('#sz2').is(':checked'))
			        {
			            if(qty>max_qty_packet)
			                {
			                    $.Toast("", "You can purchase up to "+max_qty_packet+" packet", "error", {
                					has_icon:false,
                					has_close_btn:true,
                					stack: true,
                					fullscreen:true,
                					timeout:2000,
                					sticky:false,
                					has_progress:true,
                					rtl:false,
                				});
                				return;
			                }
			        }
        		var type=$('input[name="size"]:checked').val();		
				$.ajax({
					url: "ajax/cart/add2.php?product_id="+product_id+"&qty="+qty+"&type="+type,
					type: "POST",
					data:  "",
					contentType: false,
					cache: false,
					processData:false,
					success: function(data)
					{
						var a=JSON.parse(data);
						if(a.status=='Success')
							{
								$("#add-to-cart-btn").html("Add To Cart");
								$.Toast("", a.message, "success", {
									has_icon:false,
									has_close_btn:true,
									stack: true,
									fullscreen:true,
									timeout:2000,
									sticky:false,
									has_progress:true,
									rtl:false,
								});
								refresh_header_cart();
							}
						else	
							{
								$("#add-to-cart-btn").html("Add To Cart");
								$.Toast("", a.message, "error", {
									has_icon:false,
									has_close_btn:true,
									stack: true,
									fullscreen:true,
									timeout:2000,
									sticky:false,
									has_progress:true,
									rtl:false,
								});
							}								
					},
					error: function() 
					{
					} 	        
			   });
		    }
		else
			{
				$.Toast("", "Select a purchase type first", "error", {
					has_icon:false,
					has_close_btn:true,
					stack: true,
					fullscreen:true,
					timeout:2000,
					sticky:false,
					has_progress:true,
					rtl:false,
				});
			}			
	}
	
//Add to cart
function add_to_wishlist(product_id)
	{
		var qty=$("#qty").val();
		var max_qty_carton=$("#max_qty_carton").val();
		var max_qty_packet=$("#max_qty_packet").val();
		if(($('#sz1').is(':checked')) || ($('#sz2').is(':checked')))
			{
			    if($('#sz1').is(':checked'))
			        {
			            if(qty>max_qty_carton)
			                {
			                    $.Toast("", "You can purchase up to "+max_qty_carton+" carton", "error", {
                					has_icon:false,
                					has_close_btn:true,
                					stack: true,
                					fullscreen:true,
                					timeout:2000,
                					sticky:false,
                					has_progress:true,
                					rtl:false,
                				});
                				return;
			                }
			        }
		        else if($('#sz2').is(':checked'))
			        {
			            if(qty>max_qty_packet)
			                {
			                    $.Toast("", "You can purchase up to "+max_qty_packet+" packet", "error", {
                					has_icon:false,
                					has_close_btn:true,
                					stack: true,
                					fullscreen:true,
                					timeout:2000,
                					sticky:false,
                					has_progress:true,
                					rtl:false,
                				});
                				return;
			                }
			        }
		    	$("#add-to-wishlist-btn").html("<i class='fa fa-spin fa-spinner'></i>");       
        		var type=$('input[name="size"]:checked').val();		
				$.ajax({
					url: "ajax/wishlist/add.php?product_id="+product_id+"&qty="+qty+"&type="+type,
					type: "POST",
					data:  "",
					contentType: false,
					cache: false,
					processData:false,
					success: function(data)
					{
						var a=JSON.parse(data);
						if(a.status=='Success')
							{
								$("#add-to-wishlist-btn").html("<i class='fi flaticon-heart'></i>");
								$.Toast("", a.message, "success", {
									has_icon:false,
									has_close_btn:true,
									stack: true,
									fullscreen:true,
									timeout:2000,
									sticky:false,
									has_progress:true,
									rtl:false,
								});
								refresh_header_wishlist();
							}
						else	
							{
								$("#add-to-wishlist-btn").html("<i class='fi flaticon-heart'></i>");
								$.Toast("", a.message, "error", {
									has_icon:false,
									has_close_btn:true,
									stack: true,
									fullscreen:true,
									timeout:2000,
									sticky:false,
									has_progress:true,
									rtl:false,
								});
							}								
					},
					error: function() 
					{
					} 	        
			   });
		    }
		else
			{
				$.Toast("", "Select a purchase type first", "error", {
					has_icon:false,
					has_close_btn:true,
					stack: true,
					fullscreen:true,
					timeout:2000,
					sticky:false,
					has_progress:true,
					rtl:false,
				});
			}			
	}	
	
//Update Cart
function update_cart()
	{
		$("#update-cart-btn").html("<i class='fa fa-spin fa-spinner'></i>&nbsp;Please Wait....");
		var Form=$('#cart-form')[0];
		$.ajax({
			url: "ajax/cart/update.php",
			type: "POST",
			data:  new FormData(Form),
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
			{
				var a=JSON.parse(data);
				if(a.status=='Success')
					{
						$("#update-cart-btn").html("<i class='fi flaticon-refresh'></i>&nbsp;Update Cart");
						$.Toast("", a.message, "success", {
							has_icon:false,
							has_close_btn:true,
							stack: true,
							fullscreen:true,
							timeout:2000,
							sticky:false,
							has_progress:true,
							rtl:false,
						});
						
						refresh_header_cart();
						refresh_cart();
					}
				else	
					{
						$("#update-cart-btn").html("<i class='fi flaticon-refresh'></i>&nbsp;Update Cart");
						$.Toast("", a.message, "error", {
							has_icon:false,
							has_close_btn:true,
							stack: true,
							fullscreen:true,
							timeout:2000,
							sticky:false,
							has_progress:true,
							rtl:false,
						});
					}								
			},
			error: function() 
			{
			} 	        
	   });
	}


//Login Portion
let timerOn = true;
function timer(remaining) 
	{
		var m = Math.floor(remaining / 60);
		var s = remaining % 60;
		m = m < 10 ? '0' + m : m;
		s = s < 10 ? '0' + s : s;
		document.getElementById('timer-text').innerHTML = m + ':' + s;
		remaining -= 1;
		if(remaining >= 0 && timerOn) 
			{
				setTimeout(function() {timer(remaining);}, 1000);
				return;
			}
		if(!timerOn) 
			{
				return;
			}
		// Do timeout stuff here
		$("#timer-text").html("");
		$(".otp-text").css("color","#EE3131");
		$(".otp-text").attr("onclick","get_otp()");
	}
	
function timer2(remaining) 
	{
		var m = Math.floor(remaining / 60);
		var s = remaining % 60;
		m = m < 10 ? '0' + m : m;
		s = s < 10 ? '0' + s : s;
		document.getElementById('timer-text').innerHTML = m + ':' + s;
		remaining -= 1;
		if(remaining >= 0 && timerOn) 
			{
				setTimeout(function() {timer2(remaining);}, 1000);
				return;
			}
		if(!timerOn) 
			{
				return;
			}
		// Do timeout stuff here
		$("#timer-text").html("");
		$(".otp-text").css("color","#EE3131");
		$(".otp-text").attr("onclick","get_otp_from_checkout()");
	}	
function validate_mobile()
	{
		var mobileNum = $("#mobile").val();
		var validateMobNum= /^\d*(?:\.\d{1,2})?$/;
		if (validateMobNum.test(mobileNum ) && mobileNum.length == 10) 
			{
				$("#mobile-no-text").html('');
				$(".otp-text").css("color","#EE3131");
				$("#login-btn").removeClass("disabled-btn");
			}
		else 
			{
				$("#mobile-no-text").html('Enter Valid Mobile No');
				$("#login-btn").addClass("disabled-btn");
			}
	}
function get_otp()
	{
		if($("#mobile").val().length==10)
			{
				$("#mobile").css("box-shadow","none");	
				var Form=$('#login-form')[0];

				$.ajax({
					url: "ajax/send-otp.php",
					type: "POST",
					data:  new FormData(Form),
					contentType: false,
					cache: false,
					processData:false,
					success: function(data)
					{
						$(".otp-text").html("RESEND OTP");
						$(".otp-text").css("color","lightgray");
						$(".otp-text").removeAttr("onclick");
						timer(300);
					},
					error: function() 
					{
					} 	        
				});	
			}
	}

function get_otp_from_checkout()
	{
		if($("#mobile").val().length==10)
			{
				$("#mobile").css("box-shadow","none");	
				var Form=$('#checkout-form')[0];

				$.ajax({
					url: "ajax/send-otp.php",
					type: "POST",
					data:  new FormData(Form),
					contentType: false,
					cache: false,
					processData:false,
					success: function(data)
					{
						$(".otp-text").html("RESEND OTP");
						$(".otp-text").css("color","lightgray");
						$(".otp-text").removeAttr("onclick");
						timer2(300);
					},
					error: function() 
					{
					} 	        
				});	
			}
	}
	
function login()
	{
		
		$("#login-btn").html("Please Wait....");
		$("#login-btn").removeAttr("onclick");
		var Form=$('#login-form')[0];
		$.ajax({
			url: "ajax/login.php",
			type: "POST",
			data:  new FormData(Form),
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
			{
				var a=JSON.parse(data);
				if(a.status=='Success')
					{
						$.Toast("", a.message, "success", {
							has_icon:false,
							has_close_btn:true,
							stack: true,
							fullscreen:true,
							timeout:2000,
							sticky:false,
							has_progress:true,
							rtl:false,
						});
						setTimeout(function(){window.location.reload();},1000);
					}
				else	
					{
						$("#login-btn").html("Log In");
						$("#login-btn").attr("onclick","login()");
						$.Toast("", a.message, "error", {
							has_icon:false,
							has_close_btn:true,
							stack: true,
							fullscreen:true,
							timeout:2000,
							sticky:false,
							has_progress:true,
							rtl:false,
						});
					}								
			},
			error: function() 
			{
			} 	        
	   });
	}
	
	
function login_from_checkout()
	{
		
		$("#login-btn").html("Please Wait....");
		$("#login-btn").removeAttr("onclick");
		var Form=$('#checkout-form')[0];
		$.ajax({
			url: "ajax/login.php",
			type: "POST",
			data:  new FormData(Form),
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
			{
				var a=JSON.parse(data);
				if(a.status=='Success')
					{
						$.Toast("", a.message, "success", {
							has_icon:false,
							has_close_btn:true,
							stack: true,
							fullscreen:true,
							timeout:2000,
							sticky:false,
							has_progress:true,
							rtl:false,
						});
						setTimeout(function(){window.location.reload();},1000);
					}
				else	
					{
						$("#login-btn").html("Log In");
						$("#login-btn").attr("onclick","login()");
						$.Toast("", a.message, "error", {
							has_icon:false,
							has_close_btn:true,
							stack: true,
							fullscreen:true,
							timeout:2000,
							sticky:false,
							has_progress:true,
							rtl:false,
						});
					}								
			},
			error: function() 
			{
			} 	        
	   });
	}	
//Place Order	
function place_order()
	{
		
		$("#order-btn").html("<i class='fa fa-spin fa-spinner'></i> &nbsp;Please Wait....");
		$("#order-btn").removeAttr("onclick");
		var Form=$('#checkout-form')[0];
		$.ajax({
			url: "ajax/checkout.php",
			type: "POST",
			data:  new FormData(Form),
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
			{
				var a=JSON.parse(data);
				var order_id=a.order_id;
				if(a.status=='Success')
					{
						$.Toast("", a.message, "success", {
							has_icon:false,
							has_close_btn:true,
							stack: true,
							fullscreen:true,
							timeout:2000,
							sticky:false,
							has_progress:true,
							rtl:false,
						});
						setTimeout(function(){window.location.href='order-success.php?order_id='+order_id;},1000);
					}
				else	
					{
						$("#order-btn").html("Place Order");
						$("#order-btn").attr("onclick","place_order()");
						$.Toast("", a.message, "error", {
							has_icon:false,
							has_close_btn:true,
							stack: true,
							fullscreen:true,
							timeout:2000,
							sticky:false,
							has_progress:true,
							rtl:false,
						});
					}								
			},
			error: function() 
			{
			} 	        
	   });
	}	
	
	
//Add to cart from wishlist
$(document).on('click', ".add-to-cart-from-wishlist-btn" , function() {
	var product_id=$(this).attr("data-product-id");
	$(this).html("<i class='fa fa-spin fa-spinner'></i>");
	$.ajax({
		url: "ajax/cart/add.php?product_id="+product_id,
		type: "POST",
		data:  "",
		contentType: false,
		cache: false,
		processData:false,
		success: function(data)
		{
			var a=JSON.parse(data);
			if(a.status=='Success')
				{
				    $.Toast("", "<span style='font-size:15px;'><i class='fa fa-check-circle' aria-hidden='true'></i>&nbsp;&nbsp;Product added to cart from wishlist successfully.</span>", "success", {
							has_icon:false,
							has_close_btn:true,
							stack: true,
							fullscreen:true,
							timeout:2000,
							sticky:false,
							has_progress:true,
							rtl:false,
						});
				    refresh_header_cart();
					remove_wishlist_item(product_id);
				}
			else	
				{
					$(this).html("Add To Cart'></i>");
					$.Toast("", a.message, "error", {
						has_icon:false,
						has_close_btn:true,
						stack: true,
						fullscreen:true,
						timeout:2000,
						sticky:false,
						has_progress:true,
						rtl:false,
					});
				}								
		},
		error: function() 
		{
		} 	        
   });
});	


//Place Order	
function reorder(order_id)
	{
		
		$("#reorder-btn").html("<i class='fa fa-spin fa-spinner'></i> &nbsp;Please Wait....");
		$("#reorder-btn").removeAttr("onclick");
		$.ajax({
			url: "ajax/reorder.php?order_id="+order_id,
			type: "POST",
			data:  "",
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
    			{
    				window.location.href="cart.php";								
    			},
			error: function() 
    			{
    			} 	        
	   });
	}

//open cancel order box
function open_cancel_order(order_id)
    {
        $(".cancel_order_box").slideDown(1000);
        $(".cancel_order_box").css("display","flex");
    }
//close cancel order box
function close_cancel_order(order_id)
    {
        $(".cancel_order_box").slideUp(500);
    } 
    
//Cancel Order
function cancel_order(order_id)
	{
		$("#cancel_order-btn").html("<i class='fa fa-spin fa-spinner'></i> &nbsp;Please Wait....");
		$("#cancel_order-btn").removeAttr("onclick");
		var Form=$('#cancel-form')[0];
		$.ajax({
			url: "ajax/cancel_order.php?order_id="+order_id,
			type: "POST",
			data:  new FormData(Form),
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
    			{
    				var a=JSON.parse(data);
    				if(a.status=='Success')
    					{
    						$.Toast("", a.message, "success", {
    							has_icon:false,
    							has_close_btn:true,
    							stack: true,
    							fullscreen:true,
    							timeout:2000,
    							sticky:false,
    							has_progress:true,
    							rtl:false,
    						});
    						$("#reason").val("");
    						$(".cancel_order_box").slideUp(500);
    						window.location.reload();
    					}
    				else	
    					{
    						$("#cancel_order-btn").html("CONFIRM");
    						$("#cancel_order-btn").attr("onclick","cancel_order("+order_id+")");
    						$.Toast("", a.message, "error", {
    							has_icon:false,
    							has_close_btn:true,
    							stack: true,
    							fullscreen:true,
    							timeout:2000,
    							sticky:false,
    							has_progress:true,
    							rtl:false,
    						});
    					}								
    			},
			error: function() 
    			{
    			} 	        
	   });
	}
	
	
//Add Address
function add_address()
	{
		$("#add-address-btn").html("<i class='fa fa-spin fa-spinner'></i> &nbsp;Please Wait....");
		$("#add-address-btn").removeAttr("onclick");
		var Form=$('#address-form')[0];
		$.ajax({
			url: "ajax/add-address.php",
			type: "POST",
			data:  new FormData(Form),
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
    			{
    				var a=JSON.parse(data);
    				if(a.status=='Success')
    					{
    						$.Toast("", a.message, "success", {
    							has_icon:false,
    							has_close_btn:true,
    							stack: true,
    							fullscreen:true,
    							timeout:2000,
    							sticky:false,
    							has_progress:true,
    							rtl:false,
    						});
    						window.location.href="profile.php";
    					}
    				else	
    					{
    			    		$("#add-address-btn").html("Add Address");
		                    $("#add-address-btn").attr("onclick","add_address()");
    						$.Toast("", a.message, "error", {
    							has_icon:false,
    							has_close_btn:true,
    							stack: true,
    							fullscreen:true,
    							timeout:2000,
    							sticky:false,
    							has_progress:true,
    							rtl:false,
    						});
    					}								
    			},
			error: function() 
    			{
    			} 	        
	   });
	}
	
//Edit Address
function edit_address()
	{
		$("#add-address-btn").html("<i class='fa fa-spin fa-spinner'></i> &nbsp;Please Wait....");
		$("#add-address-btn").removeAttr("onclick");
		var Form=$('#address-form')[0];
		$.ajax({
			url: "ajax/edit-address.php",
			type: "POST",
			data:  new FormData(Form),
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
    			{
    			    var a=JSON.parse(data);
    				if(a.status=='Success')
    					{
    						$.Toast("", a.message, "success", {
    							has_icon:false,
    							has_close_btn:true,
    							stack: true,
    							fullscreen:true,
    							timeout:2000,
    							sticky:false,
    							has_progress:true,
    							rtl:false,
    						});
    					}
    				else	
    					{
    			    		$("#add-address-btn").html("Edit Address");
		                    $("#add-address-btn").attr("onclick","edit_address()");
    						$.Toast("", a.message, "error", {
    							has_icon:false,
    							has_close_btn:true,
    							stack: true,
    							fullscreen:true,
    							timeout:2000,
    							sticky:false,
    							has_progress:true,
    							rtl:false,
    						});
    					}								
    			},
			error: function() 
    			{
    			} 	        
	   });
	}
	
	
	
//Add Address
function add_gst_detail()
	{
		$("#add-address-btn").html("<i class='fa fa-spin fa-spinner'></i> &nbsp;Please Wait....");
		$("#add-address-btn").removeAttr("onclick");
		var Form=$('#address-form')[0];
		$.ajax({
			url: "ajax/add-gst-detail.php",
			type: "POST",
			data:  new FormData(Form),
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
    			{
    				var a=JSON.parse(data);
    				if(a.status=='Success')
    					{
    						$.Toast("", a.message, "success", {
    							has_icon:false,
    							has_close_btn:true,
    							stack: true,
    							fullscreen:true,
    							timeout:2000,
    							sticky:false,
    							has_progress:true,
    							rtl:false,
    						});
    						window.location.href="profile.php";
    					}
    				else	
    					{
    			    		$("#add-address-btn").html("Add Address");
		                    $("#add-address-btn").attr("onclick","add_gst_detail()");
    						$.Toast("", a.message, "error", {
    							has_icon:false,
    							has_close_btn:true,
    							stack: true,
    							fullscreen:true,
    							timeout:2000,
    							sticky:false,
    							has_progress:true,
    							rtl:false,
    						});
    					}								
    			},
			error: function() 
    			{
    			} 	        
	   });
	}
	
//Edit Address
function edit_gst_detail()
	{
		$("#add-address-btn").html("<i class='fa fa-spin fa-spinner'></i> &nbsp;Please Wait....");
		$("#add-address-btn").removeAttr("onclick");
		var Form=$('#address-form')[0];
		$.ajax({
			url: "ajax/edit-gst-detail.php",
			type: "POST",
			data:  new FormData(Form),
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
    			{
    			    var a=JSON.parse(data);
    				if(a.status=='Success')
    					{
    						$.Toast("", a.message, "success", {
    							has_icon:false,
    							has_close_btn:true,
    							stack: true,
    							fullscreen:true,
    							timeout:2000,
    							sticky:false,
    							has_progress:true,
    							rtl:false,
    						});
    					}
    				else	
    					{
    			    		$("#add-address-btn").html("Edit Address");
		                    $("#add-address-btn").attr("onclick","edit_gst_detail()");
    						$.Toast("", a.message, "error", {
    							has_icon:false,
    							has_close_btn:true,
    							stack: true,
    							fullscreen:true,
    							timeout:2000,
    							sticky:false,
    							has_progress:true,
    							rtl:false,
    						});
    					}								
    			},
			error: function() 
    			{
    			} 	        
	   });
	}	

$('input[type=radio][name=shipping_address]').change(function() {
    if ($(this).is(':checked')) 
        {
            $('#new_address').prop('checked', false);
            $("#shipping-address-box").css("display","none");
        }
});

$('#new_address').change(function () {
    if ($(this).is(':checked')) 
        {
            $("#shipping-address-box").css("display","flex");
            $('.shipping_address_radio').prop('checked', false);
        }
    else
        {
            $("#shipping-address-box").css("display","none");
        }
 });
 
 
$('input[type=radio][name=billing_address]').change(function() {
    if ($(this).is(':checked')) 
        {
            $('#new_billing_address').prop('checked', false);
            $("#billing-address-box").css("display","none");
        }
});

$('#new_billing_address').change(function () {
    if ($(this).is(':checked')) 
        {
            $("#billing-address-box").css("display","flex");
            $('.billing_address_radio').prop('checked', false);
        }
    else
        {
            $("#billing-address-box").css("display","none");
        }
 }); 
 
//Submit Feedback
function submit_feedback()
	{
		
		$("#submit-btn").html("<i class='fa fa-spin fa-spinner'></i> &nbsp;Please Wait....");
		$("#submit-btn").removeAttr("onclick");
		var Form=$('#feedback-form')[0];
		$.ajax({
			url: "ajax/submit-feedback.php",
			type: "POST",
			data:  new FormData(Form),
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
			{
				var a=JSON.parse(data);
				if(a.status=='Success')
					{
						$.Toast("", a.message, "success", {
							has_icon:false,
							has_close_btn:true,
							stack: true,
							fullscreen:true,
							timeout:2000,
							sticky:false,
							has_progress:true,
							rtl:false,
						});
						setTimeout(function(){window.location.reload();},1000);
					}
				else	
					{
						$("#submit-btn").html("Submit Feedback");
						$("#submit-btn").attr("onclick","submit_feedback()");
						$.Toast("", a.message, "error", {
							has_icon:false,
							has_close_btn:true,
							stack: true,
							fullscreen:true,
							timeout:2000,
							sticky:false,
							has_progress:true,
							rtl:false,
						});
					}								
			},
			error: function() 
			{
			} 	        
	   });
	}

//Submit Contact Detail
function submit_contact_detail()
	{
		
		$("#submit-btn").html("<i class='fa fa-spin fa-spinner'></i> &nbsp;Please Wait....");
		$("#submit-btn").removeAttr("onclick");
		var Form=$('#contact-form')[0];
		$.ajax({
			url: "ajax/submit-contact.php",
			type: "POST",
			data:  new FormData(Form),
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
			{
				var a=JSON.parse(data);
				if(a.status=='Success')
					{
						$.Toast("", a.message, "success", {
							has_icon:false,
							has_close_btn:true,
							stack: true,
							fullscreen:true,
							timeout:2000,
							sticky:false,
							has_progress:true,
							rtl:false,
						});
						setTimeout(function(){window.location.reload();},1000);
					}
				else	
					{
						$("#submit-btn").html("Submit Feedback");
						$("#submit-btn").attr("onclick","submit_contact_detail()");
						$.Toast("", a.message, "error", {
							has_icon:false,
							has_close_btn:true,
							stack: true,
							fullscreen:true,
							timeout:2000,
							sticky:false,
							has_progress:true,
							rtl:false,
						});
					}								
			},
			error: function() 
			{
			} 	        
	   });
	}
	
	
//Return Order
function return_order()
	{
		$("#return-btn").html("<i class='fa fa-spin fa-spinner'></i>&nbsp;Please Wait....");
		var Form=$('#return-form')[0];
		$.ajax({
			url: "ajax/return-add.php",
			type: "POST",
			data:  new FormData(Form),
			contentType: false,
			cache: false,
			processData:false,
			success: function(data)
			{
				var a=JSON.parse(data);
				if(a.status=='Success')
					{
						$("#return-btn").html("Success");
						$.Toast("", a.message, "success", {
							has_icon:false,
							has_close_btn:true,
							stack: true,
							fullscreen:true,
							timeout:2000,
							sticky:false,
							has_progress:true,
							rtl:false,
						});
						window.location.href="return-success.php";
					}
				else	
					{
						$("#return-btn").html("Submit");
						$.Toast("", a.message, "error", {
							has_icon:false,
							has_close_btn:true,
							stack: true,
							fullscreen:true,
							timeout:2000,
							sticky:false,
							has_progress:true,
							rtl:false,
						});
					}								
			},
			error: function() 
			{
			} 	        
	   });
	}

//Search Products

function search_products()
    {
        var category_id=$("#search_category_id").val();
        var search_text=$("#search_text").val();
        if(category_id!=null)
            {
                window.location.href="search-product.php?search_category_id="+category_id+"&search_text="+search_text;
            }
        else
            {
                window.location.href="search-product.php?search_text="+search_text;
            }
    }
 
 