const windowSizeParagraph = document.getElementById("windowSizeParagraph");
const fontSizeValue = document.getElementById("fontSizeValue");
const widthValue = document.getElementById("widthValue");

function updateFontSize(){
    const width = window.innerWidth;
  
    //window min, max, font "min", font "max"
    let fontSize = map(width, 300, 1500, 300, 5);
    let fontWeight = map(width, 800, 1500, 1, 15);

    windowSizeParagraph.style.fontSize = fontSize + "px";
    windowSizeParagraph.style.lineHeight= fontSize + (fontSize/1.5 + 7) + "px";
    windowSizeParagraph.style.fontWeight = fontWeight;
    fontSizeValue.textContent = Math.floor(fontSize);
    widthValue.textContent = width;
}

// Mapping function
function map(value, inputMin, inputMax, outputMin, outputMax){
    return (value - inputMin) / (inputMax - inputMin) * (outputMax - outputMin) + outputMin;

}


// Call the function initially
updateFontSize();

// Add an event listener for window resize
window.addEventListener('resize', updateFontSize);