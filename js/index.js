'use strict';


var contact = new Contact('contactForm');
var contactForm = document.getElementById("contactForm");
console.log('form submission started');
contactForm.addEventListener('submit', function (event) {
	event.preventDefault();
	console.log('form submitted', contactForm.elements);
	contact.sendReq(contactForm.elements);
	//event.preventDefault();
	return false;
});