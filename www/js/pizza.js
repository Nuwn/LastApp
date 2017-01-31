function getPizza(param) {  
    var pizza = param;
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status === 200 || this.status === 0){
                display(JSON.parse(this.responseText));
            } else {
                //error
            }
        }
    };
    xhttp.open("GET", "js/fakedata.json", true);
    xhttp.send();

    function display(param) {
        
        var data = param.products[pizza].a.data;
        var element = document.getElementById("pizza");
        var img = element.children[0];
        var name = element.children[1];
        var info = element.children[2];

        console.log(img)

        img.setAttribute("src", data.img);
        name.innerHTML = param.products[pizza].a.text;
        info.innerHTML = data.info;
    }
}
