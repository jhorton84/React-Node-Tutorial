This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## ReactJS/NodeJS Tutorial
This project is a tutorial application to help new developers at DevMountain learn the React/Node stack. Through this project, concepts and tutorials will be given to help explain how to connect your front-end (React) to your back-end (Node). If you are a new developer at DevMountain I recommend not skipping any of this tutorial even if it covers concepts you already know, as you may miss something you do not.
<br/>
I decided to make this as a way to help students learn the full stack by covering basic concepts that weren't easily obvious to me during my own time at DevMountain. Hoping to make your time at DevMountain a little smoother so that you might avoid some of the struggles I went through.
<br/>
This application was created by first running
<br/> 

#### `npx create-react-app <application-name>`

<br/>

Running the above code in the terminal creates a "boiler plate" React application that allows you to immediately start coding in ReactJS. This is also why it states at the very beginning "This project was bootstrapped with [create react app](https://github.com/facebook/create-react-app)." This is so simple but many students don't even fully understand what this means. So not to be confused with the Framework called "[Bootstrap](https://getbootstrap.com/)" that was developed by a team at Twitter, to "bootstrap" an application, which is what happens when we run the above command, simply means to run a process that automatically loads and executes commands.

So let's get started!

### What I wish I knew on Day 1...
Let's start by covering some basic concepts of what is going on in React. As a brand new developer learning JavaScript while also tackling React I often found myself confused on what was React, what was JavaScript, and what was Node. To put it simply, React is a Library that makes your life as a developer MUCH easier. It was created by our friends at Facebook and allows us to create applications quicker and more efficiently than having to do it all from scratch in just plain pure JavaScript. Thank you React team!
<br/>

#### React vs JavaScript - What's the Difference?

So what is the difference between JavaScript and React? Class at DevMountain was full of my instructor coding away and me trying to follow along, keep up, and not make mistakes that slowed down the learning process. However, this meant that in my rush to copy what the instructor was doing I wasn't always absorbing the "what" or the "why" of what we were doing. This led to a disconnect between when I was writing JavaScript and when I was writing React. I'm cringing even as I write this because asking what is the difference between JavaScript and React would be like asking what is the difference between the English language (JavaScript) and the English Dictionary (React). 

<br/>

Though this may not be the best example I hope it makes things more clear. Though React can be written in other languages, such as Ruby, in this case we are using JavaScript. Everything we do in React will be coded using the JavaScript language. The better you know JavaScript the easier React will be. You can read an English Dictionary with a strong understanding of the English language, however this doesn't necessarily work in the reverse. Often as a student I would be confused thinking that what I wasn't understanding was React. I was wrong. The more I learned and the better I understood JavaScript the easier and simpler React became. So in short, EVERYTHING we are doing in a .js file is JavaScript which means 90% of your code will be JavaScript. ALL of our React code, will be written in the JavaScript language which is why if you get better at JavaScript you will also get better at React.

<br/>

In short if you find yourself confused or struggling, more often than not the problem is that you might need to study JavaScript and React will make more sense.

#### React De-mystified - It's not Magic... 
Ok so now that we have talked about what React is and what it isn't we can now start to discuss some of the React features. Using our JavaScript skills we will create certain features that React uses to make our lives as developers easier. Some of these features are:
<br/>
• Components (Class/Functional)
<br/>
• Redux
<br/>
• Router (Browser-Router, Hash-Router)
<br/>

#### Where is React Code written?
React is front-end, therefore all of our React code and features will be placed inside of the /src folder. Your components, Redux, and Routes will all be within this folder. 
#### Where is Node Code written?
Node is a back-end service. Simply put if you are in your /server folder that's Node.js. Since we use JavaScript for both our front-end and our back-end it can be confusing for some to differentiate when we are writing Node.Js and when we are doing ReactJs. Understanding these differences will help you when discussing your skills with hiring managers! Things we use in Node are:
<br/>
• express()
<br/>
• massive()
<br/>

### How can I write HTML in JavaScript?
If you're like me you probably want to know how some of this is working. Let's start by working our way backwards. 

<img src=(/src/images/inspect-app-child) />



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
