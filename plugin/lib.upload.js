var ueditorConfig = document.createElement('script');
$(ueditorConfig).attr('src',bloghost + 'zb_users/plugin/UEditor/ueditor.config.php');
$("body").append(ueditorConfig);

var ueditorAll = document.createElement('script');
$(ueditorAll).attr('src',bloghost + 'zb_users/plugin/UEditor/ueditor.all.min.js');
$("body").append(ueditorAll);

var container = document.createElement('script');
$(container).attr('type','text/plain').attr('id','img_editor').css('display','none');
$("body").append(container);

ue_image = UE.getEditor('img_editor');
ue_image.ready(function(){
	var input_object = $(this).prev().attr("class");
	$(document).on("click",".ue-image-upload",function(){		
		input = $(this).siblings('input.ue-url');
		img = $(this).siblings('img.ue-image');
		ue_image.getDialog("insertimage").open();
		ue_image.addListener('beforeInsertImage', function (t, arg) {
			input.attr("value", arg[0].src);
			img.attr('src',arg[0].src); 
		});
	});
	$(document).on("blur","input.".concat(input_object),function(){	
	    if ($(this).val())
	    $(this).siblings('img.ue-url').attr('src',$(this).val());
	});
});