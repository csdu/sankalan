import data from "@/data";
import { useEffect, useState } from "react";

const Countdown = () => {
  const {
    site,
    contact
  } = data;

  const [days, setDays] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const dd = `${site.month} ${site.day1} ${site.year} ${site.time}`;
  const deadline = new Date(dd).getTime();

  const setCounterValue = (days, hrs, mins, secs) => {
    setDays(days);
    setHrs(hrs);
    setMins(mins);
    setSecs(secs);
  }
  
  useEffect(() => {
    const x = setInterval(function() {
      const now = new Date().getTime();
      const t = deadline - now;
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((t % (1000 * 60)) / 1000);

      setCounterValue(days, hrs, mins, secs);

      if (t < 0) {
        clearInterval(x);
        setCounterValue(0, 0, 0, 0);
      }
    }, 1000);
  }, []);

  return (
    <>
      <span>
        {`${days}`.padStart(2, '0')}d {`${hrs}`.padStart(2, '0')}h {`${mins}`.padStart(2, '0')}m {`${secs}`.padStart(2, '0')}s
      </span>
      {/* <div className="countdown mx-auto">
            <div className="counter-section mx-auto">
              <div className="counter-wrap mx-auto">
                <div className="counter-container mx-auto">
                  <div className="counter-box">
                    <p className="counter-time days">{days}</p>
                    <p className="counter-tag">days</p>
                  </div>
                  <div className="counter-box">
                    <p className="counter-time hrs">{hrs}</p>
                    <p className="counter-tag">hrs</p>
                  </div>
                  <div className="counter-box">
                    <p className="counter-time mins">{mins}</p>
                    <p className="counter-tag">mins</p>
                  </div>
                  <div className="counter-box">
                    <p className="counter-time secs">{secs}</p>
                    <p className="counter-tag">secs</p>
                  </div>
                </div>
              </div>
            </div>
        </div> */}
    </>
  )
}

export default Countdown;
