import TitleCard from '../../UI/TitleCard';

import classes from './AdditionalInfo.module.css';

const AdditionalInfo = (props) => {

  return (
    <section className={classes.container_info}>
      <TitleCard >
        <h1>Additional info</h1>
      </TitleCard>
      <div className={classes.employment}>
        <h4>Employment type</h4>
        <ul>
          {props.employments.map((employment) => (
            <li key={Math.random()}>{employment}</li>
          ))}
        </ul>
      </div>
      <div className={classes.benefit}>
        <h4>Benefits</h4>
        <ul>
          {props.benefits.map((benefit) => (
            <li key={Math.random()}>{benefit}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AdditionalInfo;
