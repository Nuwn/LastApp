function loadView(string) {  
    this.string = string;  
    this.load = function(){
        //start load function
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status === 200 || this.status === 0){
                    document.getElementById("app").innerHTML = this.responseText;
                    //stop load function }
                } else {
                   //stop load function } 
                }
            }
        };
        xhttp.open("GET", "templates/"+string+".html", true);
        xhttp.send();
        history.pushState({view: "templates/"+string}, string);    
    };
}

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var view;
    if(location.hash.slice(1)){
        view = new loadView(location.hash.slice(1));
        view.load(); 
    } else {
        view = new loadView("home");
        view.load();
    } 
}

$(window).bind('hashchange', function(e) {
    var view;
    if(location.hash.slice(1) !== ''){
        alert(location.hash.slice(1));
        view = new loadView(location.hash.slice(1));
        view.load();
    } else {
        view = new loadView("home");
        view.load();
    }
});