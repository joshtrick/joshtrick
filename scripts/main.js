let myImage = document.querySelector('img');

myImage.onclick = funciton() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/logo-size.jpg')
  {
    myImage.setAttribut('src', 'images/logo-size-invert.jpg');
  } else {
    myImage.setAttribut('src', 'images/logo-size.jpg');
  }
}
