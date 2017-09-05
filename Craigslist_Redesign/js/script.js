function open_subcat(){
    var lvl1 = document.getElementsByClassName("lvl1-nav")[0];
    var lvl2 = document.getElementsByClassName("lvl2-nav")[0];
    lvl1.style.width = "15%";
    lvl2.style.visibility="visible";
    lvl2.style.width="35%";
    
    var lvl1_li = document.getElementsByClassName("lvl1-option");
//    for (var i = 0; i < lvl1_li.length; ++i){
//        lvl1_li[i].style.paddingRight = "20%";
//    }
    lvl1_li = [].slice.call(lvl1_li);
    lvl1_li.map(function(temp){temp.style.paddingRight = "15%";return temp;});
    
}

function open_subsubcat(){
    var lvl2 = document.getElementsByClassName("lvl2-nav")[0];
    lvl2.style.width = "15%";
    
    var lvl2_li = document.getElementsByClassName("lvl2-option");
    lvl2_li = [].slice.call(lvl2_li);
    lvl2_li.map(function(temp){temp.style.paddingRight = "15%";return temp;});
}