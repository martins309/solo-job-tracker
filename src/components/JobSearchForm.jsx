import { useState } from 'react';
 


const JobSearchForm = ({handleJobList}) => {
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
   
    const _handleSubmit = async (e) => {
        e.preventDefault();
        const searchData  = await fetch(`http://127.0.0.1:3001/search/?url=https://jobs.github.com/positions.json?description=${search}&location=${location}`, {
            method: 'Get',
            headers: { 'Content-Type': 'application/json'}
        }).then(
            (response) => (response.json())
        );
        console.log("Here are the search results: ", searchData);
        handleJobList(searchData);
    }

    const _handleLocation = (e) => {
        setLocation(e.target.value)
    }

   

    const _onChange = (e) => {
        setSearch(e.target.value)
    }

   
        return (
            <>
                <div>
                    <form onSubmit={_handleSubmit}>
                        <input 
                        name="searchQuery"
                        placeholder="Enter a language"
                        value={search}
                        type="text"
                        onChange={_onChange}
                        />
                        <input 
                        type="text"
                        data-testid="location"
                        onChange={_handleLocation}
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </>
        )
    }



export default JobSearchForm;