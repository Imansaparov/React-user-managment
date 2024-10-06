import { createBrowserRouter, } from "react-router-dom";

import { Layout } from "@/app/layout";

import { paths } from "@/shared/paths";
import {Home} from "@/pages/home";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
          {
            path: paths.home,
            element: <Home />,
          },
    ],
  },
]);
