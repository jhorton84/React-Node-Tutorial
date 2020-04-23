This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

JavaScript

# ReactJS/NodeJS Tutorial
This project is a tutorial application to help new developers at DevMountain learn the React/Node stack. Through this project, concepts and tutorials will be given to help explain how to connect your front-end (React) to your back-end (Node). If you are a new developer at DevMountain I recommend not skipping any of this tutorial even if it covers concepts you already know, as you may miss something you do not.

I decided to make this as a way to help students learn the full stack by covering basic concepts that weren't easily obvious to me during my own time at DevMountain. Hoping to make your time at DevMountain a little smoother so that you might avoid some of the struggles I went through.

## Overview
Part 1: First Things First
	• What I Wish I Knew on Day 1
		• React vs JavaScript - What's the Difference?
		• The Stack
		• Where is React Code Written?
		• Where is Node Code Written?
Part 2: Let's Start at the Beginning
	• The Relationship Between App.js, index.html, & /src/index.js
	• Intro to React Components
		• Class Components
		• Functional Components
Part 3: Managing State
	• The Basics
		• Constructor Functions
		• onClick and onChange Events
		• Props
	• Redux
		• Creating a Store
		• Reducer
			• Switch Statements
		• React Redux - Provider
		• Connect
		• mapStateToProps & mapDispatchToProps
	• Hooks
		• useState Hook
Part 4: Node


### Part 1: First Things First
This application was created by first running

#### `npx create-react-app <application-name>`

Running the above code in the terminal creates a "boiler plate" React application that allows you to immediately start coding in ReactJS. This is also why it states at the very beginning of this ReadME "This project was bootstrapped with [create react app](https://github.com/facebook/create-react-app)." This is so simple but many students don't even fully understand what this means. So not to be confused with the Framework called "[Bootstrap](https://getbootstrap.com/)", that was developed by a team at Twitter, to "bootstrapping" an application, which is what happens when we run the above command. To bootstrap simply means to run a process that automatically loads and executes commands. So if I were to create an application using the Bootstrap Framework, I might say that I "bootstrapped Bootsrap" vs what we are doing which is bootstrap React. Get it now?

So let's get started!

### What I wish I knew on Day 1...
Let's start by covering some basic concepts of what is going on in React. As a brand-new developer learning JavaScript while also tackling React I often found myself confused on what was React, what was JavaScript, and what was Node. To put it simply, React is a Library that makes your life as a developer MUCH easier. It was created by our friends at Facebook and allows us to create applications quicker and more efficiently than having to do it all from scratch in just plain pure JavaScript. Thank you React team!

#### React vs JavaScript - What's the Difference?

So what is the difference between JavaScript and React? My time at DevMountain was full of my instructor coding away and me trying to follow along, keep up, and not make mistakes that slowed down the learning process. However, this meant that in my rush to copy what the instructor was doing I wasn't always absorbing the "what" or the "why" of what we were doing. This led to a disconnect between when I was writing JavaScript and when I was writing React. To put it simply, during this tutorial and most likely your time at DevMountain you will ALWAYS be writing in JavaScript, and at certain times you will be using JavaScript to write code using the React library. As we go this will hopefully become more clear.

Everything we do in React will be coded using the JavaScript language. The better you know JavaScript the easier React will be. Often as a student I would be confused thinking that what I wasn't understanding was React. I was wrong. The more I learned and the better I understood JavaScript the easier and simpler React became. ALL of our React code, will be written in the JavaScript language which is why if you get better at JavaScript you will also get better at React.

In short if you find yourself confused or struggling, more often than not the problem is that you might need to study JavaScript and React will make more sense. It is unlikely that the reverse logic will work. So to sum up... JavaScript! JavaScript! JavaScript! Focus on these skills and the React will start to take care of itself!

#### The Stack 
Here are some examples to illustrate what we have discussed so far. Using our JavaScript skills we will create certain features to make our lives as developers easier. Some of these features are:<br/>
• React Components (Class/Functional)<br/>
• Redux (state management tool)<br/>
• Router (Browser-Router, Hash-Router)<br/>
• Node.Js (Back End Service)<br/>

All of these things that we build are written in JavaScript. When someone asks you "What is your stack?" They are asking about these technologies. What languages are you using for your front-end and back-end development? What technologies/libraries/frameworks are you using within those languages? Telling someone you are a "Full stack developer" means that you are writing the code for both the front and back ends of an application. Of the list above, React components, Redux, and Router are all part of the front-end stack, while Node is the back end.

#### Where is React Code written?
React is front-end, therefore all of our React code and features will be placed inside of the src/ folder. Your components, Redux, and Routes will all be within this folder. Take some time to look at your src/ folder and what it contains.
#### Where is Node Code written?
Node is a back-end service. Simply put if you are in your server/ folder that's Node.js. Since we use JavaScript for both our front-end and our back-end it can be confusing for some to differentiate when we are writing Node.Js and when we are doing ReactJs. Understanding these differences will help you when discussing your skills with hiring managers! Examples of things we use in Node are:
<br/>
• express()
<br/>
• massive()
<br/>

In your server/ folder you have probably created these files:<br/>
`index.js` & `controller.js`<br/>
These are also part of Node.Js

## Part 2: Let's Start at the Beginning
This section covers a higher level of understanding of the "HOW". In this section we will be discussing:<br/>
• How App.Js is injected into our html file<br/>
• What are components and how should they be used?<br/>

#### The relationship between App.js, index.html, & /src/index.js
If you haven't forked and cloned this repo yet, go ahead and do so now. 
<br/>

Ok we are finally ready to start looking at some code. We have some foundational knowledge and we can start building on that. First, let's talk about how React works on a higher level. As you may know, HTML is what is displayed to the browser. In a traditional website you put your HTML in a `<fileName>.html` and javaScript in a `<fileName>.js`. However in React we write our html in our .js components. When we do this it is called JSX, not HTML, however it behaves in the same way. To explain this further, Googling JSX provides this definition: "JSX in an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code. ...Instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript." Below is a screenshot of what shows in the elements section after inspecting the page of a basic React app. In this image I haven't coded anything since the initial bootstrap command. 

![create react app inspect](/src/images/inspect-App-child.png)


Study this image, then navigate in your application to the /public/index.html file. Look familiar? The main thing you should notice from this is that in the above image we have a div with the `class="App"` as a child of the div with an `id="root"`. This occurs because of your index.js file inside of the /src folder. Let's take a look in here next.

`src/index.js` has a line that looks like this:

`ReactDOM.render(<App />, document.getElementById('root'));`

Take a minute to read the above code and see if you can understand what is going on before continuing.<br/>

This line basically states that React is going to render the App component (imported at the top of the file) `import App from './App';` by placing it inside of the element with an id of 'root'. The  `document.getElementById()` is a vanilla JavaScript method that will look for a div with the id attribute with the name passed in as the argument. In our case the name passed in is 'root' which we already found in the `index.html` file in our "public" folder. Because of this code we can now make the App component which is a child of the div with an id of root in our index.html file the parent component of the rest of our app. This way all of our components we create if children and grandchildren of App will also be a part of the application through this root div. 
If you have any further questions regarding this I recommend studying the `document.getElementById()` method.

#### Intro to React Components
 As we already discussed, App.js is a component that in our case we will use to be the outer most parent. All other components we create will be children/grandchildren of App.js. 

##### Class Components
Remember how we said in the beginning that React was just JavaScript and the better you understand JavaScript the easier React will be? Components are a perfect example of this. Starting with class components, do you remember creating classes during JavaScript week?
```
class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}
```
This is a class. The name of this class is "Hero" and has a constructor function inside that contains two variables, `name` and `level`. The "this" keyword is used so that when we call it later, it knows we are referring to the `name` and `level` of the particular `hero` we are talking about. Inside of a constructor function we can also have methods we create, which are functions defined within the constructor.

```
class Hero {
	constructor(name, level) {
		this.name = name;
		this.level = level;
	}
	greet() {
		return `${this.name} says hello.`;
	}
	powerUP() {
		this.level = this.level++;
    }
}
```

In the above example we can now access two methods, greet, and powerUp within the constructor function... hopefully by now this is starting to look familiar. It's just JavaScript!

Last lets look at what it means to extend a class. [*"An advantageous feature of constructor functions and classes is that they can be extended into new object blueprints based off of the parent. This prevents repetition of code for objects that are similar but need some additional or more specific features."*](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript) 

```
// Creating a new class from the parent
class Mage extends Hero {
    constructor(name, level, spell) {
        // Chain constructor with super
        super(name, level);

        // Add a new property
        this.spell = spell;
    }
}
```
This is an ES6 feature that we can use to create a new instance of Hero that is also a mage. Mage will be a child of Hero in this case and have access to the same methods and variables that we pass into super().<br/>

Now we can create a hero and a mage at the same time.<br/>
```
const hero2 = new Mage('Lejon', 2, 'Magic Missile');
```
Notice how we used the method super() and passed in the variables we need for the Hero class? You can read more about these examples [here](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript).

Now that we better understand javaScript classes lets take a look at our class Components.

```
import React, {Component} from 'react';

class Hero extends Component {
	constructor() {
		super();
		this.state = {
			
		}
	}

	render(){
		return(
			<div className='Hero'>
				
			</div>
		)
	}
}

export default Hero;
```
The class Component is simply that, a class! Hopefully you are starting to see that everything React does is simply JavaScript code written to make your life as a developer easier.  <br/>

A class Component is a class that React has built into it. The render function is a method inside of the class Component, which we use to render everything inside of it that is returned to the DOM. And we have made `Hero` a class that is a child of the Component Class in React. Let me state this again, Component as in the code above "class Hero extends Component" works because under the hood of React, a class has already been created with methods and functions called Component. We have imported that component from the React library at the top of the file so we have access to it. Again, I recommend taking a few moments to study the above code and make sure you fully understand this before moving on.


##### Functional Components
A functional component is simply creating a component as a basic function instead of a class. Prior to the development and introduction to a tool called React Hooks, a functional Component couldn't manage state. We will talk about Hooks later and just focus on the structural differences in setting up a basic functional component and how it differs from a Class component. 

We will start by importing React into the file so that we have access to the React library. Following that we will create a function and name it whatever we are going to call this component. In this tutorial we will call the component functionalComponent. Finally we will then export our function.

```
import React from 'react';

function functionalComponent(){
	return (
		<div>Hello World</div>
	)
}

export default functionalComponent;
```
The first difference to pay attention to is that this is just a function that returns a div. The second thing to notice is that functional components don't use the render method. Functional components are much simpler to write and prior to Hooks were generally used whenever you didn't need to manage state using a constructor function because of their simpler set up.

 
 
 
 *Still in Progress* 
