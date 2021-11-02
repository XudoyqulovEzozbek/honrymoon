import React, {useState, useEffect} from 'react';
import HomePage from "./components/Home-page";
import Animation from "./components/animation/animation";
import Aos from "aos"
import "aos/dist/aos.css"

function App(props) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);

    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);

    return (
        <>
            {loading ? <Animation/> : <HomePage/>}
        </>
    );
}

export default App;