
// Select canvas size and color input
function makeGrid(height, width) {
    var canvas = document.getElementById("pixelCanvas");
    canvas.innerHTML = '';
    for (let y = 0; y < height; y++) {
        let row = canvas.insertRow(y);
        for (let x = 0; x < width; x++) {
            let cell = row.insertCell(x);
            cell.addEventListener('click', function(e) {
                e.target.style.backgroundColor = document.getElementById("colorPicker").value;
            });
        }
    }
}

// call makeGrid()
document.querySelector("form").addEventListener('submit', function(e) {
    e.preventDefault();
    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;
    makeGrid(height, width);
});


