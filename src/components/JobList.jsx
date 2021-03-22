import { Link } from 'react-router-dom'

const JobList = ({jobList}) => {
    console.log("this is the joblist ", jobList)
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