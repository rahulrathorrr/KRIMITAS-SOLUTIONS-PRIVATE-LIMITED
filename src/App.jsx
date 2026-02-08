import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Serviceweb from './Pages/Serviceweb'
import ServiceHero from './Components/ServiceHero'
import MobileAppsSection from './Components/Mobile'
import Aipg from './Pages/Aipg'
import Bussinesspg from './Pages/Bussinesspg'
import { UiuxPg } from './Pages/UiuxPg'
import Products from './Pages/Products'
import { Contact } from 'lucide-react'
import ContactPage from './Components/ContactPage'
import PrivacyPolicy from './Components/Privacy'
import TermsConditions from './Components/Terms'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
          {
          path:"/about",
          element:<About/>,
        },
      
        
          {
          path:"/services",
          element:<Services/>
        },
      
          {
          path:"/services/web-development",
          element:<Serviceweb/>,
        },
          {
          path:"/services/mobile-apps",
          element:<MobileAppsSection/>
        },
      
          {
          path:"/services/ai-systems",
          element:<Aipg/>
        },
          {
          path:"/services/automation",
          element:<Bussinesspg/>
        },
          {
          path:"/services/ui",
          element:<UiuxPg/>
        },
          {
          path:"/products",
          element:<Products/>
        },
          {
          path:"/contact",
          element:<ContactPage/>
        },
      
          {
          path:"/get-started",
          element:<ContactPage/>
        },
      
          {
          path:"//privacy-policy",
          element:<PrivacyPolicy/>
        },
      
          {
          path:"/terms",
          element:<TermsConditions/>
        },
      
        
      ]
        }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App