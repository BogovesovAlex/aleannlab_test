import { Link, useLocation } from 'react-router-dom';

import AdditionalInfo from './AdditionalInfo';
import JobDetails from './JobDetails';
import AttachedImage from './AttachedImage';
import { ReactComponent as Marker } from '../../icons/Location.svg';

import classes from './JobDetailsContainer.module.css';
import Map from '../map/Map';
import TitleCard from '../../UI/TitleCard';

const JobDetailsContainer = (props) => {
  const location = useLocation();

  return (
    <section className="container-detail-job">
      <div className={classes.in_container_job}>
        <JobDetails
          title={props.dataJob.title}
          salary={props.dataJob.salary}
          postedDate={props.dataJob.updatedAt}
          description={props.dataJob.description}
        />
        <div className={classes.info_and_image}>
          <AdditionalInfo
            employments={props.dataJob.employment_type}
            benefits={props.dataJob.benefits}
          />
          <AttachedImage images={props.dataJob.pictures} />
        </div>
        <Link className={classes.btn_back} to={`${location.pathname.split("/").slice(0, 3).join('/')}`}>
          RETURN TO JOB BOARD
        </Link>
      </div>
      <div className={classes.container_contacts}>
        <TitleCard><h1>Contacts</h1></TitleCard>
        <div className={classes.contacts}>
          <div >
            <p>Department name. <br />{props.dataJob.name}</p>
            <p><span>{<Marker />}</span>{props.dataJob.address}</p>
            <p>{props.dataJob.phone} <br />{props.dataJob.email}</p>
          </div>
          <Map centerPoint={props.dataJob.location} />
        </div>
      </div>
    </section>
  );
}

export default JobDetailsContainer;