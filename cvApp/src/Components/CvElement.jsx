export const CvElement = () => {
  return (
    <section className="cv-element">
                <div className="cv-title">
                    <div>
                        <h2>Full name</h2>
                        <p>josephine.meyers@mail.co.uk</p>
                        <p>+44 3245 5521 5521</p>
                        <p>London, UK</p>
                    </div>
                    <figure>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6AlOdAOVljUpTt0q8E_bUYPjh924yHHpczJZz3c&s" alt="profile-pic"/>
                    </figure>
                </div>
                <div>
                    <h3 className="cv-part">Education</h3>
                    <div className="cv-experience">
                        <div>
                            <p>10/2023 - Present</p>
                            <p>Country Adress</p>
                        </div>
                        <div>
                            <p className="sub-title">University</p>
                            <p>Degreee</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="cv-part">Professional Experience</h3>
                    <div className="cv-experience">
                        <div>
                            <p>Date - Date</p>
                            <p>Adress</p>
                        </div>
                        <div>
                            <p className="sub-title">Company name</p>
                            <ul>
                                <li>Things you did</li>
                                <li>Things you did</li>
                                <li>Things you did</li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="cv-experience">
                        <div>
                            <p>Date - Date</p>
                            <p>Adress</p>
                        </div>
                        <div>
                            <p className="sub-title">This is a very large company name so it suits</p>
                            <ul>
                                <li>This is a very large thing to describe about my experience</li>
                                <li>This is another very large thing to describe my previous experience</li>
                                <li>More and more things to describe my prev experience</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
  )
}
