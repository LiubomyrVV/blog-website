import { useLocation } from 'react-router-dom';
import { COMPONENTS_ARR, PAGES } from './router/routes';

import { generateComponentTable } from './functions/functions';
import './styles/App.css';
import { useEffect } from 'react';
import { screen } from './functions/Screen';






function App() {
  const { pathname } = useLocation()
  const navigationTable = generateComponentTable(PAGES, COMPONENTS_ARR)
 

  useEffect(() => {
    const isRedirectFromFooter = localStorage.getItem('isRedirectFromFooter')
    if (isRedirectFromFooter) {
      screen.scrollDown()
      localStorage.removeItem('isRedirectFromFooter')
    }
   
    screen.scrollUp()
  }, [pathname])
  
  return (
    <div className='wrapper'>
       {
        navigationTable[pathname] // redirect user on pages
       }
    </div>
   
  );
}

export default App;
