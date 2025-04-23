// src/hooks/useCrud.js
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useCrud = (apiService) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const res = await apiService.get();
      setData(res.data.data);
    } catch (err) {
      console.error("❌ Fetch error:", err);
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
        await apiService.create(item);
        toast.success(" Value added successfully!");
        await fetchAll(); 
      } catch (err) {
        toast.error("❌ Failed to add value.");
        setError(err);
      }
    },

    editItem: async (id, item) => {
      try {
        await apiService.update(id, item);
        toast.success(" Value updated successfully!");
        await fetchAll(); 
      } catch (err) {
        toast.error("❌ Failed to update value.");
        setError(err);
      }
    },

    deleteItem: async (id) => {
      try {
        await apiService.delete(id);
        toast.success(" Value deleted successfully!");
        await fetchAll(); 
      } catch (err) {
        toast.error("❌ Failed to delete value.");
        setError(err);
      }
    },
  };
};

export default useCrud;
