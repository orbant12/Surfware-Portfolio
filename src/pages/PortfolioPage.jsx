import { useParams } from "react-router-dom";
import React,{useEffect} from 'react';
import '../CSS/navbar.css';
import {ClippifyData,LupodyData,LupodyMobileData,ClippifyMobileData} from '../portfolio.jsx'
import GitHubIcon from '@mui/icons-material/GitHub';


const PortfolioPage = () => {

const { id } = useParams();


const [pageData,setPageData] = React.useState({title:"",list:[],expertise:[{logo:"",title:"",text:[]}]});





useEffect(() => {
    if(id == "Clippify"){
        setPageData(ClippifyData);
    }else if(id == "Lupody"){
        setPageData(LupodyData);
    }else if(id == "Lupody Mobile"){
        setPageData(LupodyMobileData);
    }else if(id == "Clippify Mobile"){
        setPageData(ClippifyMobileData);
    }
},[]);

return(
    <div className="portfolio-page" >
        <div className="intro-box">
            <div className="intro-left-bar">
                <h3 className="intro-left-title">{id}</h3>
                <ul className="intro-left-list">
                    {pageData.list.map((item,index) => {
                        return(
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>
                <div style={{marginTop:40,marginBottom:20,width:"100%",display:"flex"}}>
                    <a className="tryFree" href={pageData.navigation}>Try it for Free</a>
                </div>
            </div>
            <iframe className="youtube-frame" src={pageData.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
        </div>

        <div className="this-project-box">
            <h3 className="this-project-title">This Project <br /> Made Me an Expert In</h3>
            {pageData.expertise.map((item, index) => {
                return (
                    <div>
                           <div className="github-link">
                            <GitHubIcon />
                        </div>
                    <div className={index % 2 == 0 ? "experience-box" : "experience-box-reverse"} key={index}>
                 
                        <img className="exp-img" src={item.logo} alt="" />
                        <div className="exp-text">
                            
                            <h4 className="exp-title">{item.title}</h4>
                            <ul>
                                {item.text.map((item2, index2) => {
                                    return (
                                        <li key={index2}>{item2}</li>
                                    )
                                })}
                            </ul> 
                        </div>
                     
                    </div>
                  
                    <div className="experience-show">
                        {item.show && item.show()}
                    
                    </div>
                
                </div>
                );
            })}
        </div>
    </div>
)
}

export default PortfolioPage;