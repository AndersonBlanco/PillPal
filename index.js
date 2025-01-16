import { registerRootComponent } from 'expo';

import App from './App';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import {name as appName} from "./app.json"; 
import { store } from './store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

const RootComponent = () => (
    <Provider store = {store}>
        <GestureHandlerRootView><App/></GestureHandlerRootView>
    </Provider>
)
//AppRegistry.registerComponent(appName, RootComponent); 
registerRootComponent(RootComponent); 