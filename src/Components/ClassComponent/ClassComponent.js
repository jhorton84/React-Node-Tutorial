import React, {Component} from 'react';

class ClassComponent extends Component {
	constructor() {
		super();
		this.state = {
			arrayInState: ["child1", "child2"]
		}
	}

	//Methods (functions within the class/component) will go here, such as the function used by an onClick
	render() {
		//***If you are using VS Code, Hit (opt + z) on mac to see all the comments without scrolling***

		// render is a method that returns your JSX. Its very simple when you look at it. This is just like any other function, so we can write our logic HERE within the render method, but before our return. 
		// ----Write logic below this line ----
		const {arrayInState} = this.state;
		const mapInRender = arrayInState.map(value => {
			console.log('value', value)
			// Again we can only return a single thing, so we return a single div that contains the rest.
			return (
				<div className={value} >
					{value} is a child of ClassComponent
				</div>
			)
		}) 
		// ----Write logic above this line ----
		return (
			//a return statement can only and ALWAYS return a single thing. So in JSX we always return just a single div that becomes the parent of the rest of our JSX. Remember JSX is React's way of writing our HTML/XML within a .js file.
			<div className='classComponent'>
				This is a class Component!
				{mapInRender}
			</div>
		)
	}
}

export default ClassComponent;