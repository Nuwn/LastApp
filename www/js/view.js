function loadView(string) {  
    this.string = string;  
    this.loader = document.getElementById("loader");
    this.load = function(){
        //start loader
        loader.style.display = "flex";
        //get the page with ajax
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status === 200 || this.status === 0){
                    //display the template
                    document.getElementById("view").innerHTML = this.responseText;
                    runWhenURLMet();
                    //end loader
                    loader.style.display = "none";  
                } else {
                    //end loader
                    loader.style.display = "none";
                }
            }
        };
        xhttp.open("GET", "templates/"+string+".html", true);
        xhttp.send();  
    };
}

//when the document is loaded we check the hash if its refreshed, or if its a new instance we go to default template
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    var view;
    if(location.hash.slice(1)){
        view = new loadView(location.hash.slice(1).split("?")[0]);
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
        view = new loadView(location.hash.slice(1).split("?")[0]);
        view.load();
    } else {
        view = new loadView("home");
        view.load();
    }
    
}

// things to do when a page is loaded
function runWhenURLMet(){
    url = location.hash.slice(1).split("?")[0];
    data = location.hash.slice(1).split("?");

    if (url === "home" || url === ""){
        list("products", "homeul");
    }
    if (url === "pizza"){
        getPizza(data[1]);
    }
}
