/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Education } from "./Education"
import { JobExperience } from "./JobExperience"


export const CvForm = ({
     handleName, handleEmail, handlePhone, handleAdress, handleTitleDescription, handleUpdate, handleImageUpload }) => {



    return (
        <aside className="cv-form">
            <div className="layout-item">
                <button>Content</button>
                <button>Customize</button>
            </div>
            <div className="layout-item" id="clear-load">
                <button id="clear" onClick={() => handleUpdate({})}>Clear resume</button>
                <button id="load" >Load example</button>
            </div>
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

            </form>
            <Education />
            <JobExperience />
        </aside>
    )
}
