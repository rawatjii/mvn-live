// src/hooks/useCrud.js
import { useEffect, useState } from 'react';

const useCrud = (apiService) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const res = await apiService.get();
      console.log("✅ API success:", res.data); // ✅ ADDED
      setData(res.data.data);
    } catch (err) {
      console.error("❌ API error:", err.response?.data || err.message); // ✅ ADDED
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return {
    data,
    loading,
    error,
    fetchAll,
    createItem: async (item) => {
      try {
        const res = await apiService.create(item);
        setData(prev => [...prev, res.data]);
      } catch (err) {
        setError(err);
      }
    },
    updateItem: async (id, item) => {
      try {
        const res = await apiService.update(id, item);
        setData(prev => prev.map(d => (d.id === id ? res.data : d)));
      } catch (err) {
        setError(err);
      }
    },
    deleteItem: async (id) => {
      try {
        await apiService.delete(id);
        setData(prev => prev.filter(d => d.id !== id));
      } catch (err) {
        setError(err);
      }
    }
  };
};

export default useCrud;
