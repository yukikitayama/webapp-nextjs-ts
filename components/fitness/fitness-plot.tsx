import { useEffect, useState, useCallback } from "react";

import TimeSeriesPlot from "../data-visualization/time-series-plot";
import { getDefaultDate, getLocalDateFromDatetime } from "../../utils/datetime";

interface FitnessPlotProps {
  data: {
    id: string;
    title: string;
    yAxisLabel: string;
  };
}

const FitnessPlot: React.FC<FitnessPlotProps> = (props) => {
  const { id, title, yAxisLabel } = props.data;
  const [data, setData] = useState();
  const [start, setStart] = useState<Date | null>(getDefaultDate(-30 * 3));
  const [end, setEnd] = useState<Date | null>(getDefaultDate(0));

  const fetchData = useCallback(async () => {
    const startDate = getLocalDateFromDatetime(start!);
    const endDate = getLocalDateFromDatetime(end!);
    const url = `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/fitness?data=${id}&start=${startDate}&end=${endDate}`;
    const response = await fetch(url);
    const fetchedData = await response.json();
    setData(fetchedData);
  }, [id, start, end]);

  useEffect(() => {
    fetchData();
  });

  return (
    <TimeSeriesPlot
      title={title}
      yAxisLabel={yAxisLabel}
      data={data}
      start={start}
      setStart={setStart}
      end={end}
      setEnd={setEnd}
      fetchData={fetchData}
    />
  );
};

export default FitnessPlot;
