import React, { useCallback, useEffect, useState } from "react";
import { FRONTEND_API_BASE_URL } from "../../config/config";

const useFetchData = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetch(`${FRONTEND_API_BASE_URL}${endpoint}`,{
        method: "GET",
        headers:{
          'Content-Type':'application/json',
        },

      });
      const response = await data.json();

      if (!response.status) {
        throw new Error("Error while fetching data");
      }

      setData(response.data);
      return response.data;

    } catch (err) {
      console.log(`Error fetching data from: ${err.message}`);
      setError(err.message || 'An unknown error occurred');
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {data, loading, error, refatch:fetchData };
  
};

export default useFetchData;
