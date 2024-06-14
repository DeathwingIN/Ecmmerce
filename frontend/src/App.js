import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Views from "../src/views/index.js"


function App() {
    return (
        <div className={"App"}>
            <Router>
                <Routes>
                    <Route path={"/"} element={<Views/>}/>
                </Routes>
            </Router>
        </div>);
}

export default App;
