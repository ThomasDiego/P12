import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import {useEffect, useState} from "react";

const data = [
  {
    subject: "Math",
    A: 120,
  },
  {
    subject: "Chinese",
    A: 98,
  },
  {
    subject: "English",
    A: 86,
  },
  {
    subject: "Geography",
    A: 99,
  },
  {
    subject: "Physics",
    A: 85,
  },
  {
    subject: "History",
    A: 65,
  },
];
const RadarChartComponent = (props) => {
  const [activities, setActivities] = useState([])
  useEffect(() => {
    const activities = props.value;
    setActivities(activities)
  }, [props.value]);
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#282D30",
      }}
    >
      <ResponsiveContainer width="100%" aspect={1.5}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={activities}>
          <PolarGrid stroke={"white"} radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke={"white"}
            tickLine={false}
            tick={{ fontSize: "12px" }}
          />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartComponent;
