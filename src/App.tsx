import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages";

import i18n from "i18next";
import translations from "./assets/translations.json";
import { initReactI18next } from "react-i18next";
import Page from "./components/Page/Page";
import Resume from "./pages/resume";

i18n.use(initReactI18next).init({
  resources: translations,
  lng: "nl",
  fallbackLng: "en",
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page component={<Home />} title="Home" />,
    },
    {
      path: "/resume/:language",
      element: <Page component={<Resume />} title="Resume" />,
    },
    {
      path: "/resume",
      element: <Page component={<Resume language="en" />} title="Resume" />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
