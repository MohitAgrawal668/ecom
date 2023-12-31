//Add Main Image
$(function() {
    // Multiple images preview in browser
    var mainimagesPreview = function(input, placeToInsertImagePreview) {
		
        if (input.files) {
			$(".main_image").html("");	
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function(event) {
                    $($.parseHTML('<img class="img-thumbnail img-responsive" style="width:100%;">')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#main_image').on('change', function() {
        mainimagesPreview(this, 'div.main_image');
    });
});


$(function() {
    // Multiple images preview in browser
    var imagesPreview = function(input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function(event) {
                    $($.parseHTML('<img class="img-thumbnail img-responsive" style="width:100%;height:300px;object-fit:contain;">')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#gallery-photo-add').on('change', function() {
        imagesPreview(this, 'div.gallery');
    });
});

var product={
	
	"select_image":function()
		{
			$("#main_image").click();
		},
	"save":function()
		{
			if(confirm("Sure ! You want to save this product"))
				{
					$("#description").val(CKEDITOR.instances.description.getData());
					$("#submit").click();
				}
		},
	"update":function()
		{
			if(confirm("Sure ! You want to Update this product"))
				{
					$("#description").val(CKEDITOR.instances.description.getData());
					$("#submit").click();
				}
		},
	'delete_image':function(i)
		{
			var images = $("#gallery_photo_remove").val();
			var image = $("#gallery_photo_input"+i).val();
			var image2 = images+","+image;
			$("#gallery_photo_remove").val(image2);
			$("#gallery_photo"+i).remove();
		}	
}
