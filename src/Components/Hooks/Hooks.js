import React, {useState} from 'react';

function Hooks() {
	// first using Array deconstructing we will define our state value "myHook" and the setState function we will use to change state "setHook" by setting it to the useState hook and pass in the initial value we want our state to be (0).
	const [myHook, setHook] = useState(0);
	return (
		<div className='Hooks'>
			Hooks Component
			{/* Here we have created to buttons with onClick methods to handle changing the state of 'myHook'. When each button is clicked it fires the method we defined to change the state of our variable and we then pass in the logic we want to occur for updating our new state. */}
			<button onClick={() => {setHook(myHook + 1)}} >Change State</button>
			<button onClick={() => {setHook(0)}} >Clear State</button>
			{myHook}
		</div>
	)
}

export default Hooks;