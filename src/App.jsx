
import { HomePage } from './Pages/HomePage.jsx';
import { LoginPage } from './Pages/LoginPage.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NewUserPage } from './Pages/NewUserPage.jsx';
function App() {
     const Router=createBrowserRouter([
      {path:"/",element:<LoginPage></LoginPage>},
      {path:"/HomePage",element:<HomePage></HomePage>},
      {path:"/NewUser",element:<NewUserPage></NewUserPage>}
     ]);

  return (
    <>
     <RouterProvider router={Router}></RouterProvider>
    </>
  )
}

export default App
