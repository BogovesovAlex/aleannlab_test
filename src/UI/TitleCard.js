import classes from './TitleCard.module.css' 

const TitleCard = props => { 
  return (
    <div className={classes.header_details}>{props.children} </div>
  ); 
}; 
 
export default TitleCard;

