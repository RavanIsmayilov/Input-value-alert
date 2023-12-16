var input = document.querySelector(".input")
var btnAdd = document.querySelector(".btn")
var list = document.querySelector(".ul-list")



btnAdd.addEventListener("click", function() {


    if( input.value.trim() == "") {
        
    alert("Please enter a valid")

        input.value = "";
        
        
    } else {

        
    var span = document.createElement("span")
    span.textContent = input.value
    var li = document.createElement("li")   
    var btnEdit = document.createElement("button")
    btnEdit.innerText = "Edit"
    btnEdit.classList.add("btn")
    li.appendChild(span)
    li.appendChild(btnEdit)
    list.appendChild(li)
    input.value == "";

    }




    btnEdit.addEventListener("click", function() {

        var a = prompt("Please enter others", span.textContent.trim())

        if(a.trim()) {
            span.textContent = a;
        }
            else{
                alert("Please enter others") 
            }
        }
    )
    });









