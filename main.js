const pressed = [];
const code = 'travis';
const win = [];

window.addEventListener( 'keydown', (e) => {

	pressed.push(e.key)
	pressed.splice(-code.length - 1, pressed.length - code.length)

	if (pressed.join('').includes(code)) {
		win.push(pressed.join(''));
		if (win.length === 3) {alert("You're a Winner!")}

		cornify_add()
	}
	
	console.log( pressed )

})


