const pressed = [];
const code = 'travis';
const win = [];

window.addEventListener( 'keydown', (e) => {

	pressed.push(e.key)
	pressed.splice(-code.length - 1, pressed.length - code.length)

	if (pressed.join('').includes(code)) {
		console.log( pressed.join('') + "!!!" )
		win.push(pressed.join(''));
		console.log( win )
		if (win.length === 3) {
			alert("You're a Winner!")
		}
		cornify_add()
	}
	
	console.log( pressed )
	console.log( pressed.join('') )

})


