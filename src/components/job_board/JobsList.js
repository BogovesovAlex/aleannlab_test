import { Fragment } from 'react';

import JobItem from './JobItem';

import classes from './JobsList.module.css';

const JobsList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.jobs.map((job) => (
          <JobItem
            key={job.id}
            id={job.id}
            title={job.title}
            name={job.name}
            location={job.location}
            createdAt={job.createdAt}
            image={job.pictures[0]}
            date={job.updatedAt}
            rating={job.rating}
            page={props.page}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default JobsList;


