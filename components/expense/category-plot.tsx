import { useState, useEffect, Fragment } from "react";

import InteractivePieChart from "../data-visualization/interactive-pie-chart";
import { getLocalDateFromDatetime, getDefaultDate } from "../../utils/datetime";

// First day of a month 6 months ago
const startCategory = new Date();
startCategory.setMonth(startCategory.getMonth() - 6);
startCategory.setHours(0, 0, 0, 0);
// Current day
const endCategory = getDefaultDate(0);

const CategoryPlot = () => {
  const [data, setData] = useState<{ index: string; value: number }[]>([]);
  const [start, setStart] = useState<Date | null>(startCategory);
  const [end, setEnd] = useState<Date | null>(endCategory);
  const [isLoading, setIsLoading] = useState(false);

  const updateData = async () => {
    setIsLoading(true);

    const startDate = getLocalDateFromDatetime(start!);
    const endDate = getLocalDateFromDatetime(end!);
    const url = `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/expenses?aggregation=category&start=${startDate}&end=${endDate}`;
    const response = await fetch(url);
    const fetchedData = await response.json();

    setData(fetchedData);
    setIsLoading(false);
  };

  useEffect(() => {
    const initializeData = async () => {
      setIsLoading(true);

      const startDate = getLocalDateFromDatetime(startCategory);
      const endDate = getLocalDateFromDatetime(endCategory);
      const url = `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/expenses?aggregation=category&start=${startDate}&end=${endDate}`;
      const response = await fetch(url);
      const fetchedData = await response.json();

      setData(fetchedData);
      setIsLoading(false);
    };

    initializeData();
  }, []);

  return (
    <Fragment>
      <InteractivePieChart
        title="Category"
        data={data}
        start={start}
        setStart={setStart}
        end={end}
        setEnd={setEnd}
        fetchData={updateData}
        isLoading={isLoading}
      />
    </Fragment>
  );
};

export default CategoryPlot;
