import { useState } from "react";
import "./WorldClock.css";

const WorldClock = ({ id, title, zone, note, changeClock, removeClock }) => {
  let time = new Date().toLocaleTimeString("en-US", { timeZone: `${zone}` });
  let CDate = new Date().toLocaleDateString("en-US", { timeZone: `${zone}` });

  let localTime = new Date().toLocaleString("en-US");
  let clockTime = new Date().toLocaleString("en-US", { timeZone: `${zone}` });
  let distance = Date.parse(clockTime) - Date.parse(localTime);

  const milisToTime = (milis) => {
    let flag = "";
    if (milis < 0) {
      flag = "-";
    }

    milis = Math.abs(milis);
    let hour = 0;
    let minit = milis / (1000 * 60);
    if (minit > 59) {
      hour = minit / 60;
      minit = minit % 60;
    }
    return `${flag} ${hour} : ${minit}`;
  };

  const [ctime, setCtime] = useState(time);
  const updateTime = () => {
    let utime = new Date().toLocaleTimeString("en-US", { timeZone: `${zone}` });
    setCtime(utime);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="col-4 maindiv">
      <div className="clocks">
        <div className="cntrl">
          <button
            data-toggle="modal"
            data-target="#EditModal"
            className="btn edit"
            onClick={() => {
              changeClock(id);
            }}
          >
            E
          </button>
          <button
            className="btn delete"
            onClick={() => {
              removeClock(id);
            }}
          >
            X
          </button>
        </div>
        <br />
        <br />
        <center>
          <h2>
            <b>{title}</b>
          </h2>
          <h3>Time Zone : {zone}</h3>
          <h1>
            <b>{ctime}</b>
          </h1>
          <h2>
            <b>{CDate}</b>
          </h2>
          <h3>Time Disance : {milisToTime(distance)}</h3>
          <h4>
            <b>-: Note :-</b>
          </h4>
          <h5 className="note">{note}</h5>
        </center>
      </div>
    </div>
  );
};

export default WorldClock;
