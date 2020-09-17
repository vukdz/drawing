let saveButton, clearButton, mouseButton, keyboardButton, eraserButton, brushButton, paintBucketButton;
let slider;
let canvas;
let colorPicker;

function setup() {  
  // Creating the save button for the file
  saveButton = createButton('Save');
  saveButton.mousePressed(saveFile);

  // Creating the clear screen button
  clearButton = createButton('Clear');
  clearButton.mousePressed(clearScreen);

  // Setting up the slider for the thickness of the brush
  brushSizeSlider = createButton('Brush Size Slider');
  sizeSlider = createSlider(1, 32, 4, 0.1);

  /*eraserButton = createButton('Eraser');
  eraserButton.mousePressed(eraser);*/

  brushButton = createButton('Brush');
  brushButton.mousePressed(draw);

  colorPicker = createColorPicker('#000000');

  // Creating canvas
  createCanvas(screen.width, screen.height-200);
  background('#ffffff');
}

// Save File Function
function saveFile() {
  save('design.jpg');
}

// Eraser
/*function eraser() {
  stroke('#ffffff');
  strokeWeight(10);
}*/

// Clear Screen function
function clearScreen() {
  background('#ffffff');
}

function draw() {
  if (mouseIsPressed) {
    let sw = sizeSlider.value();
    strokeWeight(sw);
    stroke(colorPicker.color());
    line(mouseX, mouseY, pmouseX, pmouseY);
    push();
    scale(1, -1);
    line(mouseX, mouseY, pmouseX, pmouseY);
    pop();
  }
}