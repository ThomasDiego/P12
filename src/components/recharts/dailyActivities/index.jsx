import {Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis,} from "recharts";
import "./style.css";
import {useEffect, useState} from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#E60000",
          color: "#FFFFFF",
          padding: 10,
          fontSize: 12,
        }}
      >
        <p className="label">{`${payload[0].value} ${payload[0].name}`}</p>
        <p className="label">{`${payload[1].value} ${payload[1].name}`}</p>
      </div>
    );
  }

  return null;
};

export default function DailyActivities(props) {
  const [formatedSessions, setFormatedSessions] = useState([]);

    useEffect(() => {
        const sessions = props.value.sessions;
        setFormatedSessions(sessions)
    }, [props.value]);

  return (
    <div className="dailyActivities" style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <div className="topChart">
        <div className="titleChart">Activité quotidienne</div>
        <div className="titleLegend">
          <li className="poids">Poids (kg)</li>
          <li className="calories">Calories brûlées (kCal)</li>
        </div>
      </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={formatedSessions}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tickLine={false} />
            <YAxis orientation="right" />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine y={0} stroke="#000" />
            <Bar
                dataKey="kg"
                fill="#282D30"
                radius={[10, 10, 0, 0]}
                barSize={10}
            />
            <Bar
                dataKey="kcal"
                fill="#E60000"
                radius={[10, 10, 0, 0]}
                barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
    </div>
  );
}
