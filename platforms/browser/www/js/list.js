function loadlist(loop, target) {  


    this.load = function () {  
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status === 200 || this.status === 0){
                    handleData(this.responseText); 
                } else {
                    //error
                }
            }
        };
        xhttp.open("GET", "js/fakedata.json", true);
        xhttp.send(); 
    };
    
    function handleData (data) {  
        var result = JSON.parse(data); 
        for(var key in result){
            var single = result[key];

             for (var key2 in single){
                 var li = document.createElement("li");
                 var elements = single[key2];
                
                 for (var i = 0; i < Object.keys(elements).length; i++){
                     var tag = Object.keys(elements)[i];
            
                        var element = document.createElement(tag);

                        for(var j = 0; j < Object.keys(elements[tag]).length; j++ ){

                           if (Object.keys(elements[tag])[j] !== "text" && Object.keys(elements[tag])[j] !== "data") {
                               var att = document.createAttribute(Object.keys(elements[tag])[j]);
                               att.value = elements[tag][Object.keys(elements[tag])[j]];
                               element.setAttributeNode(att);
                           } else if (Object.keys(elements[tag])[j] === "text") {
                               var text = document.createTextNode(elements[tag].text);
                               element.appendChild(text);
                           }
                        } 
                        li.appendChild(element);
                 } 
                 document.getElementById(target).appendChild(li);
            }
        }
    }
}

function list(loop, target){
    var list = new loadlist(loop, target);
    list.load();
}


