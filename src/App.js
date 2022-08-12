import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

const NewsApp = () => {
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  // constsetProgress = (progress) =>{
  //   setState({progress : progress})
  // }

    return (
    <BrowserRouter>
      <NavBar/> 
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />  
      <Routes>
        <Route exact path="/" element={<News key="business" setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country={'in'} category={'business'}/>}/>
        <Route exact path="/entertainment" element={<News key="entertainment" setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country={'in'} category={'entertainment'}/>}/>
        <Route exact path="/general" element={<News key="general" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={'in'} category={'general'}/>}/>
        <Route exact path="/health" element={<News key="health" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={'in'} category={'health'}/>}/>
        <Route exact path="/science" element={<News key="science" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={'in'} category={'science'}/>}/>
        <Route exact path="/sports" element={<News key="sports" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={'in'} category={'sports'}/>}/>
        <Route exact path="/technology" element={<News key="technology" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={'in'} category={'technology'}/>}/>
      </Routes>
      </BrowserRouter>
    )
}

export default NewsApp;