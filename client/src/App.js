import { useLocation } from 'react-router-dom';
import { COMPONENTS_ARR, PAGES } from './router/routes';

import { generateComponentTable } from './functions/functions';
import './styles/App.css';
import React, { useEffect, useState } from 'react';
import { screen } from './functions/Screen';
import { Preloader } from './components/preloader/Preloader';






function App() {
  const { pathname } = useLocation()
  const navigationTable = generateComponentTable(PAGES, COMPONENTS_ARR)
  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2800);
  }, []);

  useEffect(() => {
    const isRedirectFromFooter = localStorage.getItem('isRedirectFromFooter')
    if (isRedirectFromFooter) {
      screen.scrollDown()
      localStorage.removeItem('isRedirectFromFooter')
    }
   
    screen.scrollUp()
  }, [pathname])
  
  return (
    <>
    
     <Preloader screenLoading={screenLoading} />
    <div className='wrapper'>
       {
        navigationTable[pathname] // redirect user on pages
       }
    </div>
    </>
  );
}

export default App;
