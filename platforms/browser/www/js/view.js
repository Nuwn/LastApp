function loadView(string) {  
    this.string = string;  
    this.load = function(){
        //start load function
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status === 200 || this.status === 0){
                    document.getElementById("app").innerHTML = this.responseText;
                    //stop load function
                } else {
                    
                }
            }
        };
        xhttp.open("GET", "templates/"+string+".html", true);
        xhttp.send();
        history.pushState({view: "templates/"+string}, string);    
    };
}

//when the document is loaded we check the hash if its refreshed, or if its a new instance we go to default template
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

// Adds an eventlistner on window to check whether the url changes with # 
window.addEventListener("hashchange", hashChange);
function hashChange() {
    var view;
    if(location.hash.slice(1) !== ''){
        view = new loadView(location.hash.slice(1));
        view.load();
    } else {
        view = new loadView("home");
        view.load();
    }
}
