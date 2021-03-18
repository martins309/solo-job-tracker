import JobSearchForm from './components/JobSearchForm';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
      <JobSearchForm />
      </Router>
    </div>
  );
}

export default App;
