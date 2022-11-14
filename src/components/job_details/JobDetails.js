import { Fragment } from 'react';
import { getModifiedDate } from '../../helpers';

import TitleCard from '../../UI/TitleCard';

import { ReactComponent as Flag } from '../../icons/Rectangle_31.svg';
import { ReactComponent as Shape } from '../../icons/Shape.svg';
import Button from "../../UI/Button";

import classes from './JobDetails.module.css';

const JobDetails = (props) => {

  const salary = props.salary.split('k').slice(0, 2).join('').split('-')

  const postedDate = getModifiedDate(props.postedDate);
  console.log(postedDate)

  return (
    <Fragment>
      <TitleCard >
        <h1>Job details</h1>
        <div className={classes.nav_save_list}>
          <div>
            <Flag />
            <span>Save to my list</span>
          </div>
          <div>
            <Shape />
            <span>Share</span>
          </div>
        </div>
      </TitleCard>
      <Button>Apply now</Button>
      <section className={classes.description}>
        <div className={classes.title}>
          <h2>{props.title}</h2>
          <div>
            <p className={classes.salary}>€ {salary[0]} 000—{salary[1]} 000 </p>
            <p>Brutto, per year</p>
          </div>
          <p className={classes.date_in_title}>Posted {postedDate} ago</p>
          <p className={classes.description}>{props.description}</p>
        </div>
        <h3>Responsopilities</h3>
        <p className={classes.description}>{props.description}</p>
        <h3>Compensation & Benefits:</h3>
        <ul>
          <p>Our physicians enjoy a wide range of benefits, including:</p>
          <li>Very competitive compensation package with bonuses</li>
          <li>Medical, Dental, and Vision Insurance</li>
          <li>Occurrence-based Malpractice Coverage</li>
        </ul>
        <Button>Apply now</Button>
      </section>
    </Fragment>
  );
}

export default JobDetails;
