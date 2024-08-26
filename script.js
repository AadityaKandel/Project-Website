var a,b,c,d,e;

function read() {

	a = document.getElementById('d1');
	b = document.getElementById('d2');
	c = document.getElementById('d3');
	d = document.getElementById('d4');
	e = document.getElementById('toggle');

}

function layout() {

	read(); // Calling read() function for variables assignment
	// Changing the style, width value
	a.style.width = "95%";
	b.style.width = "95%";
	c.style.width = "95%";
	d.style.width = "95%";
	// Changing the attribute of toggle button
	e.setAttribute('onclick','layout1()');
					
}

function layout1(){

	read();
	a.style.width = "50%";
	b.style.width = "50%";
	c.style.width = "50%";
	d.style.width = "50%";
	
	e.setAttribute('onclick','layout()');
}
