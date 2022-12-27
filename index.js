/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import { configureStore } from "./store/index";
// import { Provider } from "react-redux";
// const { store } = configureStore();
// AppRegistry.registerComponent(appName, () =>(
//     <Provider store={store}>
//         <App />
//     </Provider>
// ));

AppRegistry.registerComponent(appName, () =>App);
