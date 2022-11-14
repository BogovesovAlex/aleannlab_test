export const getModifiedDate = (date) => {
  let parsedDate = Date.now() - Date.parse(date);


  if (parsedDate < 3600000) {
    let minutes = Math.floor((parsedDate / (1000 * 60)) % 60);
    return `${minutes} minutes`
  }

  if (parsedDate < 86400000) {
    let hours = Math.floor((parsedDate / (1000 * 60 * 60)) % 24);
    return `${hours} hours`
  }

  if (parsedDate < 2592000000) {
    let days = Math.floor(parsedDate / (1000 * 60 * 60 * 24) % 30);
    return `${days} days`
  }

  if (parsedDate < 31557600000) {
    let months = Math.floor(parsedDate / (1000 * 60 * 60 * 24 * 30) % 12);
    return `${months} months`
  }

  if (parsedDate) {
    let years = Math.floor(parsedDate / (1000 * 60 * 60 * 24 * 30 * 12));
    return `${years} years`
  }
};