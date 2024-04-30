import React from 'react'
import HeaderComponent from '../layouts/HeaderComponent'
import FooterComponent from '../layouts/FooterComponent'

export default function ContactComponent() {
    return (
        <div className='container'>
            <HeaderComponent />
            <div className='row mt-3 mb-3'>
                <div className='col-md-12'>
                    <h1>Contact</h1>

                </div>
            </div>

            <div className='row'>
                <div className='col-md-8'>
                    <form action="">
                        <div className='form-group mb=2'>
                            <label htmlFor='name'>Name:</label>
                            <input type="text" className='form-control' id='name' />

                        </div>
                        <div className='form-group mb=2'>
                            <label htmlFor='email'>Email:</label>
                            <input type="email" className='form-control' id='email' />

                        </div>
                        <div className='form-group mb=2'>
                            <label htmlFor='subject'>Subject:</label>
                            <input type="text" className='form-control' id='subject' />

                        </div>

                        <div className='form-group mb=2'>
                            <label htmlFor='message'>Message:</label>
                            <textarea rows='3' className='form-control' id='message'></textarea>

                        </div>

                        <div className='form-group mt-3 '>
                            <button className='btn btn-primary'>Submit</button>

                        </div>


                    </form>


                </div>
                <div className='col-md-4'>
                    <iframe width="420" height="315"
                        src="https://www.google.com/maps/@27.7086208,85.3377024,14z?entry=ttu">
                    </iframe>


                </div>
            </div>


            <FooterComponent />
        </div>
    )
}
