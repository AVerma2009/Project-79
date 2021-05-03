menu_list = ["Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"];
    

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list.sort();
    for(var j=0;j<menu_list.length;j++){
        htmldata=htmldata+'<li>' + menu_list[j] + '</li>'
    }
     htmldata=htmldata+"</ol>"
     document.getElementById("display_menu").innerHTML = htmldata;
}


function add_item(){
    var htmldata;
        var item=document.getElementById("add_item").value;
    menu_list.push(item);
    menu_list.sort();
    htmldata="<section class='cards'>"
    for(var j=0;j<menu_list.length;j++){

        htmldata=htmldata+'<div class="card">' +'<img src="images/pizzaImg.png"/>' + menu_list[j] + '</div>'
    }

      htmldata=htmldata+"</section>"
      document.getElementById("display_addedmenu").innerHTML = htmldata;
}