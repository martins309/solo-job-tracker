import JobSearchForm from './components/JobSearchForm';
import SearchDetails from './components/SearchDetails'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from 'react';
import JobList from './components/JobList';


function App() {
  
const [jobList, setjobList]= useState([]);


const handleJobList = (status) => {
  setjobList(status)
}


  return (
    <div className="App">
      <h1>Welcome to job.fetch()</h1>
      <Router>
        <Route exact path='/'>
          <JobSearchForm  handleJobList={handleJobList} />  
          <JobList jobList={jobList}/>  
        </Route>
        <Route path='/location/:id'>
          <SearchDetails jobList={jobList} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
