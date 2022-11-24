import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { index: "2022-11-23", value: 10 },
  { index: "2022-11-24", value: 12 },
  { index: "2022-11-25", value: 11 },
  { index: "2022-11-26", value: 13 },
  { index: "2022-11-27", value: 14 },
];

const TimeSeriesPlot = () => {
  return (
    <LineChart width={300} height={200} data={data}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <XAxis dataKey="index" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default TimeSeriesPlot;
