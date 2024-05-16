import React, { useState } from 'react';
import './Body-module.css';
import { ArrowDown } from 'react-feather';
import Editor from '../Editor/Editor';
import Resume from '../Resume/Resume';

function Body() {
  const colors =['#7787DF', '#BE6DDB', '#B37595', '#6EC8B0','#C0C46F'];
  
   const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  
  return (
    <div className='container-body'>
    <p className='heading-body'> Resume Builder</p>

    <div className='toolbar'>
    <div className='colors'>
    {colors.map ((item) => (
      <span
      key={item}
      style={{backgroundColor: item}}
      className='color'
      ></span>
    ))}
    </div>
    <button>Download <ArrowDown></ArrowDown> </button>
    </div>
    <div className='editor-main'> 
    <Editor sections={sections}  information = {resumeInformation} setInformation={setResumeInformation} ></Editor>

    <Resume></Resume>

    </div>

    </div>
  )
}

export default Body