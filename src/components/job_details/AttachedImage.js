import TitleCard from '../../UI/TitleCard';

import classes from './AttachedImage.module.css';

const AdditionalInfo = (props) => {

  return (
    <section className={classes.container_attacged_img}>
      <TitleCard >
        <h1>Attached images</h1>
      </TitleCard>
      <div className={classes.image}>
        {props.images.map((image) => (
          <img alt='' src={image} key={Math.random()} />
        ))}
      </div>
    </section>
  );
}

export default AdditionalInfo;
