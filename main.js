const pressed = [];
const code = 'travis';
window.addEventListener( 'keydown', (e) => {

	pressed.push(e.key)
	pressed.splice(-code.length - 1, pressed.length - code.length)

	console.log( pressed )

})


