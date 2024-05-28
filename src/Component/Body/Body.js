import React, { useRef, useState } from 'react';
import './Body-module.css';
import { ArrowDown } from 'react-feather';
import ReactToPrint from "react-to-print";
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
    summary: "Career Objective",
    other: "Other",
  };


  const resumeRef = useRef();


  const [activeColor, setActiveColor] = useState(colors[0]);
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
      className='color'
      style={{ border: activeColor === item ? `2px solid black` : "" , backgroundColor: item  }}
      onClick={() => setActiveColor(item)}
      />
    ))}
    </div>


  
    <ReactToPrint
    trigger={() => {
      return (
        <button>
          Download <ArrowDown />
        </button>
      );
    }}
    content={() => resumeRef.current}
  />


    
    </div>
    <div className='editor-main'> 
    <Editor 
    sections={sections}  
    information = {resumeInformation} 
    setInformation={setResumeInformation}
    ></Editor>

    
    <Resume
    ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />

    </div>

    </div>
  )
}

export default Body