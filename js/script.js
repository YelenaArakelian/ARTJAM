/**
 * Self Portrait
 * Yelena Arakelian
 *
 * A self portrait of Yelena
 *
 */

"use strict";

/**
 * Create a blue canvas */
function setup() {
  createCanvas(1000, 850);
  background("#becbf8ff");
}

/**
 * Draws land, a sun, a dog,
 */
function draw() {
  // Draw the land
  noStroke();
  fill("#87ab69");
  rect(0, 650, 1000, 200);

  // Draw the sun
  fill("#FFDF22");
  circle(100, 100, 130);

  // Draw the cloud
  fill("808080");
  ellipse(190, 100, 170, 80);
  fill("808080");
  ellipse(250, 80, 120, 90);
  fill("808080");
  ellipse(280, 120, 170, 90);
  drawHuman();
}

function drawHuman() {
  // Draw a head
  noStroke();
  fill("#f3e0caff");
  ellipse(500, 390, 300, 330);

  // Draw a
}
