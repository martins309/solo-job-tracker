import JobSearchForm from './components/JobSearchForm';
import SearchDetails from './components/SearchDetails'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from 'react';
import JobList from './components/JobList';
import LoginPage from './components/LoginPage'
import { useAuth0 } from "@auth0/auth0-react"
import styled from 'styled-components'







function App() {

const Button = styled.button`
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  background:#4e90e7;
`;

// const Wrapper = styled.div`
//   background: #4e90e7;
//   min-width: 100vw;
//   min-height: 100vw;
//   position: absolute;
//   height: 100vh;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   box-sizing: border-box;
// `;
  
const [jobList, setjobList]= useState([]);
 const { isLoading } = useAuth0();

 if (isLoading) return <div>Loading</div>


const handleJobList = (status) => {
  setjobList(status)
}



  return (
    <div className="App" style={{backgroundColor: "#4e90e7", minWidth: "100vw", minHeight:"100vw", position:"absolute", overflow: "hidden"}}>
      
      <Router>
          <Route exact path='/'>
          <h1>Welcome to job.fetch()</h1>
            <LoginPage />  
            <JobSearchForm  handleJobList={handleJobList} />
            <JobList jobList={jobList} />  
          </Route>
          <Route path='/:id'>
            <SearchDetails jobList={jobList} />
          </Route>
      </Router>
    </div>
  );
}

export default App;
