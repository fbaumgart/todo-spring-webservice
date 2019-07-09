window.onload = function(){
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8080/tasks";
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // do something with response
            console.log(xhr.responseText);
            var data = JSON.parse(xhr.responseText);
            for (var i = 0; i < data.length; i++) {
            	displayTask(data[i].taskString, data[i].id)
            }
            
            // Create a "close" button and append it to each list item
            var myNodelist = document.getElementsByTagName("LI");
            var i;
            for (i = 0; i < myNodelist.length; i++) {
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
            }
            assignCloseHandlers();
        }
        else
        {
            console.log(xhr.responseText);
        }
    }
  xhr.send();
  
  
        
  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('#myUL');
  list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
}

// Click on a close button to hide the current list item
var assignCloseHandlers = function() {
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        console.log(div.id);
        var xhr = new XMLHttpRequest();
        var url = "http://localhost:8080/tasks/" + div.id;
        console.log(url);
        xhr.open("DELETE", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // do something with response
                console.log(xhr.responseText);
            }
            else
            {
                console.log(xhr.responseText);
            }
        }
      xhr.send();
      }
    }
    }
    
    function displayTask(title, id) {
    		var li = document.createElement("li");
        li.id = id;
        var t = document.createTextNode(title);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
      /*  setTimeout(function() {
            li.classList.add("show");
          }, 10); */
    }
     
     
    // Create a new list item when clicking on the "Add" button
    function newElement() {
        var inputValue = document.getElementById("TaskField").value;
        if (inputValue === '') {
                    alert("You must write something!");
                    } else {
        var xhr = new XMLHttpRequest();
        var url = "http://localhost:8080/tasks";
        var data = "taskString=" + inputValue;
        var myObj;
        var id;
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // do something with response
                myObj = JSON.parse(this.responseText);
                console.log(myObj.id);
                id = myObj.id;
                console.log(xhr.responseText);
                var li = document.createElement("li");
                li.id = id;
                var t = document.createTextNode(inputValue);
                li.appendChild(t);
                document.getElementById("myUL").appendChild(li);
             /*   setTimeout(function() {
                    li.classList.add("show");
                  }, 10); */
                document.getElementById("TaskField").value = "";               
                var span = document.createElement("SPAN");
                var txt = document.createTextNode("\u00D7");
                span.className = "close";
                span.appendChild(txt);
                li.appendChild(span);
                assignCloseHandlers();
            }
            return id;
       };
      xhr.send(data);
     }
    }