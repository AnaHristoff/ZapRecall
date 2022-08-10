import InitialPage from "./components/InitialPage";
import BackgroundPage from "./components/BackgroundPage";
import { useState } from 'react';

export default function App() {
    let [logoClass, setLogoClass] = useState("initial-logo");
    let [initialPage, setInitialPage] = useState("initial-page");
    let [backgroundPage, setBackgroundPage] = useState("hidden");
    
    return (
        <>
            <InitialPage 
                initialPage={initialPage} 
                setInitialPage={setInitialPage} 
                backgroundPage={backgroundPage} 
                setBackgroundPage={setBackgroundPage} 
                logoClass={logoClass} 
                setLogoClass={setLogoClass} 
            />
            <BackgroundPage 
                backgroundPage={backgroundPage} 
                setBackgroundPage={setBackgroundPage}
                logoClass={logoClass}  
            />
        </>


    );
  }
  