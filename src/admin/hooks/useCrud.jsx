// src/hooks/useCrud.js
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useCrud = (apiService) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate=useNavigate();

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
    createItem: async (item,pagevia) => {
      try {
        await apiService.create(item);
        toast.success("Data added successfully!");
        if(pagevia=="basic"){
          navigate("/admin/project-list")
        }
        await fetchAll();
      }

      catch (err) {

        console.error('error while create element', err.response?.data?.errors || "Failed to add value");
        const errorMessage = err.response?.data?.errors || err.errors;

        if(errorMessage){
          toast.error(`❌ Please fill all the required fields.`);
        }else{
          toast.error("❌ Failed to Create.");
        }
        setError(err.response?.data?.errors);
        await fetchAll();
      }
    },

    editItem: async (id, item) => {
      try {
        await apiService.update(id, item);
        toast.success(" Value updated successfully!");
        await fetchAll(); 
      } catch (err) {
        toast.error("❌ Failed to add value.");
        // const errorMessage = err.response?.data?.message || err.message || "Failed to update value";
        // toast.error(`❌ ${errorMessage}`);
        setError(err);
      }
    },

      getEditData: async (item) => {
        try {
        const response = await apiService.editGet(item); // Assuming section_type is needed
        const data = response.data;
        // toast.success("✅ Value fetched successfully!");
        return data;
        } catch (err) {
        // toast.error("❌ Failed to fetch value.");
        const errorMessage = err.response?.data?.message || err.message || "Failed to fetch value";
        // toast.error(`❌ ${errorMessage}`);
        setError(err);
        return null;
        }
        },


    deleteItem: async (id) => {
      try {
        await apiService.delete(id);
        toast.success(" Data deleted successfully!");
        await fetchAll(); 
      } catch (err) {
        toast.error("❌ Failed to delete value.");
        setError(err);
      }
    },
  };
};

export default useCrud;
