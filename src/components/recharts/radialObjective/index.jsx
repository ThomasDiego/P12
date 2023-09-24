import "./style.css";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

const RadialObjective = (props) => {
  let radialDataValue = props.value;
  const data = [{ value: radialDataValue * 100 }];

  return (
    <div>
      <div className="chartTitlez">Score</div>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="chartTitle">
          <div className="chartTitlePourcentage">{data[0].value}%</div>
          <div className="chartTitleText">
            de votre <br />
            objectif
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%" aspect={1.1}>
          <RadialBarChart
            innerRadius="100%"
            outerRadius={200}
            barSize={10}
            data={data}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              dataKey={"value"}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              cornerRadius={10}
              minAngle={15}
              fill="red"
              background={{ fill: "#fbfbfb" }}
              clockWise={true}
              dataKey="value"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RadialObjective;
