# CRA Hooks Store Boilerplate

A simple project that is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with added boilerplate for global state management using the native React Hooks.

## State Management

You can find the state management codes under the `src/store` directory. If you're familiar with React Redux then you'll have no problem understanding the code structure.

```
- actions.js
- reducers.js
- types.js
- StoreContext.js
```

## Example Components

You can find some of the example components that are using the state hooks under `src/components` directory.

```
- Button.js
- Logo.js
```

## Usage

Clone this repository

```
git clone https://github.com/ryanbaldisco/cra-hooks-store-boilerplate.git <project-folder>
cd <project-folder>
```

Install dependencies

```
npm install
```

Run development

```
npm start
```

### Global state management implementation

Wrap your app components that needs to access the states with the store provider.

```
import { StoreProvider } from './store/StoreContext';

function App() {
    return (
        <StoreProvider>
            <div className="App">
                // children components
            </div>
        </StoreProvider>
    );
}

export default App;
```

Access your global states and actions in the children components.

```
.
.
.
import { StoreContext } from '../store/StoreContext';

function Logo() {
    const { state } = useContext(StoreContext);

    return (
        <img src={logo} className="App-logo" alt="logo"
            style={{
              animation: `${state.spin_cls_dir} infinite 20s linear`,
            }}
        />
    );
}
.
.
.

function Button() {
    const { actions } = useContext(StoreContext);

    return (
        <button
            onClick={() => actions.spinLogo()}
        >
            Button
        </button>
    );
}
```

### That's it!

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

# cra-hooks-store-boilerplate
