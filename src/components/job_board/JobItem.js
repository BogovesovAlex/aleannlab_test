import { useState } from 'react';
import { Link } from 'react-router-dom';
import Geocode from "react-geocode";

import { ReactComponent as Flag } from '../../icons/Rectangle_31.svg';
import { ReactComponent as Start } from '../../icons/star.svg';
import { ReactComponent as Marker } from '../../icons/Location.svg';

import { getModifiedDate } from '../../helpers';

import classes from './JobItem.module.css';

const API_KEY = process.env.React_App_GOOGLE_MAPS_API_KEY;
Geocode.setApiKey(API_KEY);

const JobItem = (props) => {
  const [adress, setAdress] = useState();
  
  const date = getModifiedDate(props.date);

  Geocode.fromLatLng(props.location.lat, props.location.long).then(
    (response) => {
      const address = response.results[0].formatted_address;
      setAdress(address);
    },
    (error) => {
      console.error(error);
    }
  );

  return (
    <li className={classes.item}>
      <div className={classes.container_in_item}>
        <div className={classes.logo}>
          <img alt="logo" src={props.image} />
        </div>
        <div>
          <Link to={`/job-board/page=${props.page}/${props.id}`}>
            {props.title}
          </Link>
          <p>Department name • {props.name}</p>
          <p className={classes.location_in_item}>
            <Marker />
            {adress}
          </p>
        </div>
      </div>
      <div className={classes.rating_date}>
        <div className={classes.rating}>
          {[...Array(props.rating)].map(() => <Start key={Math.random()} />)}
        </div>
        <div className={classes.date_in_item}>
          <Flag />
          <span>Posted {date} ago</span>
        </div>
      </div>
    </li>
  );
};

export default JobItem;