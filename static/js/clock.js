function initClock(clock_item, date_item) {
    
    date_item.innerHTML = new Date().toLocaleString('default', {day: 'numeric' , month: 'long' ,year:'numeric'});

  const getTime = () => {
    const date = new Date(),
      minutes = date.getMinutes(),
      hours = date.getHours(),
      seconds = date.getSeconds();

      clock_item.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  setInterval(getTime, 1000);
};
