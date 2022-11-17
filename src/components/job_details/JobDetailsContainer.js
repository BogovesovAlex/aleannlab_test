import { Link, useLocation } from 'react-router-dom';

import AdditionalInfo from './AdditionalInfo';
import JobDetails from './JobDetails';
import AttachedImage from './AttachedImage';
import classes from './JobDetailsContainer.module.css';
import TitleCard from '../../UI/TitleCard';

import { ReactComponent as Marker } from '../../icons/Location.svg';

import Map from '../map/Map';

const JobDetailsContainer = ({ dataJob }) => {
  const location = useLocation();

  return (
    <section className="container-detail-job">
      <div className={classes.in_container_job}>
        <JobDetails
          title={dataJob.title}
          salary={dataJob.salary}
          postedDate={dataJob.updatedAt}
          description={dataJob.description}
        />
        <div className={classes.info_and_image}>
          <AdditionalInfo
            employments={dataJob.employment_type}
            benefits={dataJob.benefits}
          />
          <AttachedImage images={dataJob.pictures} />
        </div>
        <Link className={classes.btn_back} to={`${location.pathname.split("/").slice(0, 3).join('/')}`}>
          RETURN TO JOB BOARD
        </Link>
      </div>
      <div className={classes.container_contacts}>
        <TitleCard><h1>Contacts</h1></TitleCard>
        <div className={classes.contacts}>
          <div >
            <p>Department name. <br />{dataJob.name}</p>
            <p><span>{<Marker />}</span>{dataJob.address}</p>
            <p>{dataJob.phone} <br />{dataJob.email}</p>
          </div>
          <Map centerPoint={dataJob.location} />
        </div>
      </div>
    </section>
  );
}

export default JobDetailsContainer;