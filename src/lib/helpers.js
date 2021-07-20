const getUTCNowInMilliSec = () => {
  const now = new Date();
  // get time now in milliseconds
  const time = now.getTime();
  // get timezone offset in minutes and convert it to milliseconds
  // offset is how many milliseconds you should add to your time to convert to UTC
  const offset = now.getTimezoneOffset() * 60000;
  return time + offset;
};
const hourInMilliSeconds = 1000 * 60 * 60;

const fromMilliSecToHours = (time) => time / hourInMilliSeconds;

export { getUTCNowInMilliSec, fromMilliSecToHours };
