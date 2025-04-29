import Layout from "./module/ui/components/Layout.jsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/configureStore.js";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Layout></Layout>
          </BrowserRouter>
      </Provider>
    );
}

export default App
