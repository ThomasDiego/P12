import {ResponsiveContainer, Line, LineChart, XAxis, Tooltip} from 'recharts';
import "./style.css";
import {useEffect, useState} from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
        <div
            className="custom-tooltip"
            style={{
              backgroundColor: "#fff",
              color: "black",
              padding: 10,
              fontSize: 12,
            }}
        >
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
    );
  }

  return null;
};
const AverageSessionTime = (props) => {
  const [sessionsTime, setSessionsTime] = useState([])
  useEffect(() => {
            const sessions = props.value;
            setSessionsTime(sessions)
  }
        , [props.value]);
  const customLineChart = (e) => {
    const div = document.getElementsByClassName('filter')[0];
    if (e.isTooltipActive) {
      const activeDotX = e.activeCoordinate.x;
      const graphContainerWidth = div.offsetWidth;
      const ratio = Math.round((activeDotX / graphContainerWidth) * 100);
      let gradientPercentage;
      if (ratio === 2) {
        gradientPercentage = 0;
      } else if (ratio === 96) {
        gradientPercentage = 100;
      } else {
        gradientPercentage = ratio;
      }
      div.style.background = `linear-gradient(90deg, rgba(0,0,0,0) ${gradientPercentage}%, rgba(210,0,0,1) ${gradientPercentage}%)`;
    } else {
      div.style.background = '';
    }
  };

  return (
      <div style={{backgroundColor: "#FF0000", width: "100%", height: "100%"}}>
        <div className="title">Durée moyenne des sessions</div>
        <ResponsiveContainer width="100%" height="80%" className="filter">
          <LineChart width={300} height={100} data={sessionsTime} margin={{ top: 50, right: 10, bottom: 50, left: 10 }}
                     onMouseMove={(e) => customLineChart(e)}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                <stop
                    offset="20%"
                    stopColor={"#ffffff"}
                    stopOpacity={0.4}
                />
                <stop
                    offset="100%"
                    stopColor={"#ffffff"}
                    stopOpacity={1}
                />
              </linearGradient>
            </defs>
            <Line
                type="natural"
                dataKey="sessionLength"
                stroke="url(#colorUv)"
                isAnimationActive={true}
                animationEasing="ease-in-out"
                animationDuration={2000}
                strokeWidth={2}
                dot={false}
                activeDot={{
                  stroke: 'rgba(255, 255, 255, 0.2)',
                  strokeWidth: 10,
                  r: 5,
                  fill: 'white',
                }}
            />
            <XAxis dataKey="day" tick={{fill: '#ffffffc2'}} tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: 'none' }} cursor={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
  );
};

export default AverageSessionTime;
