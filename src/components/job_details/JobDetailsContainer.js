import { Link, useLocation } from 'react-router-dom';

import AdditionalInfo from './AdditionalInfo';
import JobDetails from './JobDetails';
import AttachedImage from './AttachedImage';

import classes from './JobDetailsContainer.module.css';


const JobDetailsContainer = (props) => {
  const location = useLocation();

  return (
    <div className={classes.in_container_job}>
      <JobDetails
        title={props.dataJob.title}
        salary={props.dataJob.salary}
        postedDate={props.dataJob.updatedAt}
        description={props.dataJob.description}
      />
      <AdditionalInfo
        employments={props.dataJob.employment_type}
        benefits={props.dataJob.benefits}
      />
      <AttachedImage images={props.dataJob.pictures} />
      <Link className={classes.btn_back} to={`${location.pathname.split("/").slice(0, 3).join('/')}`}>
        RETURN TO JOB BOARD
      </Link>
    </div>
  );
}

export default JobDetailsContainer;