let myImage = document.querySelector('img');
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/catnip.jpg') {
		myImage.setAttribute('src', 'images/ratJAM.gif');
	} else {
		myImage.setAttribute('src', 'images/catnip.jpg');
	}
}