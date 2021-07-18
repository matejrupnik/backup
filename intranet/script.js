


function hideElem() {
    let input2 = document.getElementById('searchbar').value;
    input2=input2.toLowerCase();
    if (input2.length != 0) {
    const img_containers = document.querySelectorAll(".block");
    img_containers.forEach((container) => container.style.display = "none");
    console.log("test5");
    } else {
        console.log('car');
    }
        }




/*

function search() {
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('btnbox2');
    let y = document.querySelectorAll('#hidden');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            y[i].style.display="none";
            console.log("test4");
        }
        else  {
            y[i].style.display="grid";   
            console.log("test3");  
        }
    }
}


*/

function search() {
    let input2 = document.getElementById('searchbar').value;
    input2=input2.toLowerCase();
    let x = document.getElementsByClassName('btnbox2');
    let y = document.querySelectorAll('#hidden');
    let z = document.querySelectorAll('#hidden');
    const block = document.querySelectorAll('.block');
    const block2 = document.querySelectorAll('.block2');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input2)) {
            y[i].style.display="none";
            console.log("test4");
        }
        else  if (input2.length === 0){
            console.log("test44;")
            z[i].style.display="none";
            block2.forEach((container) => container.style.display = "none");
            block.forEach((container) => container.style.display = "grid");
            console.log("test16");  
        }

        else  {

            y[i].style.display="grid";   
            console.log("test3");  
        }
    }
}



document.getElementById('searchbar').onkeyup = function(event) {
    if (this.value.length === 0) {
        const img_containers2 = document.querySelectorAll(".block2");
        const img_containers = document.querySelectorAll(".block");


    img_containers.forEach((container) => container.style.display = "grid");
    console.log("test2");

    }
  }



/*
function showElem() {
    const img_containers = document.querySelectorAll(".block2");
img_containers.forEach((container) => container.style.display = "grid");
        }    */


