import { useParams, useHistory, Redirect } from 'react-router-dom'
import parse from 'html-react-parser'
import styled from 'styled-components'


const SearchDetails = ({ jobList }) => {
    const { id } = useParams();
    const history = useHistory();
    const job = jobList.find((job) => {
        console.log("this is the job:", jobList);
        return job.id === id ? job : "not found";
    });

    const Button = styled.button`
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    background:#4e90e7;
    border: 9px solid white;
  `;


    return (
        <>
        {!!jobList.length ? 
            <div>
                <h1>{job.title}</h1>
                <div>
                    How to Apply
                    <h4>{parse(job.how_to_apply)} </h4>
                </div>
                <h2>{job.location}</h2>
                <h3>{job.created_at}</h3>
                <div>{parse(job.description)}</div>
                
                

                <Button class="buttons"type="button" onClick={() => history.goBack()}>Back</Button>
            </div>
             : <Redirect to="/" />}
        </>
    )


}

export default SearchDetails;