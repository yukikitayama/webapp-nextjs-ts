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
  const [data, setData] = useState<{ index: string; value: number }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    const startDate = getLocalDateFromDatetime(props.start);
    const endDate = getLocalDateFromDatetime(props.end);
    const url = `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/expenses?aggregation=${props.aggregation}&start=${startDate}&end=${endDate}`;
    const response = await fetch(url);
    const fetchedData = await response.json();

    // When aggregation is daily, compute cumulative sum of daily expense
    if (props.aggregation === "daily") {
      let cumsum = 0;
      const transformedData: { index: string; value: number }[] = [];
      fetchedData.forEach((element: { index: string; value: number }) => {
        cumsum += element.value;
        transformedData.push({
          index: element.index,
          // use toFixed(2) to make 2 decimal places because
          // somehow without it make many zeros
          value: +cumsum.toFixed(2),
        });
      });
      setData(transformedData);
    } else {
      setData(fetchedData);
    }

    setIsLoading(false);
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
        fetchData={fetchData}
        isLoading={isLoading}
      />
    ) : (
      <TimeSeriesPlot
        title={props.title}
        yAxisLabel={props.yAxisLabel}
        data={data}
        start={props.start}
        end={props.end}
        fetchData={fetchData}
        isLoading={isLoading}
      />
    );

  return <Fragment>{visualizedExpense}</Fragment>;
};

export default ExpensePlot;
