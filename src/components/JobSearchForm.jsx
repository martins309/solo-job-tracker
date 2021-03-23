import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
 


const JobSearchForm = ({handleJobList}) => {
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
    const { user, isAuthenticated } = useAuth0();
    
    const _handleSubmit = async (e) => {
        e.preventDefault();
        const searchData  = await fetch(`http://127.0.0.1:3001/search/?search=${search}&location=${location}`, {
            method: 'Get',
            headers: { 'Content-Type': 'application/json'}
        }).then(
            (response) => (response.json())
        );
        console.log("Here are the search results: ", searchData);
        handleJobList(searchData);

    }



   const  _onLocation = (e) => {
       setLocation(e.target.value)
   }

   

    const _onChange = (e) => {
        setSearch(e.target.value)
    }

   
        return (
            isAuthenticated && (
        <>
                <div data={user}>
                    <form onSubmit={_handleSubmit}>
                        <label>
                            <input 
                            name="searchQuery"
                            placeholder="Enter a language"
                            value={search}
                            type="text"
                            onChange={_onChange}
                            />
                            <input 
                            name="location"
                            placeholder="Enter a location"
                            value={location}
                            type="text"
                            onChange={_onLocation}
                            />
                        </label>
                            <button type="submit">Search</button>
                    </form>
                </div>
                
            </>
            ) 
        )
    }



export default JobSearchForm;