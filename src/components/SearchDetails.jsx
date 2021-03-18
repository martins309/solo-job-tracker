import { useParams, useHistory } from 'react-router-dom'
import parse from 'html-react-parser'

const SearchDetails = ({ jobList }) => {
    const { id } = useParams();
    const history = useHistory();
    const job = jobList.find((job) => {
        return job.id === id ? job : null;
    });

    return (
        <div>
            <h1>{job.title}</h1>
            <div>{parse(job.description)}</div>

            <button class="buttons"type="button" onClick={() => history.goBack()}>Back</button>
        </div>
    )


}

export default SearchDetails;