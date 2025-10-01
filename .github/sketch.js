let mygif;
function preload()
{
mygif = loadImage('rot.gif');

}
function setup() 
{
	createCanvas(900, 900);
}

function draw()
{
	
background(255);


image(mygif,0,0);
}
