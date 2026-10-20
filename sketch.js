const workSizeheight = 784;
const workSizewidth = 800;
const workSpacecolor = [215, 209, 204];

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(255);

  const workX = (width - workSizewidth) / 2;
  const workY = (height - workSizeheight) / 2;

  push();
  translate(workX, workY);

  fill(workSpacecolor);
  strokeWeight(1);
  rect(0, 0, workSizewidth, workSizeheight);

  fill(229, 43, 18);
  rect(0, 0, workSizewidth / 2.2, workSizeheight / 2.5);

  fill(40, 52, 116);
  rect(workSizewidth / 2.2, workSizeheight / 1.6, workSizewidth / 3.2, workSizeheight / 3.4);

  fill(254, 213, 20);
  rect(0, workSizeheight / 1.6, workSizewidth / 8, workSizeheight / 2.2);


  strokeWeight(10);
  line(workSizewidth / 2.2, 0, workSizewidth / 2.2, workSizeheight);
  line(workSizewidth / 8, workSizeheight / 1.6, workSizewidth / 8, workSizeheight);
  line(workSizewidth / 1.3, workSizeheight / 1.6, workSizewidth / 1.3, workSizeheight);

  strokeWeight(15);
  line(workSizewidth / 2.2, workSizeheight / 1.1, workSizewidth / 1.3, workSizeheight / 1.1);

  strokeWeight(15);
  line(0, workSizeheight / 2.5, workSizewidth, workSizeheight / 2.5);
  line(0, workSizeheight / 1.6, workSizewidth, workSizeheight / 1.6);

   strokeCap(SQUARE);
  


}
