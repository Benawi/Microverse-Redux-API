<a name="readme-top"></a>

![image](https://github.com/Benawi/Microverse-Redux-API/assets/21217148/08e22be9-182b-4543-a69e-364dde2af245)




# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
    - [Live Demo](#live-demo)
    <!-- - [Walkthrough](#Walkthrough) -->
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)

- [📝 License](#license)

# 📖 Connect React & Redux app to API React Project <a name="about-project"></a>

Connect React & Redux app to API React Project - Microverse! - Connect an existing API via Redux and use the data to display something in a UI. project is a repository consisting of the following files:
- Html files
- CSS files
- JS files
- Html,CSS and JS linters file

## 🛠 Built With <a name="built-with"></a>

## Tech Stack <a name="tech-stack"></a>

<ul>
  <ul>
  <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">HTML</a></li>
  <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">CSS</a></li>
      <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">JS</a></li>
      <li><a href="https://react.dev/learn/start-a-new-react-project#create-react-app">React</a></li>
</ul>


## 🔑 Key Features <a name="key-features"></a>

### React Project: [Requirements](https://github.com/microverseinc/curriculum-react-redux/blob/main/bookstore/exercises/connect_redux_api.md)

### Features Added:
- ### Instructions

You will be working with the following external API: [Random User API](https://randomuser.me/api/?results=5).

1. Create a new React application using Create React App
2. Install `@reduxjs/toolkit react-redux`
3. Create a new Redux store and connect it to your React application
   - Use `configureStore` and pass it an object with a `reducer`, which should take `users` reducer
   - Export your store as default
   - Import and wrap `<Provider>` in your top-level component and inject your `store`
4. Create a new slice of state in `src/store/users/usersSlice.js`
   - Use `createSlice` and define:
     - `name` as a string
     - `initialState`, which includes `users` as an array, `isLoading` as a boolean and `error` as undefined
     - `extraReducers` as an empty object
   - Export your reducer from your slice
   - Export the slice itself as default
   - Import the `usersSlice` into your store and assign it to your `reducer` object
5. Create a new component that will contain your fetched users:
   - Import `useSelector` and destructure your `users`, `isLoading` and `error` from your users state
   - Add a loading state; JSX content that shows when `isLoading` is true
   - Add an error state; JSX content that shows when `error` has received new content
   - Add a default state that maps over your `users` inside of an unordered list:
     - Add a `key` to the container element.
     - Render the first and last name of the user

**At this stage, you should have successfully implemented Redux Toolkit! If not, please go back to the previous steps**

6. Inside of `src/users/usersSlice.js`, create an action creator that fetches your users:
   - Import `createAsyncThunk` and instantiate it in a new variable
   - Pass your action creator 2 arguments: an action type and an asynchronous function (use the [documentation](https://redux-toolkit.js.org/api/createAsyncThunk))
   - Write your fetching logic inside of a `try/catch` block:
     - In the `try` block, return your fetched data
     - In the `catch` block, pass your error to the `rejectWithValue`
7. Inside of your `userSlice` variable, modify the `extraReducers`:
   - Replace the empty object with a function that takes 1 argument, `builder`
   - Add 3 cases with `addCase`, which takes 2 arguments: an action type and a reducer function
     - In the pending state, mutate the `isLoading` state to true
     - In the fulfilled state, mutate the `isLoading` state to false and assign the payload to the `users` state
     - In the rejected state, mutate the `isLoading` state to false and assign an error message to the `error` state
8. Back in your new component, add the following changes:
   - Import `useDispatch` and instantiate it inside of a variable within the component
   - Import `useEffect` and pass it 2 arguments: an empty function and an empty dependency array
   - Import your action creator and dispatch it inside of your `useEffect`. Be sure to add the action creator to the dependency array
9. Test to see if everything works. You should now have a working application!

  - [x] In the browser tested ; it render without problems, [this](https://benawi.github.io/Microverse-Redux-API/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🌐 Live Demo <a name="#live-demo"></a>
- [React Book Store Web App](https://benawi.github.io/Microverse-React-Bookstore/) 
- Learn More [How to deploy react app](https://github.com/gitname/react-gh-pages)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started with Create React App <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Setup

Clone this repository to your desired folder:

> cd my-folder
> git clone git@github.com:Microverse-JS-Capstone.git

### Prerequisites

In order to run this project you need:

- gitHub account;
- git installed on your OS.

### Install

> [Linters](https://github.com/microverseinc/linters-config/tree/master/html-css-js)

- Installations required to run this project:

### Install the node module

- Run the following command:

```
npm install
```
### Creat the react 
[Create react app](https://create-react-app.dev/docs/getting-started)

- Run the following command:

```
npx create-react-app my-app
cd my-app
npm start
```

### In order to import a CSS file add the style-loader and css-loader to your module configuration

- Run the following command:

```
npm install --save-dev style-loader css-loader
```

### Webhint installation.

- Run the following command:

```
npm install --save-dev hint@7.x
```

### Stylelint installation.

- Run the following command:

```
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```

### ESLint

- Run

```
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```

### Usage

You can use this project by cloning it to your folder and changing index.html and styles.css files.

### Run tests

To run tests, run the following commands:

To track linter errors locally follow these steps:

Download all the dependencies run:

```
npm install
```

Track HTML linter errors run:

```
npx hint .
```

Track CSS linter errors run:

```
npx stylelint "**/*.{css,scss}"
```

Track JavaScript linter errors run:

```
npx eslint .
```

### Deployment

You can redeploy this project by adding new lines of code to source files.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

### 👤 Habtamu Alemayehu

- GitHub: [Benawi](https://github.com/Benawi)
- Linkdin: [Habtamu](https://www.linkedin.com/in/habtamu-alemayehu-b90367101/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>
-  Add some animations style for the project💯
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, [issues](https://github.com/Benawi/Microverse-React-Bookstore/issues), and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

Give me ⭐️ If you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- We would like to thank Microverse program for providing us this great chance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
