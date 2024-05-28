import React, {forwardRef, useEffect, useRef, useState } from 'react';
import './Resume-module.css';
import { AtSign, Calendar, GitHub, Linkedin, MapPin, Paperclip, Phone } from 'react-feather';



const Resume = forwardRef((props, ref) => {

    const information = props.information;
    const sections = props.sections;
    const activeColor = props.activeColor;
    const containerRef = useRef();

    const [column, setColumn] = useState([[], []]);
    const [source, setSource] = useState("");
    const [target, seTarget] = useState("");
  

    const info = {
        workExp: information[sections.workExp],
        project: information[sections.project],
        achievement: information[sections.achievement],
        education: information[sections.education],
        basicInfo: information[sections.basicInfo],
        summary: information[sections.summary],
        other: information[sections.other],
      };

      const getFormattedDate = (value) => {
        if (!value) return "";
        const date = new Date(value);
    
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      };
    
      const sectionDiv  = {
        [sections.workExp]:(
        <div key={'workexp'}
        draggable
        onDragOver={() => seTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className='reSection ' 
        style = {{display: info.workExp?.sectionTitle ? "" : 'none' }}
        >
        <div className='reSectionTitle'> {info.workExp.sectionTitle}  </div>
        <div className='reContent'>
        {info.workExp?.details?.map((item) => (
        <div className='reItem' key={item.title}>
        {item.title ? (
            <p className='reTitle'>{item.title}</p>
          ) : (
            <span />
          )}

          {item.companyName ? (
            <p className='reSubTitle'>{item.companyName}</p>
          ) : (
            <span />
          )}
        
          {item.certificationLink ? (
            <a className='reLink' href={item.certificationLink}>
              <Paperclip />
              {item.certificationLink}
            </a>
          ) : (
            <span />
          )}
        
          {item.startDate && item.endDate ? (
            <div className='reDate'>
              <Calendar /> {getFormattedDate(item.startDate)}-
              {getFormattedDate(item.endDate)}
            </div>
          ) : (
            <div />
          )}

          {item.location ? (
            <p className='reDate'>
              <MapPin /> {item.location}
            </p>
          ) : (
            <span />
          )}
        
          {item.points?.length > 0 ? (
            <ul className='rePoints'>
              {item.points?.map((elem, index) => (
                <li className='rePoint' key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
          </div>
        ))}
      </div>
    </div>
    ),

    [sections.project]: (
        <div key={'project'}
        draggable
        onDragOver={() => seTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className='reSection ' 
        style = {{display: info.project?.sectionTitle ? "" : 'none' }}
        >
        <div className='reSectionTitle'> {info.project.sectionTitle} </div>
        <div className='reContent'>
        {info.project?.details?.map((item) => (

        <div className='reItem'>
        {item.title ? (
            <p className='reTitle'>{item.title}</p>
          ) : (
            <span />
          )}
        
          {item.link ? (
            <a className='reLink' href={item.link}>
              <Paperclip />
              {item.link}
            </a>
          ) : (
            <span />
          )}
          {item.github ? (
            <a className='reLink' href={item.github}>
              <GitHub />
              {item.github}
            </a>
          ) : (
            <span />
          )}
        
          {item.overview ? (
            <p className='reOverview'>{item.overview} </p>
          ) : (
            <span />
          )}
        
          {item.points?.length > 0 ? (
            <ul className='rePoints'>
              {item.points?.map((elem, index) => (
                <li className='rePoint' key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
          </div>
        ))}
      </div>
    </div>
    ),

    [sections.education]: (
        <div key={'education'}
        draggable
        onDragOver={() => seTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
        className='reSection ' 
        style = {{display: info.education?.sectionTitle ? "" : 'none' }}
        >
        <div className='reSectionTitle'> 
        {info.education?.sectionTitle} </div>
        <div className='reContent'>
        {info.education?.details?.map((item) => (
        <div className='reItem'>
        {item.title ? (
            <p className='reTitle'>{item.title}</p>
          ) : (
            <span />
          )}
          {item.college ? (
            <p className='reSubTitle'>{item.college}</p>
          ) : (
            <span />
          )}
          {item.startDate && item.endDate ? (
            <div className='reDate'>
              <Calendar /> {getFormattedDate(item.startDate)} -
              {getFormattedDate(item.endDate)}
            </div>
          ) : (
            ""
          )}
          </div>
        ))}
      </div>
    </div>
    ),

    
    
  

    [sections.achievement]: (
      <div
        key={"achievement"}
        draggable
        onDragOver={() => seTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
        className='reSection ' 
        style = {{display: info.achievement?.sectionTitle ? "" : 'none' }}
      >
        <div className='reSectionTitle'>
          {info.achievement?.sectionTitle}
        </div>
        <div className='reContent'>
          {info.achievement?.points?.length > 0 ? (
            <ul className='numbered'>
              {info.achievement?.points?.map((elem, index) => (
                <li className='rePoint' key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),

    [sections.summary]: (
        <div key={'summary'} 
        draggable
        onDragOver={() => seTarget(info.summary?.id)}
        onDragEnd={() => setSource(info.summary?.id)}
        className='reSection ' 
        style = {{display: info.summary?.sectionTitle ? "" : 'none' }}
        >
        <div className='reSectionTitle'> {info.summary?.sectionTitle} </div>

        <div className='reContent'>
        <p className='reOverview'>{info.summary?.detail}</p>
        </div>

        </div>
    ),

    [sections.other]: (
        <div key={'other'}
        draggable
        onDragOver={() => seTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
        className='reSection' 
        style = {{display: info.other?.sectionTitle ? "" : 'none' }}
        >
        <div className='reSectionTitle'>{info.other?.sectionTitle}</div>
        <div className='reContent'>
        <p className='reOverview'>{info?.other?.detail}</p>
        </div>
        </div>
    ),
      };

    
      const swapSourceTarget = (source, target) => {
        if (!source || !target) return;
        const tempColumns = [[...column[0]], [...column[1]]];
    
        let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
        let sourceColumnIndex = 0;
        if (sourceRowIndex < 0) {
          sourceColumnIndex = 1;
          sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
        }
    
        let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
        let targetColumnIndex = 0;
        if (targetRowIndex < 0) {
          targetColumnIndex = 1;
          targetRowIndex = tempColumns[1].findIndex((item) => item === target);
        }
    
        const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
        tempColumns[sourceColumnIndex][sourceRowIndex] =
          tempColumns[targetColumnIndex][targetRowIndex];
    
        tempColumns[targetColumnIndex][targetRowIndex] = tempSource;
    
        setColumn(tempColumns);
      };
   
   
    useEffect(() => {
        setColumn([
            [sections.project, sections.education, sections.summary],
      [sections.workExp, sections.achievement, sections.other],
        ]);
    },[]);

    useEffect(() => {
        swapSourceTarget(source, target);
      }, [source]);
    
      useEffect(() => {
        const container = containerRef.current;
        if (activeColor || container) 
          container.style.setProperty("--color", props.activeColor);
      }, [activeColor]);
    


  return (
  
   <div ref={ref}  >
   <div ref={containerRef} className='resumeContainer'>
  
   <div className='resumeHeader'>
   <p className='resumeHeading'> {info.basicInfo?.detail?.name} </p>
   
   <p className='resumeSubHeading'>
   {info.basicInfo?.detail?.title}
   </p>

   <div className='resumeLinks'>
  
   {info.basicInfo?.detail?.email ? (
       <a className='resumeLink' type="email">
         <AtSign /> {info.basicInfo?.detail?.email}
       </a>
     ) : (
       <span />
     )}
     {info.basicInfo?.detail?.phone ? (
       <a className='resumeLink'>
         <Phone /> {info.basicInfo?.detail?.phone}
       </a>
     ) : (
       <span />
     )}
     {info.basicInfo?.detail?.linkedin ? (
       <a className='resumeLink'>
         <Linkedin /> {info.basicInfo?.detail?.linkedin}
       </a>
     ) : (
       <span />
     )}
   
     {info.basicInfo?.detail?.github ? (
       <a className='resumeLink'>
         <GitHub /> {info.basicInfo?.detail?.github}
       </a>
     ) : (
       <span />
     )}
  
   </div>
  
   </div>
   
   <div className='reMain'>
   <div className='reCol1'>
   {
       column[0].map(item => sectionDiv[item])
   }
   </div>
   <div className="cv-middle-border"></div>
   <div className='reCol2' > 
   {
       column[1].map((item) => sectionDiv[item])
   }
   </div>
   </div>
   </div>
   </div>
  );
});

export default Resume;