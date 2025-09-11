import React, { useCallback, useEffect, useRef, useState } from "react";
import { FRONTEND_API_BASE_URL } from "../../config/config";

const useFetchData = (endpoint, { enabled = true } = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortRef = useRef(null);

  const fetchData = useCallback(async () => {
    // Skip when disabled or endpoint missing
    if (!enabled || !endpoint) {
      setLoading(false);
      return null;
    }

    // Cancel any previous fetch
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${FRONTEND_API_BASE_URL}${endpoint}`,{
        method: "GET",
        headers:{
          'Content-Type':'application/json',
        },
        signal: controller.signal,
      });
      const response = await res.json();

      if (!response.status) {
        throw new Error("Error while fetching data");
      }

      setData(response.data);
      return response.data;

    } catch (err) {
      if (err.name === "AbortError") return null; // ignore aborts
      setError(err.message || 'An unknown error occurred');
      setData(null);
      return null;
    } finally {
      setLoading(false);
    }
  }, [endpoint, enabled]);

  useEffect(() => {
    fetchData();
    return () => abortRef.current?.abort();
  }, [fetchData]);

  return {data, loading, error, refatch:fetchData };
  
};

export default useFetchData;
