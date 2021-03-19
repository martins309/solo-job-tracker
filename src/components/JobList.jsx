import { Link } from 'react-router-dom'

const JobList = ({jobList}) => {
    return (
        <>
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