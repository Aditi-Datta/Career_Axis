import React, { useEffect, useState } from 'react';
import   './Editor-module.css';
import InputControl from "../InputControler/InputControler";
import { X } from 'react-feather';



function Editor(props) {
  const sections = props.sections;
  const information = props.information;

    const [activeItem, setActiveItem] = useState(Object.keys(sections)[0]);

    const [activeInformation, setActiveInformation] = useState(
      information[sections[Object.keys(sections)[0]]]
    );

    const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)[0]]);

    const [activeDetailIndex, setActiveDetailIndex ] = useState(0);

    const [values, setValues] = useState({
      name: activeInformation?.detail?.name || "",
      title: activeInformation?.detail?.title || "",
      linkedin: activeInformation?.detail?.linkedin || "",
      github: activeInformation?.detail?.github || "",
      phone: activeInformation?.detail?.phone || "",
      email: activeInformation?.detail?.email || "",
    });
  
    const handlePointUpdate = (value, index) => {
      const tempValues = {...values};
      if (!Array.isArray(tempValues.points)) tempValues.points = [];
      tempValues.points[index] = value;
      setValues(tempValues);
    };

    const workExpBody = (
      <div className='detail'>
     <div className='row' >
     <InputControl label='Title' placeholder= "Enter title eg. Frontend Developer" 
     value ={values.title}

     onChange = {(event) => setValues(prev => ({...prev, title: event.target.value})) }

     />
      <InputControl label='Company Name' placeholder='Enter company name eg. amazon'
      value={values.companyName}
      onChange = {(event) => setValues(prev => ({...prev, companyName: event.target.value})) }
      />
     </div>
      
     <div className='row' >
     <InputControl label='Certificate Link' placeholder= "Enter your certificate link" value={values.certificationLink} onChange = {(event) => setValues(prev => ({...prev, certificationLink: event.target.value})) } />
      <InputControl label='Location' placeholder='Enter location eg. remote' value={values.location}
      onChange = {(event) => setValues(prev => ({...prev, location: event.target.value})) }
      />
     </div>
      
     <div className='row' >
     <InputControl label='Start Date' type='date' placeholder= "Enter start date of work" value={values.startDate}
     onChange = {(event) => setValues(prev => ({...prev, startDate: event.target.value})) }
     />
      <InputControl label='End date' type='date' placeholder='Enter end date of work' value={values.endDate} 
      onChange = {(event) => setValues(prev => ({...prev, endDate: event.target.value})) }
      />
     </div>

     <div className='column' >
     <label> Enter Work Description </label>
     <InputControl placeholder='Line 1' value={values.points ? values.points[0] : "" } 
     onChange = {(event) => handlePointUpdate(event.target.value, 0)}
     />
     <InputControl placeholder='Line 2' value={values.points ? values.points[1] : "" } 
     onChange = {(event) => handlePointUpdate(event.target.value, 1)}
     />
     <InputControl placeholder='Line 3' value={values.points ? values.points[2] : "" }
     onChange = {(event) => handlePointUpdate(event.target.value, 2)}
     />
     </div>
    </div>
    );

    const projectBody = (
      <div className='detail'>
     <div className='row' >
     <InputControl label='Title' placeholder= "Enter title eg. Chat Application"  value={values.title} 
     onChange = {(event) => setValues(prev => ({...prev, title: event.target.value})) }
     />
     </div>
      <InputControl label='Overview' placeholder='Enter basic overview of project' value={values.overview}
      onChange = {(event) => setValues(prev => ({...prev, overview: event.target.value})) }
      />
      
      
     <div className='row' >
     <InputControl label='Deployed Link' placeholder= "Enter deployed link of project" value={values.link}
     onChange = {(event) => setValues(prev => ({...prev, link: event.target.value})) }
     />
      <InputControl label='Github Link' placeholder='Enter github link of project' value={values.github} 
      onChange = {(event) => setValues(prev => ({...prev, github: event.target.value})) }
      />
     </div>
      
     
     <div className='column' >
     <label> Enter Project Description </label>
     <InputControl placeholder='Line 1' value={values.points ? values.points[0] : "" }
     onChange = {(event) => handlePointUpdate(event.target.value, 0)}
     />
     <InputControl placeholder='Line 2' value={values.points ? values.points[1] : "" }
     onChange = {(event) => handlePointUpdate(event.target.value, 1)}
     />
     <InputControl placeholder='Line 3' value={values.points ? values.points[2] : "" }
     onChange = {(event) => handlePointUpdate(event.target.value, 2)}
     />
     <InputControl placeholder='Line 4' value={values.points ? values.points[3] : "" } 
     onChange = {(event) => handlePointUpdate(event.target.value, 3)}
     />
     </div>
    </div>
    );
  
    const educationBody = (
      <div className='detail'>
     <div className='row' >
     <InputControl label='Title' placeholder= "Enter title eg. B.Sc" value={values.title}
     onChange = {(event) => setValues(prev => ({...prev, title: event.target.value})) }
     />
     </div>
      <InputControl label='School/College Name' placeholder='Enter name of your school or college' value={values.college} 
      onChange = {(event) => setValues(prev => ({...prev, college: event.target.value})) }
      />
      
      <div className='row' >
     <InputControl label='Start Date' type='date' placeholder= "Enter start date of this education" value={values.startDate} 
     onChange = {(event) => setValues(prev => ({...prev, startDate: event.target.value})) }
     />
      <InputControl label='End date' type='date' placeholder='Enter end date of this education' value={values.endDate} 
      onChange = {(event) => setValues(prev => ({...prev, endDate: event.target.value})) }
      />
     </div>
      
    </div>
    );
    
    const basicInfoBody = (
      <div className='detail'>
     <div className='row' >
     <InputControl label='Name' placeholder= "Enter your full name " value={values.name}
     onChange = {(event) => setValues(prev => ({...prev, name: event.target.value})) }
     />
     
      <InputControl label='Title' placeholder='Enter your title eg. frontend Developer' value={values.title}
      onChange = {(event) => setValues(prev => ({...prev, title: event.target.value})) }
      />
      </div>

     <div className='row' >
     <InputControl label='LinkedIn Link' placeholder= "Enter your LinkedIn profile link" value={values.linkedin}
     onChange = {(event) => setValues(prev => ({...prev, linkedin: event.target.value})) }
     />
      <InputControl label='Github Link' placeholder='Enter your github profile link' value={values.github}
      onChange = {(event) => setValues(prev => ({...prev, github: event.target.value})) }
      />
     </div>

     <div className='row' >
     <InputControl label='Email' placeholder= "Enter your email" value={values.email}
     onChange = {(event) => setValues(prev => ({...prev, email: event.target.value})) }
     />
      <InputControl label='Enter Phone' placeholder='Enter your phone number' value={values.phone}
      onChange = {(event) => setValues(prev => ({...prev, phone: event.target.value})) }
      />
     </div>

    </div>
    );

    const achievementBody = (
      <div className='detail' >
      <div className='column' >
      <label> List your achievements </label>
      <InputControl 
      placeholder='Line 1' 
      value={values.points ? values.points[0] : "" } onChange = {(event) => handlePointUpdate(event.target.value, 0)}
      />
     <InputControl 
     placeholder='Line 2' 
     value={values.points ? values.points[1] : "" } 
     onChange = {(event) => handlePointUpdate(event.target.value, 1)} 
     />
     <InputControl 
     placeholder='Line 3' 
     value={values.points ? values.points[2] : "" } onChange = {(event) => handlePointUpdate(event.target.value, 2)} 
     />
     <InputControl 
     placeholder='Line 4' 
     value={values.points ? values.points[3] : "" } onChange = {(event) => handlePointUpdate(event.target.value, 3)} 
     />
      </div>
      </div>
    );

    const summaryBody = (
      <div className='detail' >
      <InputControl label = "Summary" placeholder='Enter your objects/summary' value={values.summary} onChange = {(event) => setValues(prev => ({...prev, summary: event.target.value})) } />
      </div>
    );

    const otherBody = (
      <div className='detail' >
      <InputControl label = "Other" placeholder='Enter something' value={values.other} onChange = {(event) => setValues(prev => ({...prev, other: event.target.value})) } />
      </div>
    );


    const generateBody = () => {
      switch(sections[activeItem]){
        case sections.basicInfo: return basicInfoBody;
        case sections.workExp: return workExpBody;
        case sections.project: return projectBody;
        case sections.education: return educationBody;
        case sections.achievement: return achievementBody;
        case sections.summary: return summaryBody;
        case sections.other: return otherBody;

        default: return null;
      }
    };

    const handleSubmission = () => {
      switch(sections[activeItem]){
        case sections.basicInfo:  {
          const tempDetail = {
            name: values.name,
            title: values.title,
            linkedin: values.linkedin,
            github: values.github,
            email: values.email,
            phone: values.phone,
          };
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.basicInfo]: {
              ...prev[sections.basicInfo],
              detail: tempDetail,
              sectionTitle,
            },
          }));
          break;
        }

        case sections.workExp: {
          const tempDetail = {
            certificationLink: values.certificationLink,
            title: values.title,
            startDate: values.startDate,
            endDate: values.endDate,
            companyName: values.companyName,
            location: values.location,
            points: values.points,
          };
          const tempDetails = [...information[sections.workExp]?.details];
          tempDetails[activeDetailIndex] = tempDetail;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.workExp]: {
              ...prev[sections.workExp],
              details: tempDetails,
              sectionTitle,
            },
          }));
          break;
        }

        case sections.project: {
          const tempDetail = {
            link: values.link,
            title: values.title,
            overview: values.overview,
            github: values.github,
            points: values.points,
          };
          const tempDetails = [...information[sections.project]?.details];
          tempDetails[activeDetailIndex] = tempDetail;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.project]: {
              ...prev[sections.project],
              details: tempDetails,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.education: {
          const tempDetail = {
            title: values.title,
            college: values.college,
            startDate: values.startDate,
            endDate: values.endDate,
          };
          const tempDetails = [...information[sections.education]?.details];
          tempDetails[activeDetailIndex] = tempDetail;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.education]: {
              ...prev[sections.education],
              details: tempDetails,
              sectionTitle,
            },
          }));
          break;
        }

        

        case sections.achievement: {
          const tempPoints = values.points;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.achievement]: {
              ...prev[sections.achievement],
              points: tempPoints,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.summary: {
          const tempDetail = values.summary;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.summary]: {
              ...prev[sections.summary],
              detail: tempDetail,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.other: {
          const tempDetail = values.other;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.other]: {
              ...prev[sections.other],
              detail: tempDetail,
              sectionTitle,
            },
          }));
          break;
        }
      }

    }


    const handleAddNew = () => {
      const details = activeInformation?.details;
      if (!details) return;
      const lastDetail = details.slice(-1)[0];
      if (!Object.keys(lastDetail).length) return;
      details?.push({});
  
      props.setInformation((prev) => ({
        ...prev,
        [sections[activeItem]]: {
          ...information[sections[activeItem]],
          details: details,
        },
      }));
      setActiveDetailIndex(details?.length - 1);
    };

    const handleDeleteDetail = (index) => {
      const details = activeInformation?.details
        ? [...activeInformation?.details]
        : "";
      if (!details) return;
      details.splice(index, 1);
      props.setInformation((prev) => ({
        ...prev,
        [sections[activeItem]]: {
          ...information[sections[activeItem]],
          details: details,
        },
      }));
  
      setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
    };
  

    useEffect (() => {
      const activeInfo = information[sections[activeItem]];

      setActiveInformation(activeInfo);

      setSectionTitle(sections[activeItem]);
      setActiveDetailIndex(0);

       setValues({
      name: activeInfo?.detail?.name || "",
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
      certificationLink: activeInfo?.details
        ? activeInfo.details[0]?.certificationLink || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ""
        : "",
      college: activeInfo?.details
        ? activeInfo.details[0]?.college || ""
        : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",
      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo?.detail?.github || "",
      phone: activeInfo?.detail?.phone || "",
      email: activeInfo?.detail?.email || "",
      summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
      other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
    });

    

    }, [activeItem]);


    useEffect(() => {
      setActiveInformation(information[sections[activeItem]]);
    }, [information]);
  
  
    useEffect(() => {
      const details = activeInformation?.details;
      if (!details) return;
  
      const activeInfo = information[sections[activeItem]];
      setValues({
        overview: activeInfo.details[activeDetailIndex]?.overview || "",
        link: activeInfo.details[activeDetailIndex]?.link || "",
        certificationLink:
          activeInfo.details[activeDetailIndex]?.certificationLink || "",
        companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
        location: activeInfo.details[activeDetailIndex]?.location || "",
        startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
        endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
        points: activeInfo.details[activeDetailIndex]?.points || "",
        title: activeInfo.details[activeDetailIndex]?.title || "",
        linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
        github: activeInfo.details[activeDetailIndex]?.github || "",
        college: activeInfo.details[activeDetailIndex]?.college || "",
      });
    }, [activeDetailIndex]);

  return (
   
    <div className='editor-container'>

    <div className='editor-header'>
   
 
    {Object.keys(sections)?.map((item) => (
      <div className= 'editorSection '
        key={item}
        onClick={() => setActiveItem(item)}

        style={{ color: activeItem === item ? '#b7e629': '' , fontWeight: activeItem === item ? 'bolder': '' ,  borderBottom: activeItem === item ? '2px solid #b7e629': ''   
          
        }}
     > 
    {sections[item]}
   
        </div>
    ))}
    </div>
   

    <div className='editor-body' >
    <InputControl label="Title" placeholder = "Enter section title" 
    value={sectionTitle}
    onChange = {(event) => setSectionTitle (event.target.value)}
    />

    <div className='chips' >
   
    {
      activeInformation?.details
      ? activeInformation?.details?.map((item,index) => (
        
        <div className='chip' 
        style={{  
          backgroundColor: activeDetailIndex === index ? '#b7a81e': ''  , 
        
        }}
        onClick={() => setActiveDetailIndex(index)}
        key={item.title+index} >
        <p>
        {sections[activeItem]} {index+1} 
        </p>
        <X 
        onClick={(event) => {
          event.stopPropagation();
          handleDeleteDetail(index);
        }}
        />
        </div>
      ))
      : ""}

      {activeInformation?.details &&
        activeInformation?.details?.length > 0 ? (
          <div className='new' onClick={handleAddNew}>
            +New
          </div>
        ) : (
          ""
        )}

      </div>

    {generateBody()}

    <button className='savebtn' onClick={handleSubmission} > Save </button>

    </div>
     </div>

    


    
  )
}

export default Editor