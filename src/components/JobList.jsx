import { Link } from 'react-router-dom'

const JobList = ({jobList}) => {
    return (
        <>
            <h1>This is the Job list</h1>
            <ul>
                {jobList.map((job, index) => {
                    return (
                        <li key={index}>
                            <Link to ={`/search/${job.id}`}>{job.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default JobList;