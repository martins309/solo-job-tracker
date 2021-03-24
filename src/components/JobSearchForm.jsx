import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import styled from 'styled-components'
import React from 'react'
 


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

    const Button = styled.button`
    color: white;
    font-size: 1em;
    margin: 1em;
    background:#4e90e7;
    border: 2px solid white;
    border-radius: 9px;
    font-size: 14px;
  `;



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
                    <form onSubmit={_handleSubmit} style={{position: "relative", left: "25px"}}>
                        <label>
                            <input 
                            style={{borderRadius: "9px", border: "white", position: "relative", padding: "3px"}}
                            name="searchQuery"
                            placeholder="Enter a language"
                            value={search}
                            type="text"
                            onChange={_onChange}
                            />
                            &nbsp;
                            <input 
                            style={{borderRadius: "9px", position: "relative", border: "white", padding: "3px"}}
                            name="location"
                            placeholder="Enter a location"
                            value={location}
                            type="text"
                            onChange={_onLocation}
                            />
                        </label>
                            <Button type="submit">Search</Button>
                    </form>
                </div>
                
            </>
            ) 
        )
    }



export default JobSearchForm;