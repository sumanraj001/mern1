import React from 'react'
import {  Routes, Route} from 'react-router-dom'
import HomeComponent from '../components/pages/HomeComponent'
import AboutComponent from '../components/pages/AboutComponent'
import ContactComponent from '../components/pages/ContactComponent'
import NewComponent from '../components/pages/NewComponent'
import NewDetailsComponent from '../components/pages/NewDetailsComponent'
import PageNotFoundComponent from '../components/error/PageNotFoundComponent'
import AdminMiddlewareComponent from '../middleware/AdminMiddlewareComponent'
import DashboardComponent from '../components/admin/DashboardComponent'
import AddNewsComponent from '../components/admin/AddNewsComponent'
import ShowNewsComponent from '../components/admin/ShowNewsComponent'
import LoginComponent from '../components/auth/LoginComponent'
import RegisterComponent from '../components/auth/RegisterComponent'



export default function RouterComponent() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='about' element={<AboutComponent/>}/>
        <Route path='contact' element={<ContactComponent/>}/>
        <Route path='news' element={<NewComponent/>}/>
        <Route path='login' element={<LoginComponent/>}/>
        <Route path='register' element={<RegisterComponent/>}/>
        <Route path='news-details/:id' element={<NewDetailsComponent/>}/>
        {/* ============ Admin Dashboard========================== */}
        <Route path='/admin' element={<AdminMiddlewareComponent/>}>
        <Route path='/admin' element={<DashboardComponent/>}/>
        <Route path='add-news' element={<AddNewsComponent/>}/>
        <Route path='show-news' element={<ShowNewsComponent/>}/>

          </Route>
          {/* ===============End Admin Dashboard===================== */}

          

        <Route path='*' element={<PageNotFoundComponent/>}/>
        
        
       

    </Routes>
    
     </>
  )
}
