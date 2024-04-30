import React from 'react'
import HeaderComponent from '../layouts/HeaderComponent'
import FooterComponent from '../layouts/FooterComponent'

export default function AboutComponent() {
    return (
        <div className='container'>
            <HeaderComponent />
            <div className='row mt-3 mb-3'>
                <div className='col-md-12'>
                    <h1>Hello About</h1>

                </div>

            </div>
            <div className='row'>
                <div className='col-md-8'>
                    <p>
                        MyPerfectWord's Essay Typer is an essay writing assistant driven by Artificial Intelligence (AI).
                        Provide the topic and prompt, and it aids in locating inspiring resources, offers sentence paraphrasing, and crafts complete sentences using AI.
                        If you're concerned about passing through plagiarism detection tools like Turnitin, rest easy.It rephrases content, eliminating plagiarism worries.
                        Additionally, it now features a citation tool that seamlessly integrates references suited to your essay.
                    </p>
                    <p>
                        MyPerfectWord's Essay Typer is an essay writing assistant driven by Artificial Intelligence (AI).
                        Provide the topic and prompt, and it aids in locating inspiring resources, offers sentence paraphrasing, and crafts complete sentences using AI.
                        If you're concerned about passing through plagiarism detection tools like Turnitin, rest easy.It rephrases content, eliminating plagiarism worries.
                        Additionally, it now features a citation tool that seamlessly integrates references suited to your essay.
                    </p>

                </div>
                <div className='col-md-4'>
                    <img src='https://picsum.photos/200/300' className=' img-fluid' alt='alter image' />

                </div>

            </div>
            <FooterComponent />

        </div>
    )
}
