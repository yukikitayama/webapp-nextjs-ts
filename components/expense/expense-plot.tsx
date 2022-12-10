import { useState, useEffect, Fragment } from "react";

import TimeSeriesPlot from "../data-visualization/time-series-plot";
import InteractivePieChart from "../data-visualization/interactive-pie-chart";
import { getLocalDateFromDatetime } from "../../utils/datetime";

interface ExpensePlotProps {
  title: string;
  aggregation: string;
  start: Date;
  end: Date;
  yAxisLabel?: string;
}

const ExpensePlot: React.FC<ExpensePlotProps> = (props) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const startDate = getLocalDateFromDatetime(props.start);
    const endDate = getLocalDateFromDatetime(props.end);
    const url = `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/expenses?aggregation=${props.aggregation}&start=${startDate}&end=${endDate}`;
    const response = await fetch(url);
    const fetchedData = await response.json();

    setData(fetchedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const visualizedExpense =
    props.aggregation === "category" ? (
      <InteractivePieChart
        title={props.title}
        data={data}
        start={props.start}
        end={props.end}
      />
    ) : (
      <TimeSeriesPlot
        title={props.title}
        yAxisLabel={props.yAxisLabel}
        data={data}
        start={props.start}
        end={props.end}
      />
    );

  return <Fragment>{visualizedExpense}</Fragment>;
};

export default ExpensePlot;
