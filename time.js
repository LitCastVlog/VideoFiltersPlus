$(window).load(function(){

	
storage = new window.Basil({namespace: '',storages: ['local']}); //cookie
if(storage.get("время")==null){}
if(storage.get("время")!=5){
setInterval(function() {
	if(storage.get("время")<5){storage.set("время", Number(storage.get("время"))+1)}else{console.log('прошло 5 минут! ')}
}, 60000);
}	
})