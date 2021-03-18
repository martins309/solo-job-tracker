import { useState } from 'react';
import SearchCardList from './SearchDetails';
import { Route, Link} from 'react-router-dom'



const JobSearchForm = () => {
   const [search, setSearch] = useState('');
   const [jobList, setjobList]= useState([]);
   
    const _handleSubmit = async (e) => {
        e.preventDefault();

        const searchData = await fetch(`http://127.0.0.1:3001/search/?url=https://jobs.github.com/positions.json?description=${search}`, {
            method: 'Get',
            headers: { 'Content-Type': 'application/json'}
        }).then(
            (response) => (response.json())
        );
        console.log("Here are the search results: ", searchData);
        setjobList(searchData);
    }


    const _onChange = (e) => {
        setSearch(e.target.value)
    }

   
        return (
        <>
                <div>
                    <form onSubmit={_handleSubmit}>
                        <label>
                            <input 
                            name="searchQuery"
                            placeholder="Enter a language"
                            value={search}
                            type="text"
                            onChange={_onChange}
                            />
                        </label>
                            <button type="submit">Search</button>
                    </form>
                </div>
                <Route exact path='/'>
                    <ul>
                        {jobList.map((job, index) => {
                            return (
                                <li key={index}>
                                   <Link to ={`/search${job.id}`}>{job.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </Route>
            </>
        )
    }



export default JobSearchForm;