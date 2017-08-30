
function findChosen(){
    var shape = $("#shape option:selected").val();
    showHide(shape);
}

function showHide(shape){
    var c = document.getElementById('circle');
    var t = document.getElementById('triangle');
    var s = document.getElementById('square');
    var r = document.getElementById('rectangle');
    var h = document.getElementById('hexagon');
    
    c.style.display ='none';
    t.style.display ='none';
    s.style.display ='none';
    r.style.display ='none';
    h.style.display ='none';
    
    if(shape === 'c'){
        c.style.display ='block';
    }
    else if(shape === 't'){
        t.style.display ='block';
    }
    else if(shape === 's'){
        s.style.display ='block';
    }
    else if(shape === 'r'){
        r.style.display ='block';
    }
    else if(shape === 'h'){
        h.style.display ='block';
    }
    else{
        c.style.display ='none';
    }
}

function drawSquare(a){
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.rect(0,0,a,a);
    ctx.stroke();
}

function drawRect(l,b){
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.rect(0,0,l,b);
    ctx.stroke();
}

function drawCircle(r){
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.arc(r,r,r,0,(2*Math.PI));
    ctx.stroke();
}

function drawTriangle(){
	var c = document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.stroke();
}

function drawHexagon(s){
	var c = document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
	var x=100;
	var y=100;
	var side=0;
	ctx.beginPath();
	ctx.moveTo(x + s * Math.cos(0), y + s * Math.sin(0));
	for (side; side < 7; side++) {
  		ctx.lineTo(x + s * Math.cos(side * 2 * Math.PI / 6), y + s * Math.sin(side * 2 * Math.PI / 6));
	}
	ctx.stroke();
}

function calc_circle(){
    var rad = document.getElementById('radius').value;
    var area = 3.14*rad*rad;
    var peri = 2*3.14*rad;
    document.getElementById('c-area').value = area;
    document.getElementById('c-peri').value = peri;
    drawCircle(rad);
}

function calc_tri(){
    var a = document.getElementById('side1').value;
    var b = document.getElementById('side2').value;
    var c = document.getElementById('side3').value;
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    var peri = a+b+c;
    var area = Math.sqrt((peri/2)*(peri - a)*(peri - b)*(peri - c));
    document.getElementById('t-peri').value = peri;
    document.getElementById('t-area').value = area;
    drawTriangle();
}

function calc_square(){
    var a = document.getElementById('square-side').value;
    var peri = 4*a;
    var area = a*a;
    document.getElementById('s-peri').value = peri;
    document.getElementById('s-area').value = area;
    drawSquare(a);
}

function calc_rect(){
    var l = document.getElementById('length').value;
    var b = document.getElementById('breadth').value;
    l = parseFloat(l);
    b = parseFloat(b);
    var peri = l+l+b+b;
    var area = l*b;
    document.getElementById('r-peri').value = peri;
    document.getElementById('r-area').value = area;
    drawRect(l,b);
}

function calc_hex(){
    var side = document.getElementById('hex-side').value;
    side = parseFloat(side);
    var peri = 6*side;
    var area = (3/2)*(Math.sqrt(3))*side*side;
    document.getElementById('h-peri').value = peri;
    document.getElementById('h-area').value = area;
    drawHexagon(side);
}