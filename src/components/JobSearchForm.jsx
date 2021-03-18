import { useState } from 'react';
 


const JobSearchForm = ({handleJobList}) => {
    const [search, setSearch] = useState('');
   
    const _handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Button press!")
        const searchData  = await fetch(`http://127.0.0.1:3001/search/?url=https://jobs.github.com/positions.json?description=${search}`, {
            method: 'Get',
            headers: { 'Content-Type': 'application/json'}
        }).then(
            (response) => (response.json())
        );
        console.log("Here are the search results: ", searchData);
        handleJobList(searchData);
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
                
            </>
        )
    }



export default JobSearchForm;