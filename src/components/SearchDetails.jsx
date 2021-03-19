import { useParams, useHistory } from 'react-router-dom'
import parse from 'html-react-parser'

const SearchDetails = ({ jobList }) => {
    const { id } = useParams();
    const history = useHistory();
    const job = jobList.find((job) => {
        console.log("this is the job:", jobList);
        return job.id === id ? job : "not found";
        
    });


    return (
        <div>
            <h1>{job.title}</h1>
            <h2>{job.location}</h2>
            <h3>{job.created_at}</h3>
            <div>{parse(job.description)}</div>

            <button class="buttons"type="button" onClick={() => history.goBack()}>Back</button>
        </div>
    )


}

export default SearchDetails;