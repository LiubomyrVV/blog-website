import { About } from "../pages/about/About";
import { Blog } from "../pages/blog/Blog";
import { Contact } from "../pages/contact/Contact";
import { Home } from "../pages/home/Home";

const ALL_ROUTES = { 
    /* -----------------------------------------------------------------*/
    // pages.length must be equal count of pages components!
    PAGES: {
        HOME: '/',
        BLOG: '/blog',
        ABOUT: '/about',
        CONTACT: '/contact'
    }, 
    COMPONENTS_ARR: [
        <Home />,
        <Blog />,
        <About />,
        <Contact />
    ],
    /* -----------------------------------------------------------------*/


    /* -----------------------------------------------------------------*/
    ROUTES: {
        PRODUCTS: '/products'
    }
    /* ------------------------------------------------------------------*/
}


export const { PAGES, ROUTES, COMPONENTS_ARR } = ALL_ROUTES;