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
image(mygif,0,0);
}
