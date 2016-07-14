'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Contact = function () {
	function Contact(formId) {
		_classCallCheck(this, Contact);

		//this.url = 'https://formspree.io/contact@sujeetjaiswal.com';
		this.url = 'https://formspree.io/sudeep4ru@gmail.com';
		//document.getElementById(formId).addEventListener('submit',this.sendReq)
	}

	_createClass(Contact, [{
		key: 'sendReq',
		value: function sendReq(formElements) {
			var xhttp = void 0;
			if (window.XMLHttpRequest) {
				xhttp = new XMLHttpRequest();
				
			} else {
				// code for IE6, IE5
				xhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhttp.onreadystatechange = function () {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
					document.getElementById('contactForm').style.display = 'none';
					document.getElementById('contactForm1').style.display = 'none';
					document.getElementById("contactThanks").style.display = 'block';
				}
			};
			xhttp.open("POST", this.url, true);
			//xhttp.setRequestHeader("referrer", "origin");
			xhttp.setRequestHeader("Content-type", "application/json");
			xhttp.setRequestHeader("Accept", "application/json");
			xhttp.send(JSON.stringify({
				'name': formElements.name.value,
				'_replyto': formElements._replyto.value,
				'_subject': formElements.subject.value,
				
				'message': formElements.message.value
			}));
		}
	}]);

	return Contact;
}();