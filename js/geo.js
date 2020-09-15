var loc=document.getElementById('loc');
var x = document.getElementById("demo");
var ct=document.getElementById('city');
var wn=document.getElementById('wn');
var tem=document.getElementById('temp');
var subb=document.getElementById('subb');
var cityname=document.getElementById('cityname');
var body=document.getElementById('app');
var feel=document.getElementById('feel');
var minmax=document.getElementById('minmax');
var humid=document.getElementById('humid');
var press=document.getElementById('press');
var mobile=document.getElementById('mobile');
var extra=document.getElementById('extra');

var no=0;
mobile.addEventListener('click',function(){
	if(no%2==0){

extra.style.display="block";
	mobile.style.left="50%";
}
else {extra.style.display="none";
mobile.style.left="-10%";
}

no=no+1;
});

subb.addEventListener('click',function(e){
e.preventDefault();
console.log(cityname.value);
help('','',cityname.value);
cityname.value='';
});


loc.addEventListener('click',function(){

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
   
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

});


function showPosition(position) {
  var lat= position.coords.latitude ;
  var lon=position.coords.longitude;
    help(lat,lon,'');

}



function help(lati,longi,cityname)
{var proxy='https://cors-anywhere.herokuapp.com/';
if(cityname!=''){
var url=`${proxy}api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=eb5c8ad91c4f12c4707268ae8ccd67ad`;
}
else{
	var url=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=eb5c8ad91c4f12c4707268ae8ccd67ad`;
}
	$.get(url,function(data){

console.log(data);


tem.innerHTML= (data.main.temp-272.15).toFixed(1)+" C";
ct.innerHTML=data.name;
wn.innerHTML=data.weather[0].main;
feel.innerHTML= (data.main.feels_like-272.15).toFixed(1)+" C";
minmax.innerHTML=(data.main.temp_min-272.15).toFixed(1)+" / "+(data.main.temp_max-272.15).toFixed(1)+" C";
humid.innerHTML=(data.main.humidity)+" %";
press.innerHTML=((data.main.pressure)*(0.75006157584566)).toFixed(1)+"mm Hg";

$('#icon i').remove();

if(data.weather[0].main=='Rain'){
	$('#icon').append('<i class="fas fa-cloud-showers-heavy"></i>');
body.style.backgroundImage="url('http://commoncelebrity.com/wp-content/uploads/2016/07/11052016085806Monsoon-copy-1000x0.jpg')";
}

if(data.weather[0].main=='Haze'){
	$('#icon').append('<i class="fas fa-smog"></i>');
body.style.backgroundImage="url('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAcub1.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg')";
}
if(data.weather[0].main=='Thunderstorm'){
	$('#icon').append('<i class="fas fa-bolt"></i>');
body.style.backgroundImage="url('https://myradar.com/static/background-553feb780990ed5e9c8b39945e414602.jpg')";
}
if(data.weather[0].main=='Sunny'||data.weather[0].main=='Clear'){
	$('#icon').append('<i class="far fa-sun"></i>');
body.style.backgroundImage="url('https://www.travelalerts.ca/wp-content/uploads/2016/08/sunny_vacationspots.jpg')";
}
if(data.weather[0].main=='Clouds'){
	$('#icon').append('<i class="fas fa-cloud-sun"></i>');
body.style.backgroundImage="url('https://www.farmersalmanac.com/wp-content/uploads/2011/09/Clouds-Predict-Local-Weather-i861387936.jpg')";
}
	
	});

}
  


