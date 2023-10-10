$(window).load(function(){

storage = new window.Basil({namespace: '',storages: ['local']}); //cookie

var lng = navigator.browserLanguage || navigator.language || navigator.userLanguage;


if(storage.get('lenta')==null){storage.set('lenta', "<marquee behavior='scroll' direction='left'><div style='width: max-content;'><lenta>Try the new Film Grain feature!</lenta></marquee>")}


if(storage.get('transformx')==null){storage.set('zakladki1', '0');storage.set('zakladki2', '100');storage.set('zakladki3', '100');storage.set('zakladki4', '100');;storage.set('zakladki5', '0');storage.set('zakladki6', '0');storage.set('night','invert(0%) hue-rotate(0deg)');storage.set('zakladki7', '1');storage.set('zakladki8', '1');storage.set('zakladki9', '0');storage.set('zakladki10', '3');storage.set('zakladki11', '1');storage.set('zakladki12', '1');storage.set('zakladki13', '1');;storage.set('set_video', 'video');storage.set('transformx','transition: 0.5s;')}

if(storage.get('lang')==null){storage.set('lang', 'SHARPNESS,CONTRAST,BRIGHTNESS,SATURATION,SEPIA,CRAZY MIRROR,ON,OFF,ClEAR,SPEED,GAMMA,RADIUS,STRENGTH,RED,GREEN,BLUE,ADVANCED,COLOR BALANCE')}else{
if(storage.get('lang').split(',')[17]==undefined){storage.set('lang', 'SHARPNESS,CONTRAST,BRIGHTNESS,SATURATION,SEPIA,CRAZY MIRROR,ON,OFF,ClEAR,SPEED,GAMMA,RADIUS,STRENGTH,RED,GREEN,BLUE,ADVANCED,COLOR BALANCE')}
}

//Cookies.set('foo', 'bar')
//alert(Cookies.get('foo'))


$('body').prepend('<div class="setup_options"><div class="setup_options_wraper"></div><div class="setup_options_wraper2"><div class="setup_sharp1"></div><div class="my_block">'+storage.get('lang').split(',')[16]+'</div><div class="setup_sharp"></div><div class="my_block">'+storage.get('lang').split(',')[17]+'</div><div class="setup_color"></div></div><div class="setup_wraper"><div id="setup_off" class="setup_off">'+storage.get('lang').split(',')[6]+'</div><div id="setup_reset" class="setup_off">'+storage.get('lang').split(',')[8]+'</div><br><br><div id="set_video" class="set">VIDEO</div><div id="set_image" class="set">IMAGE</div><div id="set_iframe" class="set">CANVAS</div><div id="set_page" class="set">PAGE</div></div>\
<div id="ru" class="lang">ru</div><div id="en" class="lang">en</div><a href="" target="_blank"><div id=""></div></a><div id="effect1" class="effect"></div><div id="find" class="effect"></div><div id="transformx" class="effect"></div><div id="Win" class="effect"></div></div>\
<div class="lenta">'+storage.get('lenta')+'</div></div>')


$(document).on('click','#set_image',function() {
	if(storage.get('set_image')!=null){$('#set_image').css('background',''); storage.set('set_image', null);set()} else{$('#set_image').css('background','#b10000'); storage.set('set_image', 'img,[style*="url"]');set()}	
})
$(document).on('click','#set_video',function() {
	if(storage.get('set_video')!=null){$('#set_video').css('background',''); storage.set('set_video', null);set()} else{$('#set_video').css('background','#b10000'); storage.set('set_video', 'video');set()}	
})
$(document).on('click','#set_iframe',function() {
	if(storage.get('set_iframe')!=null){$('#set_iframe').css('background',''); storage.set('set_iframe', null);set()} else{$('#set_iframe').css('background','#b10000'); storage.set('set_iframe', 'object[type="application/x-shockwave-flash"],object[src],embed[type="application/x-shockwave-flash"],embed[src],canvas');set()}	
})
$(document).on('click','#set_page',function() {
	if(storage.get('set_page')!=null){$('#set_page').css('background',''); storage.set('set_page', null);set()} else{$('#set_page').css('background','#b10000'); storage.set('set_page', 'body');set()}	
})

function marquee(){if(storage.get('marquee')==1 && storage.get('marquee2')==1 ){$("marquee").css("display", "none")}}

$(document).on('click','#Video_stars',function() {storage.set('marquee',1)
marquee()
})
$(document).on('click','.share',function() {storage.set('marquee2',1)
marquee()
})
marquee()



$(document).on('click','#effect1',function() {effect()})
$(document).on('click','#find',function() {finding()})
$(document).on('click','#transformx',function() {if(storage.get('transformx')!='transform:scalex(-1);transition: 0.5s;'){storage.set('transformx','transform:scalex(-1);transition: 0.5s;');set()}else{storage.set('transformx','transition: 0.5s;');set()}	})
$(document).on('click','#Win',function() {Win()})

if(storage.get('set_image')!=null){$('#set_image').css('background','#b10000')}
if(storage.get('set_video')!=null){$('#set_video').css('background','#b10000')}
if(storage.get('set_iframe')!=null){$('#set_iframe').css('background','#b10000')}
if(storage.get('set_page')!=null){$('#set_page').css('background','#b10000')}

function Win(){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {Win: ''}//, function(response) {}
		  );
        })		
	}

function set(x1,x2,x3){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {settings: '.Video_Control'+','+storage.get('set_image')+','+ storage.get('set_video')+','+ storage.get('set_iframe') +','+ storage.get('set_page') +'{filter: contrast(' + storage.get("zakladki2")+'%)'+ 'brightness('+ storage.get("zakladki3")+'%)'+ 'saturate('+ storage.get("zakladki4")+'%)' + 'sepia('+ storage.get("zakladki5")+'%) url(#Sharpen'+storage.get('zakladki1')+') url(#MIRROR'+storage.get('zakladki6')+ ') url(#Video_Control_Gamma) url(#my_chanel) url(#unsharpy) !important;'+storage.get('transformx')+'}'}//, function(response) {}
		  )
        })
}

function set_off(x1,x2,x3){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {settings: '.Video_Control'+','+storage.get('set_image')+','+ storage.get('set_video')+','+ storage.get('set_iframe') +'{filter: contrast(100%)brightness(100%)saturate(100%)sepia(0%) url(#Sharpen0) url(#MIRROR0) !important;transform:scalex(1);transition: 0.5s;}'}//, function(response) {}
		  );
        })
}

function donate(){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {donate: ''}//, function(response) {}
		  );
        })		
	}

function share(){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {share: ''}//, function(response) {}
		  );
		})		
		}
		
	
function effect(){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {effect1: ''}//, function(response) {}
		  );
        })		
	}
	
function finding(){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {finding: 'qqq'}//, function(response) {}
		  );
        })
	}
function night(x){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {night: x}//, function(response) {}
		  );
        })
	}
	
	function pitch(x){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {pitch: storage.get('zakladki7')}//, function(response) {}
		  );
        })
	}
	
	function gamma(x){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {gamma: storage.get('zakladki8')}//, function(response) {}
		  );
        })
	}

	function sharp(x){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {sharp: storage.get('zakladki9'),sharp2: storage.get('zakladki10')}//, function(response) {}
				  );
				})
			}

	function my_chanel(x){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {my_red: storage.get('zakladki11'),my_green: storage.get('zakladki12'),my_blue: storage.get('zakladki13')}//, function(response) {}
						  );
						})
					}

	function insta(x){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {insta: '1'}//, function(response) {}
		  );
        })
	}
setTimeout(function(){insta()}, 2000);
	



//_OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK_
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ok(){
if(document.domain=='/ok.ru'){var doc='#vp_cnt'}else{var doc=document}

$(doc).on('click','.reset', function(){ 
	if($(this).attr("id")=="reset13"){var znachenie = 1}
	if($(this).attr("id")=="reset12"){var znachenie = 1}
	if($(this).attr("id")=="reset11"){var znachenie = 1}
	if($(this).attr("id")=="reset10"){var znachenie = 2}
	if($(this).attr("id")=="reset9"){var znachenie = 0}

	if($(this).attr("id")=="reset7"){var znachenie = 1}
	if($(this).attr("id")=="reset8"){var znachenie = 1}
	if($(this).attr("id")=="reset6"){var znachenie = 0}
	if($(this).attr("id")=="reset5"){var znachenie = 0}
	if($(this).attr("id")=="reset4"){var znachenie = 100}
	if($(this).attr("id")=="reset3"){var znachenie = 100}
	if($(this).attr("id")=="reset2"){var znachenie = 100}
	if($(this).attr("id")=="reset1"){var znachenie = 0}

	console.log($(this).next().attr("id"))
	console.log($(this).prev().attr("id"))
	$('#'+$(this).next().attr("id")).slider("value", znachenie);
	$('#'+$(this).prev().attr("id")).html(znachenie);
storage.set('zakladki'+$(this).attr("id").split("reset")[1], znachenie)
set()
pitch()
gamma()	
sharp()
my_chanel()
    })

 
/*$(doc).on('click','#setup_off', function(){if($("#settings").text()!=''){$("#settings").text('');set_off();$("#setup_off").text(storage.get('lang').split(',')[7])}
else{{$('#settings').text('video{filter: contrast(' + storage.get("zakladki2")+'%)'+ 'brightness('+ storage.get("zakladki3")+'%)'+ 'saturate('+ storage.get("zakladki4")+'%)' + 'sepia('+ storage.get("zakladki5")+'%) url(#Sharpen'+storage.get('zakladki1')+') url(#MIRROR'+storage.get('zakladki6')+') !important}'); $("#setup_off").text(storage.get('lang').split(',')[6]); set()}	}})*/

$(doc).on('click','#setup_off', function(){
if($("#setup_off").text()==storage.get('lang').split(',')[6]){set_off();$("#setup_off").text(storage.get('lang').split(',')[7])}
else{$("#setup_off").text(storage.get('lang').split(',')[6]); set()
}})

$(doc).on('click','#setup_reset',function(){set_off();
$("#slider1 .ui-state-default").css('left','0%');storage.set('zakladki1', 0)
  $("#slider2 .ui-state-default").css('left','0%');storage.set('zakladki2', 100)
    $("#slider3 .ui-state-default").css('left','25%');storage.set('zakladki3', 100)
      $("#slider4 .ui-state-default").css('left','50%');storage.set('zakladki4', 100)
        $("#slider5 .ui-state-default").css('left','0%');storage.set('zakladki5', 0)
		  $("#slider6 .ui-state-default").css('left','0%');storage.set('zakladki6', 0)
		  $("#slider9 .ui-state-default").css('left','0%');storage.set('zakladki9', 0);sharp()
		  $("#slider11 .ui-state-default").css('left','50%');storage.set('zakladki11', 1);my_chanel()
		  $("#slider12 .ui-state-default").css('left','50%');storage.set('zakladki12', 1);my_chanel()
		  $("#slider13 .ui-state-default").css('left','50%');storage.set('zakladki13', 1);my_chanel()
		  $('#slider7').slider("value", 1);$( "#contentSlider7").html(1);
		  $('#slider8').slider("value", 1)
          storage.set('zakladki7', 1);pitch()
		  storage.set('zakladki8', 1);gamma()
		  storage.set('transformx','transform:scalex(1);transition: 0.5s;');
})

$(doc).on('click','.lang',function() {if($(this).attr('id')=='ru'){storage.set('lang', 'РЕЗКОСТЬ,КОНТРАСТ,ЯРКОСТЬ,НАСЫШЕННОСТЬ,СЕПИЯ,КРИВОЕ ЗЕРКАЛО,ВКЛ,ВЫКЛ,СБРОС,СКОРОСТЬ,ГАММА,РАДИУС,СИЛА,КРАСНЫЙ,ЗЕЛЕНЫЙ,СИНИЙ,РЕЗКОСТЬ +,БАЛАНС ЦВЕТОВ');$('.setup_options_wraper, .setup_color, .setup_sharp, .setup_sharp1').empty();run()

storage.set('lenta', "<marquee behavior='scroll' direction='left'><div style='width: max-content;'><lenta>Try the new Film Grain feature!</lenta></marquee>")

$('.my_block').eq(0).text(storage.get('lang').split(',')[16])
$('.my_block').eq(1).text(storage.get('lang').split(',')[17])
$('.lenta').html(storage.get('lenta'))
if($("#settings").text()!=''){$("#setup_off").text(storage.get('lang').split(',')[6])}else{$("#setup_off").text(storage.get('lang').split(',')[7])};$("#setup_reset").text(storage.get('lang').split(',')[8])
}
else{storage.set('lang', 'SHARPNESS,CONTRAST,BRIGHTNESS,SATURATION,SEPIA,CRAZY MIRROR,ON,OFF,ClEAR,SPEED,GAMMA,RADIUS,STRENGTH,RED,GREEN,BLUE,ADVANCED,COLOR BALANCE');$('.setup_options_wraper, .setup_color, .setup_sharp, .setup_sharp1').empty();run()

storage.set('lenta', "<marquee behavior='scroll' direction='left'><div style='width: max-content;'><lenta>Try the new Film Grain feature!</lenta></marquee>")

$('.my_block').eq(0).text(storage.get('lang').split(',')[16])
$('.my_block').eq(1).text(storage.get('lang').split(',')[17])
$('.lenta').html(storage.get('lenta'))
if($("#settings").text()!=''){$("#setup_off").text(storage.get('lang').split(',')[6])}else{$("#setup_off").text(storage.get('lang').split(',')[7])};$("#setup_reset").text(storage.get('lang').split(',')[8])
}
})
}


//_OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK__OK_
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
ok()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function seting(number,text, kuda, m1 ,m2,m3){
	if(kuda==''){var kuda='.setup_options';}
$(kuda).prepend('\
<span id="contentSlider'+ number + '" class="contentSlider"></span>\
<div id="slider'+ number +'" class="slider"><name>'+ text + '</name></div>\
	  ')
	  
	  if(m1==undefined){var m1=0;var m2=100;}
	  if(m3==undefined){var m3=1}

set()
pitch()	
gamma()	
sharp()
my_chanel()	
  $( "#slider" + number ).slider({
//orientation: horizontal,
value : storage.get("zakladki"+ number),//Значение, которое будет выставлено слайдеру при загрузке
  min : m1,//Минимально возможное значение на ползунке
  max : m2,//Максимально возможное значение на ползунке
  step : m3,//Шаг, с которым будет двигаться ползунок
  create: function( event, ui ) {
   val = $( "#slider" + number ).slider("value");//При создании слайдера, получаем его значение в перемен. val
  $( "#contentSlider" + number ).html( val );//Заполняем этим значением элемент с id contentSlider
  $( "#contentSlider" + number ).after('<div class="reset" id="reset'+number+'"></div>')
  },
 slide: function( event, ui ) {
  $( "#contentSlider" + number ).html( ui.value );//При изменении значения ползунка заполняем элемент с id contentSlider
	storage.set('zakladki'+ number, ui.value)
	

set()
pitch()
gamma()	
sharp()
my_chanel()
$("#setup_off").text(storage.get('lang').split(',')[6])

}					  
});
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function run(){
/*seting(8,'radius','.setup_options_wraper',0,10,0.01)
seting(7,'radius','.setup_options_wraper',0,2,0.01)*/
seting(13,storage.get('lang').split(',')[15],'.setup_color',.7,1.3,0.01)
seting(12,storage.get('lang').split(',')[14],'.setup_color',.7,1.3,0.01)
seting(11,storage.get('lang').split(',')[13],'.setup_color',.7,1.3,0.01)
seting(10,storage.get('lang').split(',')[12],'.setup_sharp',1,6,0.01)
seting(9,storage.get('lang').split(',')[11],'.setup_sharp',0,5,0.01)
seting(1,storage.get('lang').split(',')[0],'.setup_sharp1',0,3)
seting(7,storage.get('lang').split(',')[9],'.setup_options_wraper',0.1,4,0.1)
seting(8,storage.get('lang').split(',')[10],'.setup_options_wraper',0.5,1.5,0.01)
seting(6,storage.get('lang').split(',')[5],'.setup_options_wraper',0,4)
seting(5,storage.get('lang').split(',')[4],'.setup_options_wraper',0,100)
seting(4,storage.get('lang').split(',')[3],'.setup_options_wraper',0,200)
seting(3,storage.get('lang').split(',')[2],'.setup_options_wraper',50,250)
seting(2,storage.get('lang').split(',')[1],'.setup_options_wraper',100,200)
}
run()
//alert(lng)
	
		chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {		
if (request.keydun != undefined){storage.set('zakladki7',request.keydun)
	console.log(request.keydun)
	pitch()
								 };
});

 


	
})