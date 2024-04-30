import React from 'react'
import HeaderComponent from '../layouts/HeaderComponent'
import FooterComponent from '../layouts/FooterComponent'

export default function NewDetailsComponent() {
    return (
        <div className='container'>
            <HeaderComponent />
            <div className='row mt-4'>
                <div className='col-md-9'>
                    <img src='https://picsum.photos/200/300' />
                    <p>

                        It seems like you're encountering an error with Vite while trying to resolve an import for a file named react.svg within your App.jsx file. The error message indicates that Vite
                        is unable to find the file. Here are a few things you can check and try to resolve this issue:


                    </p>


                </div>
                <div className='col-md-3'>
                    <h1>Related News</h1>

                </div>

            </div>


            <FooterComponent />
        </div>
    )
}
