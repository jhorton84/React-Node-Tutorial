This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

JavaScript

# ReactJS/NodeJS Tutorial
This project is a tutorial application to help new developers at DevMountain learn the React/Node stack. Through this project, concepts and tutorials will be given to help explain how to connect your front-end (React) to your back-end (Node). If you are a new developer at DevMountain I recommend not skipping any of this tutorial even if it covers concepts you already know, as you may miss something you do not.

I decided to make this as a way to help students learn the full stack by covering basic concepts that weren't easily obvious to me during my own time at DevMountain. Hoping to make your time at DevMountain a little smoother so that you might avoid some of the struggles I went through.


### Part 1: First Things First
This application was created by first running

#### `npx create-react-app <application-name>`

Running the above code in the terminal creates a "boiler plate" React application that allows you to immediately start coding in ReactJS. This is also why it states at the very beginning of this ReadME "This project was bootstrapped with [create react app](https://github.com/facebook/create-react-app)." This is so simple but many students don't even fully understand what this means. So not to be confused with the Framework called "[Bootstrap](https://getbootstrap.com/)", that was developed by a team at Twitter, to "bootstrapping" an application, which is what happens when we run the above command. To bootstrap simply means to run a process that automatically loads and executes commands. So if I were to create an application using the Bootstrap Framework, I might say that I "bootstrapped Bootsrap" vs what we are doing which is bootstrap React. Get it now?

So let's get started!

### What I wish I knew on Day 1...
Let's start by covering some basic concepts of what is going on in React. As a brand-new developer learning JavaScript while also tackling React I often found myself confused on what was React, what was JavaScript, and what was Node. To put it simply, React is a Library that makes your life as a developer MUCH easier. It was created by our friends at Facebook and allows us to create applications quicker and more efficiently than having to do it all from scratch in just plain pure JavaScript. Thank you React team!

#### React vs JavaScript - What's the Difference?

So what is the difference between JavaScript and React? My time at DevMountain was full of my instructor coding away and me trying to follow along, keep up, and not make mistakes that slowed down the learning process. However, this meant that in my rush to copy what the instructor was doing I wasn't always absorbing the "what" or the "why" of what we were doing. This led to a disconnect between when I was writing JavaScript and when I was writing React. I'm cringing even as I write this because asking what is the difference between JavaScript and React would be like asking what is the difference between the English language (JavaScript) and the English Dictionary (React). 

This may not be the best example, but I hope it makes things more clear. Even though React can be written in other languages, such as Ruby, in this case we are using JavaScript. Everything we do in React will be coded using the JavaScript language. The better you know JavaScript the easier React will be. You can read an English dictionary with an understanding of the English language, however this doesn't necessarily work in the reverse. Often as a student I would be confused thinking that what I wasn't understanding was React. I was wrong. The more I learned and the better I understood JavaScript the easier and simpler React became. ALL of our React code, will be written in the JavaScript language which is why if you get better at JavaScript you will also get better at React.

In short if you find yourself confused or struggling, more often than not the problem is that you might need to study JavaScript and React will make more sense. It is unlikely that the reverse logic will work. So to sum up... JavaScript! JavaScript! JavaScript! Focus on these skills and the React will start to take care of itself!

#### React De-mystified - It's not Magic... 
Here are some examples to illustrate what we have discussed so far. Using our JavaScript skills we will create certain features that React uses to make our lives as developers easier. Some of these features are:<br/>
• Components (Class/Functional)<br/>
• Redux <br/>
• Router (Browser-Router, Hash-Router)<br/>

All of these things that we build USING JavaScript work and function because of React and are a part of the way React is made to be used.

#### Where is React Code written?
React is front-end, therefore all of our React code and features will be placed inside of the src/ folder. Your components, Redux, and Routes will all be within this folder. Take some time to look at your src/ folder and what it contains.
#### Where is Node Code written?
Node is a back-end service. Simply put if you are in your server/ folder that's Node.js. Since we use JavaScript for both our front-end and our back-end it can be confusing for some to differentiate when we are writing Node.Js and when we are doing ReactJs. Understanding these differences will help you when discussing your skills with hiring managers! Things we use in Node are:
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

Ok we are finally ready to start looking at some code. We have some foundational knowledge and we can start building on that. First, let's talk about how React works on a higher level. As you may know, HTML is what is displayed to the browser. In a traditional website you put your HTML in a `<fileName>.html` and javaScript in a `<fileName>.js`. However in React we write our html in our .js components. Whaaaaat?!?! This can be mind-boggling for some, so lets remove at least some of the mystery. Below is a screenshot of what shows in the elements section after inspecting the page of a basic React app. In this image I haven't coded anything since the initial bootstrap command. 

![create react app inspect](/src/images/inspect-App-child.png)


Study this image, then navigate in your application to the /public/index.html file. Look familiar? The main thing you should notice from this is that in the above image we have a div with the `class="App"` as a child of the div with an `id="root"`. This occurs because of your index.js file inside of the /src folder. Let's take a look in here next.

`src/index.js` has a line that looks like this:

`ReactDOM.render(<App />, document.getElementById('root'));`

Can you tell what is going on here? I hope so, but if not that's ok! This line basically states that React is going to render the App component (imported at the top of the file) `import App from './App';` by placing it inside of the element with an id of 'root'. The  `document.getElementById()` is a vanilla JavaScript method that will look for a div with the id attribute with the name passed in as the argument. In our case the name passed in is 'root' which we already found in the `index.html` file in our "public" folder. Because of this code we can now make the App component which is a child of the div with an id of root in our index.html file the parent component of the rest of our app. This way all of our components we create if children and grandchildren of App will also be a part of the application through this root div. 
If you have any further questions regarding this I recommend studying the `document.getElementById()` method.

#### Components
 As we already discussed App.js is a component that in our case we will use to be the outer most parent. All other components we create will be children/grandchildren of App.js. 

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

class App extends Component {
	constructor() {
		super();
		this.state = {

		}
	}
	//methods will go here. 

	render() {
		return (
			<div className='App' >
				HTML or JSX here!
			</div>
		)
	}
}
export default App;
```
Holy Guacamole J.T.! The class Component is just a class!... go figure. <br/>

A class Component is a class that React has built into it. The render function is a method inside of the class Component, which we use to render everything inside of it that is returned to the DOM. And we have made `App` a class that is a child of the Component Class in React. 


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
