function setImageVisible(id, visible) { // function to modify visibility state of images
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
}

function parseInput(form, name) { // function to get input selection from form
    var elementValue;
    var radioElements = form.elements[name];

    for (var i=0, len=radioElements.length; i<len; i++) { // increment for every radio button
        if ( radioElements[i].checked ) { // check if button is selected
            elementValue = radioElements[i].value; // if it is set it to the out variable
            break;
        }
    }
    return elementValue;
}

function calculateJumpers(colour) {
    var values = []; // init array

    if (colour == "Red") { // calculate jumpers
      values = [1, 0, 0];
    } else if (colour == "Green") {
      values = [0, 1, 0];
    } else if (colour == "Blue") {
      values = [0, 0, 1];
    } else if (colour == "Cyan") {
      values = [0, 1, 1];
    } else if (colour == "Magenta") {
      values = [1, 0, 1];
    } else if (colour == "Yellow") {
      values = [1, 1, 0];
    } else if (colour == "White") {
      values = [1, 1, 1];
    }

    return values; // return rgb values
}

function refreshImages() { // function to set overlay images to on/off
    var ledValues = []; // create array
    var radioArrays = ['led1', 'led2', 'led3', 'led4'];

    for (let i = 0; i < radioArrays.length; i++) { // get values of radio buttons from html form
        ledValues[i] = parseInput(document.getElementById('ledform'), radioArrays[i]);
    }

    for (i in ledValues) {
      alert('LED' + i + " is set to: " + ledValues[i]);
      jumperStates = calculateJumpers(ledValues[i]);
      alert(jumperStates); // set the images here an example is setImageVisible(TR-R, visible);
    }

}

function fullscreenImage() {
    if (document.getElementById('mainImg').style.width == '100%') {
      document.getElementById('mainImg').style.width = '300px';
      var overlayStyle = document.createElement('style');
      document.head.appendChild(overlayStyle);
      overlayStyle.sheet.insertRule('.overlayImg {width: 300px}');
      document.getElementById('fullscreenButtonText').innerText = 'Enlarge the image';
    } else {
      document.getElementById('mainImg').style.width = '100%';
      var overlayStyle = document.createElement('style');
      document.head.appendChild(overlayStyle);
      overlayStyle.sheet.insertRule('.overlayImg {width: 100%}');
      document.getElementById('fullscreenButtonText').innerText = 'Default image size';
    }
}
