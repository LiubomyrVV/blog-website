import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import App from "../App";
import { PAGES, ROUTES  } from "./routes";

export const router = createBrowserRouter([
 /* ----------------------------------PAGES--STARTS----------------------------------------------- */ 
  {
    path: PAGES.HOME,
    element: <App />,
  },
  {
    path: PAGES.BLOG,
    element: <App />,
  },
  {
    path: PAGES.ABOUT,
    element: <App />,
  },
  {
    path: PAGES.CONTACT,
    element: <App />,
  },
  /* ---------------------------------PAGES--ENDS----------------------------------------------- */ 


  /* --------------------------------ROUTES--STARTS----------------------------------------------- */ 
  {
    path: ROUTES.PRODUCTS,
    element: <App />,
  },
  /* --------------------------------ROUTES--ENDS----------------------------------------------- */ 
]);

