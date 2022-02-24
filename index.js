document.addEventListener('keydown', event =>  {
  var element = document.querySelector('p');
var a = 'KeyA';
var s = 'KeyS';
var d = 'KeyD';
var w = 'KeyW';

switch (event.code) {
  case a :
    element.textContext = 'Left';
  case s :
    elemement.textContent ="Down";
    
  case d :
    element.textContent = 'Right';
    
  case W:
    element.textContent = 'Up';
    break;
    
    
}
});
                          
                          
                          
//the above code shows how one can create keyboard events to correspond to each key press
