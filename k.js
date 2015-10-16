// new Audio('https://github.com/mrkev/killiankat/blob/master/nyan.mp3').play();
// new Audio('https://media.githubusercontent.com/media/mrkev/killiankat/master/nyan.mp3').play();
new Audio('http://ow.ly/TuCUA').play()

function addcss(css){
   var s = document.createElement('style');
   s.setAttribute('type', 'text/css');
   s.appendChild(document.createTextNode(css));
   (document.getElementsByTagName('head')[0]).appendChild(s);
}

addcss('body { background: red;}')