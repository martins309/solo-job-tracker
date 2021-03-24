import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import styled from "styled-components"

 const LogOutButton = () => {
    const Button = styled.button`
    color: white;
    font-size: 1em;
    background:#4e90e7;
    border: 2px solid white;
    position: relative; 
    left: 385px;
    bottom: 50px;
    border-radius: 9px;
    font-size: 14px;
  `;
     const { logout, isAuthenticated } = useAuth0()
    return (
        isAuthenticated && (
        <Button onClick={() => logout()}>
            Logout
        </Button>
        ) 
    )
}

export default LogOutButton