var geo_locations={
    "get_city":function()
		{
			var Form=$('#register-form')[0];
			$.ajax({
				url: "ajax/geo_locations/get-city.php",
				type: "POST",
				data:  new FormData(Form),
				contentType: false,
				cache: false,
				processData:false,
				success: function(data)
				{
					$("#city").html(data);								
				},
				error: function() 
				{
				} 	        
		   });
				
		},
	"get_city2":function()
		{
			var state=$("#state").val();
			$.ajax({
				url: "ajax/geo_locations/get-city.php?state="+state,
				type: "GET",
				data:  "",
				contentType: false,
				cache: false,
				processData:false,
				success: function(data)
				{
					$("#city").html(data);								
				},
				error: function() 
				{
				} 	        
		   });
				
		},	
	"get_vidhansabha":function()
		{
			var city=$("#city").val();
			$.ajax({
				url: "admin/ajax/geo_locations/get-vidhansabha.php?city="+city,
				type: "GET",
				data:  "",
				contentType: false,
				cache: false,
				processData:false,
				success: function(data)
				{
					$("#vidhansabha").html(data);								
				},
				error: function() 
				{
				} 	        
		   });
				
		},
	"get_blocks":function()
		{
			var vidhansabha=$("#vidhansabha").val();
			$.ajax({
				url: "admin/ajax/geo_locations/get-blocks.php?vidhansabha="+vidhansabha,
				type: "GET",
				data:  "",
				contentType: false,
				cache: false,
				processData:false,
				success: function(data)
				{
					$("#blocks").html(data);								
				},
				error: function() 
				{
				} 	        
		   });
				
		},
	"get_nyay_panchayat":function()
		{
			var blocks=$("#blocks").val();
			$.ajax({
				url: "admin/ajax/geo_locations/get-nyay-panchayat.php?blocks="+blocks,
				type: "GET",
				data:  "",
				contentType: false,
				cache: false,
				processData:false,
				success: function(data)
				{
					$("#nyay_panchayat").html(data);								
				},
				error: function() 
				{
				} 	        
		   });
				
		},
		
	"get_gram_panchayat":function()
		{
			var nyay_panchayat=$("#nyay_panchayat").val();
			$.ajax({
				url: "admin/ajax/geo_locations/get-gram-panchayat.php?nyay_panchayat="+nyay_panchayat,
				type: "GET",
				data:  "",
				contentType: false,
				cache: false,
				processData:false,
				success: function(data)
				{
					$("#gram_panchayat").html(data);								
				},
				error: function() 
				{
				} 	        
		   });
				
		},	
	"set_state_city":function()
		{
			var state=$("#state").val();
			var city=$("#city").val();
			var block=$("#block").val();
			var village=$("#village").val();
			$('#toast-1').toast('show');
			$.ajax({
				url: "ajax/geo_locations/set_state_city.php?state="+state+"&city="+city+"&block="+block+"&village="+village,
				type: "POST",
				data:  "",
				contentType: false,
				cache: false,
				processData:false,
				success: function(data)
				{
					$('#toast-1').toast('hide');
					window.location.reload();								
				},
				error: function() 
				{
				} 	        
		   });
		},
	"get_village_block":function()
		{
			var city=$("#city").val();
			$.ajax({
				url: "ajax/geo_locations/get-village-block.php?city="+city,
				type: "GET",
				data:  "",
				contentType: false,
				cache: false,
				processData:false,
				success: function(data)
				{
				    var a=data.split("@@@@@");
					$("#block").html(a[0]);
					$("#village").html(a[1]);
				},
				error: function() 
				{
				} 	        
		   });
				
		}	
		
}