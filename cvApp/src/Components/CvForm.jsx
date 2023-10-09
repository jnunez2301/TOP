/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react"
import { Education } from "./Education"
import { JobExperience } from "./JobExperience"
import Customize from "./Customize"


export const CvForm = ({
    handleName, handleEmail, handlePhone, handleAdress, handleTitleDescription, handleUpdate, handleImageUpload,
    submitSchool, submitJob, cvInfo, onShowImg,
    handleEditSchool, handleEditJob
     }) => {

        const [content, setContent] = useState(true)

        const initialState = {
            name: 'Cinamon Roll',
            email: 'cinamonrollshy@sanrio.com',
            phone: '+34 912 345 876',
            adress: 'Shukuru Town, Japan',
            titleDescription: 'Passionate Sanrio character',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6AlOdAOVljUpTt0q8E_bUYPjh924yHHpczJZz3c&s',
            education: 
                [{
                    title: 'Sanrio University',
                    description: 'Degree on being the cutest Sanrio Character',
                    previousDate: '05/2023',
                    currentDate: 'Present',
                    adress: 'Tokyo, Japan'
                },
                {
                    title: 'Sanrio HighSchool',
                    description: 'Degree on funniest student',
                    previousDate: '05/2019',
                    currentDate: '12/2022',
                    adress: 'Osaka, Japan'
                }
            ],
            experience: 
                [{
                    title: 'Cutest of Sanrio CO',
                    description: 'Working hard as always on being very cute',
                    previousDate: '10/2021',
                    currentDate: 'Present',
                    adress: 'Tokyo, Japan'
                },
                {
                    title: 'Funniest of Sanrio CO',
                    description: 'Working hard as always on being funny',
                    previousDate: '01/1999',
                    currentDate: 'present',
                    adress: 'Osaka, Japan'
                }
            ]}

        const emptyInitialState = {
            name: '',
            email: '',
            phone: '',
            adress: '',
            titleDescription: '',
            img: '',
            education: [],
            experience: []
        }
            

    return (
        <aside className="cv-form">
            <div className="layout-item"
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}
            >     
                    <button
                     onClick={() => setContent(true)}
                     style={{
                        display: 'flex', 
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.3rem',
                        }}>
                    <img src="/content.svg" alt="content" />
                    Content
                    </button>
                    <button 
                    onClick={() => setContent(false)}
                    style={{
                        display: 'flex',
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        padding: '1.3rem'
                        }}>
                    <img src="/settings.svg" alt="settings" />
                    Customize
                    </button>
            </div>
            <div className="layout-item" id="clear-load">
                <button id="clear" onClick={() => handleUpdate(emptyInitialState)}>Clear resume</button>
                <button id="load" onClick={() => handleUpdate(initialState)}>Load example</button>
            </div>
            {content ? 
            <>
            <form className="layout-item">
                <label htmlFor="name">Full name</label>
                <input
                    onChange={(event) => handleName(event)}
                    type="text" id="name" name="name" placeholder="Full name" />

                <label htmlFor="email">Email</label>
                <input
                    onChange={event => handleEmail(event)}
                    type="text" id="email" name="email" placeholder="email@provider.com" />

                <label htmlFor="phone">Phone Number</label>
                <input
                    onChange={event => handlePhone(event)}
                    type="text" id="phone" name="phone" placeholder="Number: +34 612 123 123" />

                <label htmlFor="adress">Adress</label>
                <input
                    onChange={event => handleAdress(event)}
                    type="text" id="adress" name="adress" placeholder="Adress: Madrid, Spain..." />

                <label htmlFor="titleDescription">What is your field?</label>
                <input
                    onChange={event => handleTitleDescription(event)}
                    type="text" id="titleDescription" name="titleDescription" placeholder="I'm a fullstack developer..." />
                <label htmlFor="profilePic">Upload your photo</label>
                <input type="file"
                    id="profilePic"
                    name="profilePic"
                    accept="image/*"
                    onChange={event => handleImageUpload(event)}
                />
                <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
                    <p>Don not want to upload a photo?</p>
                    <button type="button" onClick={()=> onShowImg()}>Hide IMG</button>
                </div>
            </form>
            <Education 
            submitSchool={submitSchool}
            schools={cvInfo.education}
            handleEditSchool={handleEditSchool}
            />
            <JobExperience 
            submitJob={submitJob} 
            jobs={cvInfo.experience}
            handleEditJob={handleEditJob}/>
            </>
             : <Customize />
             }
            
        </aside>
    )
}
