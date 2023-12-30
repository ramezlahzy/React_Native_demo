import AppNavigation from "./src/navigation";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { NativeBaseProvider, Center } from "native-base";
import theme from './assets/styles/theme';

export default function App() {
  const store = configureStore({
    reducer: {},
  });
  return (
    <NativeBaseProvider theme={theme}>

    <Provider store={store}>
      <AppNavigation />
    </Provider>
    </NativeBaseProvider>

  );
}
