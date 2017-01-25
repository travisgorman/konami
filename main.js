const pressed = [];
const code = 'travis';
window.addEventListener( 'keydown', (e) => {

	pressed.push(e.key)
	pressed.splice(-code.length - 1, pressed.length - code.length)

	if (pressed.join('') === code){
		alert("DANG BRAH. that was siiiick")
	}
	console.log( code )
	console.log( pressed )
	console.log( pressed.join('') )

})


