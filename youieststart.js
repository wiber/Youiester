var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.src = "http://code.onilabs.com/apollo/0.12/oni-apollo.js";
document.head.appendChild(script);

var script = document.createElement( 'script' );
script.type = 'text/sjs';
script.text = "require('github:wiber/youiester/master/frontent/youiestbox.sjs')";
document.head.appendChild(script); 

//http://dl.dropbox.com/u/1545014/curea/youieststart.js