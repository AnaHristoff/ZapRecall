import Logo from './Logo';

export default function LastPage({ lastPage, setLastPage, logoClass, resultTitle, resultMessage, resultImg }){
    
    return (
        <div className={lastPage}>
            <Logo logoClass={logoClass}/>
            <div className='lastPage-result'>
                <div className='title'>
                    <h1>{resultTitle}</h1>
                    <img src={resultImg} alt='result img'></img>
                </div>
                <p>{resultMessage}</p>
            </div>
        </div>
    );
}