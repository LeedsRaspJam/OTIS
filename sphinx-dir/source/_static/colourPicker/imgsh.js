function setImageVisible(id, visible) { // function to modify visibility state of images
    console.log("Id: " + id)
    var img = document.getElementById(id);
    img.style.visibility = (visible);
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
      var pos = "";
      if (i==0){
        pos = "TL";
      } else if (i==1) {
        pos = "TR";
      } else if (i==2) {
        pos = "B1";
      } else if (i==3) {
        pos = "B2";
      }
      console.log(pos);
      // alert('LED' + i + " is set to: " + ledValues[i]);
      jumperStates = calculateJumpers(ledValues[i]);
      // alert(jumperStates); // set the images here an example is setImageVisible(TR-R, visible);
      if (jumperStates[0]==1) {
        setImageVisible(pos+"-R", "visible");
        console.log("Show red");
      } else {
        setImageVisible(pos+"-R", "hidden");
        console.log("Hide red");
      }
      if (jumperStates[1]==1) {
        setImageVisible(pos+"-G", "visible");
        console.log("Show red");
      } else {
        setImageVisible(pos+"-G", "hidden");
        console.log("Hide red");
      }
      if (jumperStates[2]==1) {
        setImageVisible(pos+"-B", "visible");
        console.log("Show red");
      } else {
        setImageVisible(pos+"-B", "hidden");
        console.log("Hide red");
      }
    }

}

function fullscreenImage() {
    if (document.getElementById('mainImg').style.width == '100%') {
      document.getElementById('mainImg').style.width = '300px';
      var elements = document.querySelectorAll('.overlayImg');
      for(var i=0; i<elements.length; i++){
          elements[i].style.width = 300 + "px";
      }
      document.getElementById('fullscreenButtonText').innerText = 'Enlarge the image';
    } else {
      document.getElementById('mainImg').style.width = '100%';
      var elements = document.querySelectorAll('.overlayImg');
      for(var i=0; i<elements.length; i++){
          elements[i].style.width = 100 + "%";
      }
      document.getElementById('fullscreenButtonText').innerText = 'Default image size';
    }
}
