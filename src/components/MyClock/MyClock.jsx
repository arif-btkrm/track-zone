import { useState } from "react";
import "./MyClock.css";

const MyClock = () => {
  let zone = "Asia/Dhaka";
  let time = new Date().toLocaleTimeString("en-US", { timeZone: `${zone}` });
  let CDate = new Date().toLocaleDateString("en-US", { timeZone: `${zone}` });
  const [ctime, setCtime] = useState(time);

  const updateTime = () => {
    let utime = new Date().toLocaleTimeString("en-US");
    setCtime(utime);
  };

  setInterval(updateTime, 1000);

  return (
    <div>
      <center>
        <div id="myclock" className="clocks">
          <h2>
            <b>My Clock</b>
          </h2>
          <h3>Time Zone : Asia/Dhaka</h3>
          <h1>
            <b>{ctime}</b>
          </h1>
          <h2>
            <b>{CDate}</b>
          </h2>
        </div>
      </center>
    </div>
  );
};

export default MyClock;
