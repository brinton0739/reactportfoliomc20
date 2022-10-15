import { useState } from "react";
import MainRoute from "./route/route";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

const App = () => {
    const [nav, setNav] = useState('about');

    return (
        <div className="app">
            <Header currentLocation={nav} setCurrentLocation={setNav} />
            <main>
                <MainRoute />
            </main>
        </div>
    )
}

export default App;