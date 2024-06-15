import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Views from "../src/views/index.js"

import {Provider} from "react-redux"
import store from "../src/redux/store/index"
import Header from "../src/components/shared/Header"

function App() {
    return (
        <div className={"App"}>

            <Provider store={store}>
                <Router>
                    <Header/>
                    <Routes>
                        <Route path={"/"} element={<Views/>}/>
                    </Routes>
                </Router>
            </Provider>
        </div>);
}

export default App;
