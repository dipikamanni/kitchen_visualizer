jQuery('document').ready(function($){
	var plugin_url = $('#plugin_url').val();
	$('#get_started').on('click',function(){
		$('#first').hide();
		$('#second').fadeIn();
		$('.sec-heading').fadeIn();
		localStorage.removeItem("wall-cabinet");
		localStorage.removeItem("base-cabinet");
		localStorage.removeItem("counter-top");
	});
	$('#go_back_first').on('click', function(){				
		$('#second').fadeOut();
		$('.sec-heading').fadeOut();
		$('#first').fadeIn();
	});
	$('#go_back_second').on('click', function(){
		$('#l-shape-k').fadeOut();
		$('#second').fadeIn();
		$('.sec-heading').fadeIn();
	});
	$('#go_back_third').on('click',function(){
		var txt;
		var r = confirm("Are you sure to leave!");
		if (r == true) {
		    window.location.href = '';
		}
	});
	$('input[name=fav_language]').on('click',function(){
		var kitchen_shape = $("input[name='fav_language']:checked").val();
		if(kitchen_shape == 'l-shape-k'){
			$('#second').hide();
			$('.sec-heading').hide();
			$('#l-shape-k').fadeIn();
			localStorage.setItem('shape_type','l-shape');
		}else if(kitchen_shape == 'u-shape-k'){
			$('#second').hide();
			$('.sec-heading').hide();
			$('#u-shape-k').fadeIn();
			localStorage.setItem('shape_type','u-shape');
		}else if(kitchen_shape == 'li-shape-k'){
			$('#second').hide();
			$('.sec-heading').hide();
			$('#li-shape-k').fadeIn();
			localStorage.setItem('shape_type','li-shape');
		}
	});
	$('.shape-image img').on('click',function(){
		$('.shape-image').hide();
		$('#final-stage').fadeIn();
		var get_src = $(this).attr('src');
		var result = $(this).attr('id');
		result = result.split('-')[0];
		var map_coordinates = `<map name="image-map">
		    <area target="" alt="Wall Cabinet" title="Wall Cabinet" onclick="jQuery('#wall-cab').trigger('click');" coords="1,104,42,104,306,125,306,135,440,142,803,0,1017,1,1019,141,1014,147,1006,273,963,271,959,256,698,264,696,279,640,282,631,275,551,276,546,268,497,266,493,276,306,277,304,236,165,232,164,181,3,176,1,104" shape="poly" style="cursor: pointer;">
		    <area target="" alt="Counter top" title="Counter top" onclick="jQuery('#counter-top').trigger('click');" coords="1,375,10,374,13,428,53,427,54,372,76,374,94,372,215,368,369,472,363,484,1,509,0,389" shape="poly" style="cursor: pointer;">
		    <area target="" alt="Base Cabinet" title="Base Cabinet" onclick="jQuery('#base-cab').trigger('click');" coords="300,355,299,425,370,473,407,471,748,678,751,434,887,465,889,708,1015,708,1008,492,416,353" shape="poly" style="cursor: pointer;">
		    <area target="" alt="Counter" title="Counter top 2" onclick="jQuery('#counter-top').trigger('click');" coords="417,354,1007,492,1005,428,466,343,307,344,303,354" shape="poly" style="cursor: pointer;">
		</map>`;
		var content = `<img id="`+result+`" src="`+get_src+`" usemap="#image-map" class="map" />`;				
		$('#final-stage .main_image_map h2').after(content);
		$('#final-stage .main_image_map h2').after(map_coordinates);
		$('.map').maphilight();
	});
	$('#wall-cab').on('click',function(){
		$('.exit-poup-code-wrap').fadeIn();
	});
	$('#base-cab').on('click',function(){
		$('.exit-poup-code-wrap-base-cabinet').fadeIn();
	});	
	$('#counter-top').on('click',function(){
		$('.exit-poup-code-wrap-counter-top').fadeIn();
	});			
	$('.popup_exit_close').on('click',function(){
		$('.exit-poup-code-wrap').fadeOut();
		$('.exit-poup-code-wrap-base-cabinet').fadeOut();
		$('.exit-poup-code-wrap-counter-top').fadeOut();
		$('.exit-poup-code-wrap').fadeOut();
	});
	$('.exit-poup-code-wrap img').on('click',function(){
		$('.page-loader').fadeIn('slow');
		setTimeout(function(){ // allowing 4 secs to fade out loader
		$('.page-loader').fadeOut('slow');
		},4500);
		var get_id = $(this).attr('id');
		var result = get_id.split('-')[1];				
		var get_kitch_id = $('.main_image_map img').attr('id');
		var wall_cabin = localStorage.getItem("wall-cabinet");
		var base_cabin = localStorage.getItem("base-cabinet");
		var counter_top = localStorage.getItem("counter-top");
		var shape = localStorage.getItem("shape_type");
		console.log(shape);

		wall =  "cabinet-"+result;
		base =  base_cabin === null ? '' : base_cabin;
		counter = counter_top === null ? '' : counter_top;
		var pro_src = plugin_url+"product/"+shape+"/"+get_kitch_id+"-Kitchen/"+wall+base+counter+".jpg";
		if(wall != '' && base != ''){
			var pro_src = plugin_url+"product/"+shape+"/"+get_kitch_id+"-Kitchen/"+wall+"-"+base+".jpg";
		}
		if(wall != '' && counter != ''){
			var pro_src = plugin_url+"product/"+shape+"/"+get_kitch_id+"-Kitchen/"+wall+"-"+counter+".jpg";
		}
		if(counter != '' && wall != '' && base != ''){
			var pro_src = plugin_url+"product/"+shape+"/"+get_kitch_id+"-Kitchen/"+wall+"-"+base+"-"+counter+".jpg";
		}
		$('.map').remove();
		var content = `<img id="`+get_kitch_id+`" src="`+pro_src+`" usemap="#image-map" class="map" />`;
		$('#final-stage .main_image_map h2').after(content);
		$('.map').maphilight();
		$('.exit-poup-code-wrap').fadeOut();
		localStorage.setItem("wall-cabinet", "cabinet-"+result);
	});
	$('.exit-poup-code-wrap-base-cabinet img').on('click',function(){
		$('.page-loader').fadeIn('slow');
		setTimeout(function(){ // allowing 4 secs to fade out loader
		$('.page-loader').fadeOut('slow');
		},4500);
		var get_id = $(this).attr('id');
		var result = get_id.split('-')[1];				
		var get_kitch_id = $('.main_image_map img').attr('id');
		// Check if wall cabinet is selcted or not
		var wall_cabin = localStorage.getItem("wall-cabinet");
		var counter_top = localStorage.getItem("counter-top");
		var base_cabin = localStorage.getItem("base-cabinet");
		var shape = localStorage.getItem("shape_type");
		console.log(shape);

		wall =  wall_cabin === null ? '' : wall_cabin;
		base =  "base-cabinet-"+result;
		counter = counter_top === null ? '' : counter_top;
		var pro_src = plugin_url+"product/"+shape+"/"+get_kitch_id+"-Kitchen/"+wall+base+counter+".jpg";

		if(wall != ''){
			var pro_src = plugin_url+"product/"+shape+"/"+get_kitch_id+"-Kitchen/"+wall+"-"+counter+".jpg";
		}
		if(wall != '' && base != ''){
			var pro_src = plugin_url+"product/"+shape+"/"+get_kitch_id+"-Kitchen/"+wall+"-"+base+".jpg";
		}
		if(base != '' && counter != ''){
			var pro_src = plugin_url+"product/"+shape+"/"+get_kitch_id+"-Kitchen/"+base+"-"+counter+".jpg";
		}
		if(counter != '' && wall != '' && base != ''){
			var pro_src = plugin_url+"product/"+shape+"/"+get_kitch_id+"-Kitchen/"+wall+"-"+base+"-"+counter+".jpg";
		}				
		
		$('.map').remove();
		var content = `<img id="`+get_kitch_id+`" src="`+pro_src+`" usemap="#image-map" class="map" />`;
		$('#final-stage .main_image_map h2').after(content);
		$('.map').maphilight();
		$('.exit-poup-code-wrap-base-cabinet').fadeOut();
		localStorage.setItem("base-cabinet", "base-cabinet-"+result);
	});
	$('.exit-poup-code-wrap-counter-top img').on('click',function(){
		$('.page-loader').fadeIn('slow');
		setTimeout(function(){ // allowing 4 secs to fade out loader
		$('.page-loader').fadeOut('slow');
		},4500);
		var get_id = $(this).attr('id');
		var result = get_id.split('-')[1];				
		var get_kitch_id = $('.main_image_map img').attr('id');

		var wall_cabin = localStorage.getItem("wall-cabinet");
		var base_cabin = localStorage.getItem("base-cabinet");
		var counter_top = localStorage.getItem("counter-top");
		var shape = localStorage.getItem("shape_type");

		wall =  wall_cabin === null ? '' : wall_cabin+'-';
		base =  base_cabin === null ? '' : base_cabin+'-';
		counter = "counter-"+result;
		var pro_src = plugin_url+"product/"+shape+"/"+get_kitch_id+"-Kitchen/"+wall+base+counter+".jpg";
	
		$('.map').remove();
		var content = `<img id="`+get_kitch_id+`" src="`+pro_src+`" usemap="#image-map" class="map" />`;
		$('#final-stage .main_image_map h2').after(content);
		$('.map').maphilight();
		$('.exit-poup-code-wrap-counter-top').fadeOut();
		localStorage.setItem("counter-top", "counter-"+result);
	});
});