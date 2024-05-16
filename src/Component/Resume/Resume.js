import React, { useEffect, useState } from 'react';
import './Resume-module.css';
import { AtSign, Calendar, GitHub, Linkedin, MapPin, Paperclip, Phone } from 'react-feather';

function Resume(props) {

    const [column, setColumn] = useState([[], []]);


    const workExpSection = (
        <div key={'workexp'} className='reSection  reWorkExp' >
        <div className='reSectionTitle'> Work Experience </div>
        <div className='reContent'>
        <div className='reItem'>
        <p className='reTitle'> Full stack developer</p>
        <p className='reSubTitle'> Company Name</p>
        <div className='reDate'>
        <Calendar/> 2/07/2002- 2/2/3333
        </div>

        <a className='reLink'>
        <Paperclip></Paperclip>
        https://www.linkedin.com/
        </a>
        
        <p className='reLocation'> <MapPin/>  remote </p>

        <div className='rePoints'>
        <li className='rePoint'> It is point one </li>
        <li className='rePoint'> It is point Two </li>
        <li className='rePoint'> It is point Three </li>
        <li className='rePoint'> It is point Four </li>

        </div>
        </div>
        </div>

        </div>
    );
    
    const projectSection = (
        <div key={'project'} className='reSection reProject ' >
        <div className='reSectionTitle'> Projects </div>
        <div className='reContent'>
        <div className='reItem'>
        <p className='reTitle'> Project One</p>
        <a className='reLink'>
        <Paperclip></Paperclip>
        https://www.linkedin.com/
        </a>
        <a className='reLink'>
        <GitHub></GitHub>
        https://www.github.com/
        </a>
        <p className='reOverview'> This is a damy Project </p>

        <div className='rePoints'>
        <li className='rePoint'> It is point one </li>
        <li className='rePoint'> It is point Two </li>
        <li className='rePoint'> It is point Three </li>
        <li className='rePoint'> It is point Four </li>

        </div>
        </div>
        </div>
        </div>
    );
    const educationSection = (
        <div key={'education'} className='reSection reEducation' >
        <div className='reSectionTitle'> 
        Education </div>
        <div className='reContent'>
        <div className='reItem'>
        <p className='reTitle'> BTech</p>
        <p className='reSubTitle'> Company Name</p>
        <div className='reDate'>
        <Calendar/> 2/07/2002- 2/2/3333
        </div>

       
        
        </div>
        </div>

        </div>
    );
    const achievementSection = (
        <div key={'achievement'} className='reSection reAchievement' >
        <div className='reSectionTitle'> Achievements </div>

        <ul className='numbered'>
        <li > Achievement 1 </li>
        <li > Achievement 2 </li>
        <li > Achievement 3 </li>
        <li > Achievement 4 </li>
        </ul>

        </div>
    );
    const summarySection = (
        <div key={'summary'} className='reSection reSummary' >
        <div className='reSectionTitle'> Summary </div>

        <div className='reContent'>
        <div className='reOverview'>
        <p>This is dumy basic summary</p>
        </div>
        </div>

        </div>
    );
    const otherSection = (
        <div key={'other'} className='reSection reOther' >
        <div className='reSectionTitle'> Other </div>
        <div className='reContent'>
        <div className='reOverview'>
        <p>This is dumy data</p>
        </div>
        </div>
        </div>
    );

    useEffect(() => {
        setColumn([
            [
                projectSection, educationSection, summarySection
            ],
            [
                workExpSection, achievementSection, otherSection
            ]
        ]);
    },[]);


  return (
    <div className='resumeContainer'>
    <div className='resumeHeader'>
    <p className='resumeHeading'> Name  </p>
    
    <p className='resumeSubHeading'>
    Web developer
    </p>


    <div className='resumeLinks'>
    <a className='resumeLink'><AtSign></AtSign> Email@gmail.com</a>
    <a className='resumeLink'><Phone></Phone>123456789</a>
    <a className='resumeLink'> <Linkedin></Linkedin> https://www.linkedin.com/</a>
    <a className='resumeLink'> <GitHub></GitHub> https://github.com/</a>
    </div>
   
    </div>
    
    <div className='reMain'>
    <div className='reCol1'> {column[0]} </div>
    <div className='reCol2'> {column[1]} </div>
    </div>


    </div>
  )
}

export default Resume