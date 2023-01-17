import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: {
    tag: string;
    growth: number;
    popularity: number;
  }[];
}

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const ScatterPlot: React.FC<Props> = (props) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 10, right: 10, left: 20, bottom: 20 }}>
        <XAxis
          dataKey="growth"
          type="number"
          label={{ value: "Growth", position: "bottom" }}
        />
        <YAxis
          dataKey="popularity"
          type="number"
          label={{ value: "Popularity", angle: -90, position: "left" }}
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter data={props.data}>
          <LabelList dataKey="tag" position="right" />
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterPlot;
