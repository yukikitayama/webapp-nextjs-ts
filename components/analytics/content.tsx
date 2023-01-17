import { useEffect, useState } from "react";

import ScatterPlot from "../data-visualization/scatter-plot";

const Content = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initializeData = async () => {
      setIsLoading(true);

      const url = `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/analytics/tech?category=programming-language&type=scatter`;
      const response = await fetch(url);
      const fetchedData = await response.json();

      console.log(fetchedData);

      setData(fetchedData);
      setIsLoading(false);
    };

    initializeData();
  }, []);

  return <ScatterPlot data={data} />;
};

export default Content;
