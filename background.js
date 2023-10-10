
$(window).load(function(){
	
$('head').prepend('<link rel="stylesheet" type="text/css" href="'+ chrome.runtime.getURL('/css/style_background.css') +'">')
$('head').prepend('<link rel="stylesheet" type="text/css" href="'+ chrome.runtime.getURL('/js/jquery-ui-1.11.4/jquery-ui.css') +'">')
//$('head').prepend('<link rel="stylesheet" type="text/css" href="'+ chrome.runtime.getURL('/css/anekdot.css') +'">')

var video='video'
if(window.location.hostname=='www.youtube.com'){var video='.html5-video-player'}
if(window.location.hostname=='vimeo.com'){var video='.vp-video-wrapper'}
//alert(video)


storage = new window.Basil({namespace: '',storages: ['cookie']});


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
		
if (request.settings != undefined){	$('#Video_Control_settings').text(request.settings); storage.set('settings',request.settings)};
if (request.effect1 != undefined){
if($('#effect').length){$('#effect').remove()}else{	
//if($('#my_setup_iframe').css('display')=='block')
//{
	$('.Video_Control_icon').after('\<div id="effect"><iframe id="grain" width="100%" height="100%" src="https://player.vimeo.com/video/869874878?autoplay=1&loop=1&autopause=0&background=1&muted=1&color=ffffff&controls=0&portrait=0" frameborder="0" allowfullscreen="" ></iframe></div>')
//}
}
};
if (request.Win != undefined){if (document.pictureInPictureElement) { document.exitPictureInPicture() } else { $('video')[0].requestPictureInPicture()}}

if (request.finding != undefined){
$(document).on('mouseover.eee', function (e) {
  $(e.target).css('box-shadow', 'rgba(255, 0, 0, 0.49) 0px 0px 0px 4px inset').css('border', '').css('transition','0.3s').addClass("Video_Control");
  $(e.relatedTarget).css('box-shadow','').css('border', '').css('transition','0.3s').removeClass("Video_Control");
  $(e.target).on('click',function(){$(this).draggable({ containment: "document",scroll:true })})
  $(document).on('click',function(){$(document).off('mouseover.eee');chrome.runtime.sendMessage({greeting: "hello"}, function(response) {}) //;return false
  	}) 
})
}
if (request.off != undefined){$(document).off('mouseover.eee')}
	
if (request.pitch != undefined){//storage.set('pitch',request.pitch);
window.pitchSpeed=Number(request.pitch)

$('.Video_Control_icon').css('display','block')
!window.time||clearTimeout(time);
time=setTimeout(function (){if($('.Video_Control_icon').css('display')=='block'){$('.Video_Control_icon').css('display','none')}},2000);

for (var i = 0; i < $('video').length; i++) {//$('video')[i].playbackRate = request.pitch;
if(typeof pitchSpeed !=="undefined"){$('video,audio')[i].playbackRate = pitchSpeed;}
	
	/*if($('pitchspeed').length){$('pitchspeed').text("SPEED VIDEO " + pitchSpeed).css('display','block' ).fadeOut(2500 )}
	else{$('video').before("<pitchspeed>SPEED VIDEO "+ pitchSpeed +"</pitchspeed>")	}*/
	

 }
 }	
 
 if (request.gamma != undefined){
window.Video_Control_Gamma=request.gamma
//console.log(Video_Control_Gamma)
$('#w2,#w3,#w4').attr('exponent', Video_Control_Gamma); $('#Video_Control_Gamma').prependTo('#mysvg')
 }

 if (request.sharp != undefined){
	//window.Video_Control_Gamma=request.gamma
	var minus=1-request.sharp2
	
	$('#unsharpy').html('<feGaussianBlur id="sharp" result="blurOut2" in="SourceGraphic" stdDeviation="'+request.sharp+'"></feGaussianBlur><feComposite id="sharp2" operator="arithmetic" k1="0" k2="'+request.sharp2+'" k3="'+ minus +'" k4="0" in="SourceGraphic" in2="blurOut2"></feComposite>'); $('#unsharpy').prependTo('#mysvg')
	 }

if (request.my_blue != undefined){
	//window.Video_Control_Gamma=request.gamma
	var minus=1-request.sharp2
		
	$('#my_chanel').html('<feColorMatrix in="SourceGraphic" result="componentTransfer" type="matrix" values="\
	'+request.my_red+'  0  0  0  0 \
	0  '+request.my_green+'  0  0  0 \
	0  0  '+request.my_blue+'  0  0 \
	0  0  0  1  0">\
</feColorMatrix>\
<feBlend mode="color" in="componentTransfer" in2="SourceGraphic" result="blend"></feBlend>\
')
	}

	
		 if (request.insta != undefined){
 //$("body").prepend("rrr")
			
			// $(".FY9nT").children().click()
				// $('.wpO6b:eq(1)').click()
			 }
		
	
});

function setup(){
$('body').prepend('<style type="text/css" id="Video_Control_settings"></style>\
<svg id="mysvg" style="display: none;">\
<filter id="unsharpy"><feGaussianBlur id="sharp" result="blurOut2" in="SourceGraphic" stdDeviation="0"></feGaussianBlur><feComposite id="sharp2" operator="arithmetic" k1="0" k2="3" k3="-2" k4="0" in="SourceGraphic" in2="blurOut2"></feComposite></filter>\
<filter id="my_chanel"><feColorMatrix in="SourceGraphic" result="componentTransfer" type="matrix" values="\
               1  0  0  0  0 \
               0  1  0  0  0 \
               0  0  1  0  0 \
               0  0  0  1  0">\
</feColorMatrix>\
<feBlend mode="color" in="componentTransfer" in2="SourceGraphic" result="blend"></feBlend></filter>\
<filter id="Video_Control_Gamma">\
<feComponentTransfer in="SourceGraphic" result="h1">\
<feFuncA id="w1" type="linear" slope="1" intercept="0"></feFuncA>\
<feFuncR id="w2" type="gamma" amplitude="1" exponent="1" offset="0"></feFuncR>\
<feFuncG id="w3" type="gamma" amplitude="1" exponent="1" offset="0"></feFuncG>\
<feFuncB id="w4" type="gamma" amplitude="1" exponent="1" offset="0"></feFuncB>\
</feComponentTransfer>\
</filter>\
<filter id="Sharpen0"></filter>\
<filter id="Sharpen1"><feConvolveMatrix order="3 3" preserveAlpha="true" kernelMatrix="1 -1 1 -1 -2 -1 1 -1 1" mode="multiplay"></feConvolveMatrix></filter>\
<filter id="Sharpen2"><feConvolveMatrix order="3 3" preserveAlpha="true" kernelMatrix="1 -1 1 -1 -1 -1 1 -1 1" mode="multiplay"></feConvolveMatrix></filter>\
<filter id="Sharpen3"><feConvolveMatrix order="3 3" preserveAlpha="true" kernelMatrix="1 -1 1 -1 -.5 -1 1 -1 1" mode="multiplay"></feConvolveMatrix></filter>\
<filter id="MIRROR4" ><feMorphology radius="0" operator="dilate"/><feComponentTransfer><feFuncR type="table" tableValues="1 0.5"/></feComponentTransfer><feMerge result="text"><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>\
<feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="1" result="warp" />\
<feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="100" in="text" in2="warp"  /></filter>\
<filter id="MIRROR3" ><feMorphology radius="0" operator="dilate"/><feComponentTransfer><feFuncR type="table" tableValues="1 0.5"/></feComponentTransfer><feMerge result="text"><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>\
<feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="1" result="warp" />\
<feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="75" in="text" in2="warp"  /></filter>\
<filter id="MIRROR2" ><feMorphology radius="0" operator="dilate"/><feComponentTransfer><feFuncR type="table" tableValues="1 0.5"/></feComponentTransfer><feMerge result="text"><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>\
<feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="1" result="warp" />\
<feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="50" in="text" in2="warp"  /></filter>\
<filter id="MIRROR1" ><feMorphology radius="0" operator="dilate"/><feComponentTransfer><feFuncR type="table" tableValues="1 0.5"/></feComponentTransfer><feMerge result="text"><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>\
<feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="1" result="warp" />\
<feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="35" in="text" in2="warp"  /></filter>\
</filter></svg>\
<iframe id="my_setup_iframe" src="'+chrome.runtime.getURL('/iframe.html')+'"></iframe>\
')
}
setup()


jQuery(function($){
	$(document).mousedown(function (e){ // событие клика по веб-документу 
		var div = $("#my_setup_iframe"); // тут указываем ID элемента
		var div2 = $(".setup"); // тут указываем ID элемента

		if (!div.is(e.target) // если клик был не по нашему блоку
		    && !div2.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.css('opacity','0').css('display', 'none'); // скрываем его
			$('#my_setup_iframe').remove()
		}
		if (!div3.is(e.target) // если клик был не по нашему блоку
		    && div3.has(e.target).length === 0) { // и не по его дочерним элементам
			div4.css('display','none').remove(); // скрываем его
			//if(div3.length){$(gde_knopka).on().click();}
		}
	});
});		


$('video').parent().before('<div class="Video_Control_icon"><div id="Win" class="Video_Control_fullscreen"></div><button class="setup"></button><div class="my_speed"></div></div>')
	
	

$(document).on('click, mousedown','.setup',function(event) {event.stopImmediatePropagation();event.stopPropagation();event.preventDefault();
if($( "#my_setup_iframe" ).length){}else{$('body').prepend('<iframe id="my_setup_iframe" src="'+chrome.runtime.getURL('/iframe.html')+'"></iframe>')}	
if($( "#my_setup_iframe" ).css('opacity')=='0')
 {$( "#my_setup_iframe" ).css("opacity","1");$( "#my_setup_iframe" ).css('display', 'block'); $(this).parent().after($( "#my_setup_iframe" ))}
 else{$( "#my_setup_iframe" ).animate({opacity:0}, 200);$( "#my_setup_iframe" ).css('display', 'none');$('#my_setup_iframe').prependTo('body')}
 });
 
 $(document).on('click, mousedown','#Win',function(event) {event.stopImmediatePropagation();event.preventDefault()

if (document.pictureInPictureElement) { document.exitPictureInPicture() } else { $('video')[0].requestPictureInPicture()}
 });

function icon(kuda){	
$(document).on('hover',kuda,function(){if($(this).parent().find($(".setup")).length){}else{	
$(this).after('<div class="Video_Control_icon"><div class="Video_Control_fullscreen"></div><div class="setup"></div></div>');

$('.Video_Control_fullscreen').toggle( function(){ $(this).parent().prev().fullscreen()}, function() { $.fullscreen.exit()})
}

})
}
//icon("canvas")
icon("object")
icon("embed")



function mouse(){
var mx = 0;
var my = 0;	
$("video,canvas,object,embed").parent().parent().parent().on('mousemove', function(e) {
	//qqq.stopPropagation();
	var MX = e.screenX;	var MY = e.screenY;
    var dx = Math.abs(mx - MX);	var dy = Math.abs(my - MY);
    
    if (dx > 10 || dy > 10 ) {
        mx = MX; my = MY;

!window.time||clearTimeout(time);
time=setTimeout(function (){if($('.Video_Control_icon').css('display')=='block'){$('.Video_Control_icon').css('display','none')}},3000);
$('.Video_Control_icon').css('display','block')
        //console.log(mx);
    }
});

}
mouse()



$(document).arrive("video", function() {if($(this).parent().parent().find($(".setup")).attr('class')!='setup'){$(this).parent().after('<div class="Video_Control_icon"><div id="Win" class="Video_Control_fullscreen"></div><button class="setup"></button></div>')}

if($( "#my_setup_iframe" ).length){$('#my_setup_iframe').remove();$('body').prepend('<iframe id="my_setup_iframe" src="'+chrome.runtime.getURL('/iframe.html')+'"></iframe>')}

for (var i = 0; i < $('video').length; i++) {//$('video')[i].playbackRate = storage.get('pitch');
if(typeof pitchSpeed !=="undefined"){$('video,audio')[i].playbackRate = pitchSpeed;}
 }



 $(document).on('click, mousedown','.setup',function(event) {event.stopImmediatePropagation();event.stopPropagation();event.preventDefault();
if($( "#my_setup_iframe" ).length){}else{$('body').prepend('<iframe id="my_setup_iframe" src="'+chrome.runtime.getURL('/iframe.html')+'"></iframe>')}	
if($( "#my_setup_iframe" ).css('opacity')=='0')
 {$( "#my_setup_iframe" ).css("opacity","1");$( "#my_setup_iframe" ).css('display', 'block'); $(this).parent().after($( "#my_setup_iframe" ))}
 else{$( "#my_setup_iframe" ).animate({opacity:0}, 200);$( "#my_setup_iframe" ).css('display', 'none');$('#my_setup_iframe').prependTo('body')}}); 
setTimeout(function (){if($('.Video_Control_icon').css('display')=='block'){$('.Video_Control_icon').css('display','none')}},3000);
mouse()

  });


$(document).on('DOMSubtreeModified','video',function() {
	
		setTimeout(function (){
	if($( "#my_setup_iframe" ).length){$('#my_setup_iframe').remove();$('body').prepend('<iframe id="my_setup_iframe" src="'+chrome.runtime.getURL('/iframe.html')+'"></iframe>')} 
	for (var i = 0; i < $('video').length; i++) {//$('video')[i].playbackRate = storage.get('pitch');
	if(typeof pitchSpeed !=="undefined"){$('video,audio')[i].playbackRate = pitchSpeed;}
 }//document.querySelector('video').playbackRate = storage.get('pitch');
	},3000);
	})
	

/*
$(window).keyup(function(event){ if (event.keyCode == 46) {
	if($("#Video_Control_settings").text()!=''){$("#settings").text('');$("#setup_off").text(storage.get('lang').split(',')[7])}
else{$('#settings').text(storage.get('settings'))	}
	}
	})

$(window).keydown(function(event){
	if((event.ctrlKey) && (event.keyCode == 48)){if($('.setup').css('display')=='block'){$('.setup').css("cssText",'display:none !important')}else{$('.setup').css("cssText",'display:block !important')}  }
	$(document).on('hover',gde_knopka,function(){$('.setup').css("cssText",'display:block !important') })
})*/
	function keydun(x){
    chrome.runtime.sendMessage({keydun: Number(x.toFixed(1))}//, function response() {}
							  );
	}
	
	$(window).keydown(function(event){
    if(event.ctrlKey && event.which == 38) {
		if(pitchSpeed >=16){}else{
		keydun(Number(pitchSpeed + 0.1))
		event.stopImmediatePropagation();event.preventDefault()	
							}
    }
		if(event.ctrlKey && event.which == 40) {
			if(pitchSpeed <=0.1){}else{
		keydun(Number(pitchSpeed + -0.1))
		event.stopImmediatePropagation();event.preventDefault()
						}
    }
}); 

	



})

