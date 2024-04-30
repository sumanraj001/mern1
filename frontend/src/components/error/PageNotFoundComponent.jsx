import React from 'react'
import HeaderComponent from '../layouts/HeaderComponent'
import FooterComponent from '../layouts/FooterComponent'
import { Link } from 'react-router-dom'

export default function PageNotFoundComponent() {
  return (
    <div className='container'>
        <HeaderComponent/>
        <div className='row mt-4'>
            <div className='col-md-12'>
                <h3 className='mb-3'>PageNotFoundComptonen</h3>
                <Link to='/ ' className='btn btn-primary'>Go To Home Page</Link>

            </div>
        </div>
        
        <FooterComponent/>
    </div>
  )
}
