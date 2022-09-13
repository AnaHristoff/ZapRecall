import InitialPage from "./components/InitialPage";
import BackgroundPage from "./components/BackgroundPage";
import LastPage from "./components/LastPage";
import { useState } from 'react';

export default function App() {
    let [logoClass, setLogoClass] = useState("initial-logo");
    let [initialPage, setInitialPage] = useState("initial-page");
    let [backgroundPage, setBackgroundPage] = useState("hidden");
    let [lastPage, setLastPage] = useState("hidden");
    let [resultTitle, setResultTitle] = useState();
    let [resultMessage, setResultMessage] = useState();
    let [resultImg, setResultImg] = useState();
    
    return (
        <>
            <InitialPage 
                initialPage={initialPage} 
                setInitialPage={setInitialPage} 
                setBackgroundPage={setBackgroundPage} 
                logoClass={logoClass} 
                setLogoClass={setLogoClass} 
            />
            <BackgroundPage 
                backgroundPage={backgroundPage} 
                setBackgroundPage={setBackgroundPage}
                logoClass={logoClass}  
                setLastPage={setLastPage}
                setResultTitle={setResultTitle}
                setResultMessage={setResultMessage}
                setResultImg={setResultImg}
            />
            <LastPage 
                lastPage={lastPage}
                setLastPage={setLastPage}
                logoClass={logoClass}
                resultTitle={resultTitle}
                resultMessage={resultMessage}
                resultImg={resultImg}
            />
        </>


    );
  }
  