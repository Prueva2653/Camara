var contador =0;
var aux = true;


function funcGuay(){
      contador+=1;

       if(contador==1){
           document.getElementById("img1").style.width="100%";


       }else if(contador>=2){

            document.getElementById("img1").style.width="30%";

       }

};

function sacarFoto(){

navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
destinationType: Camera.DestinationType.FILE_URI });



};
    function onSuccess(imageURI) {

    var image = document.getElementById('img1');
    image.style.display = 'block';
    navigator.vibrate(1000);
    alert("Foto guardada");
    image.src = imageURI;



};
       function onFail(message) {
    alert('Failed because: ' + message);
};


var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

        onDeviceReady: function() {
        app.receivedEvent('deviceready');
        var td1 = document.getElementById('device');
        var td2 = document.getElementById('platform');
        var dev = device.model;
        var plat =device.platform;
        td1.innerHTML = dev;
        td2.innerHTML = plat;
    },

    onBatteryStatus: function(status){
    var td1 = document.getElementById('percent');
    var td2 = document.getElementById('conection');
        var porcentaje = status.level+"%";
        td1.innerHTML=porcentaje;
    if(status.level==100){
        navigator.vibrate(1000);
        alert('Carga Completada');
    }

    var si = "SI";
    var no = "NO";

    var enchufado = status.isPlugged;
    if (enchufado == true){

    td2.innerHTML = si;
    navigator.vibrate(1000);
    }else{
    td2.innerHTML = no;
    }

},
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        window.addEventListener("batterystatus",this.onBatteryStatus,false);




    }
};
