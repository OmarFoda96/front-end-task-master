// Select color input
var color = document.getElementById('colorPicker');
// Select size input
var theight = document.getElementById('inputHeight');
var twidth = document.getElementById('inputWidth');
//table 
var table = document.getElementById('pixelCanvas');

//form
var submitBtn = document.getElementById('submitBtn');

// When size is submitted by the user, call makeGrid()
submitBtn.addEventListener('click', makeGrid)
function makeGrid() {
  // Your code goes here!


  for (var i = 0; i < theight.value; i++) {

    if (theight.value > 0) {
      console.log(theight.value);
      var trow = document.createElement('tr');
      for (var j = 0; j < twidth.value; j++) {
        if (twidth.value > 0) {
          var tdata = document.createElement('td');
          trow.appendChild(tdata);
          table.appendChild(trow);
          console.log(color.value)
          if (color.value == '#000000') {
            table.style.borderColor = '#fff';
            tdata.style.borderColor = '#fff';
            trow.style.borderColor = '#fff';
          }
          tdata.style.backgroundColor = color.value;
        }
        else {
          j++;
        }
      }

    }
    else {
      i++;
    }
  }
}

