import { useState, useEffect } from "react";

import TimeSeriesPlot from "../data-visualization/time-series-plot";

interface ExpensePlotProps {
  title: string;
  aggregation: string;
  start?: Date;
  end?: Date;
  yAxisLabel?: string;
}

const ExpensePlot: React.FC<ExpensePlotProps> = (props) => {
  const [data, setData] = useState();

  return <TimeSeriesPlot title={props.title} yAxisLabel={props.yAxisLabel} />;
};

export default ExpensePlot;
