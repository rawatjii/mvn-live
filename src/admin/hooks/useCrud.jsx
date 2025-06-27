// src/hooks/useCrud.js
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useCrud = (apiService,via) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchAll = async (custom_url) => {
    setLoading(true);
    try {
      const res = await apiService.get(custom_url);
      const fetchedData = res?.data?.data || []; // Fallback to empty array if data is undefined
      setData(fetchedData);
      setLoading(false);
      return fetchedData; // Return the data explicitly
    } catch (err) {
      console.error("❌ Fetch error:", err);
      setError(err);
      setLoading(false);
      throw err; // Throw error to allow calling code to handle it
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return {
    data,
    loading,
    error,
    fetchAll,
    createItem: async (item, pagevia, pageName, sectionName, custom_url) => {
      try {
        
        await apiService.create(item, pageName, sectionName);
        toast.success("Data added successfully!");
        if (pagevia == "basic") {
          navigate("/admin/project-list");
        }
        if(!custom_url){
          await fetchAll();
        }else{
          await fetchAll(custom_url);
        }
      } catch (err) {
        console.error(
          "error while create element",
          err.response?.data?.errors || "Failed to add value"
        );
        const errorMessage = err.response?.data?.errors || err.errors;

        if (errorMessage) {
          toast.error(`❌ Please fill all the required fields.`);
        } else {
          toast.error("❌ Failed to Create.");
        }
        setError(err.response?.data?.errors);
        await fetchAll();
      }
    },

    editItem: async (id, item, pagevia, isUpdate) => {
      try {
        await apiService.update(id, item, isUpdate);

        const selectedTheme = await item.get("is_theme");

        if (pagevia == "basic") {
          navigate(`/admin/microsite/${id}?theme=${selectedTheme}`);
        }
        toast.success("Value updated successfully!");
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
        const errorMessage =
          err.response?.data?.message || err.message || "Failed to fetch value";
        // toast.error(`❌ ${errorMessage}`);
        setError(err);
        return null;
      }
    },

    getMultiEditdata: async (item) => {
      try {
        const response = await apiService.editMultApiCall(item); // Assuming section_type is needed
        const data = response.data;
        // toast.success("✅ Value fetched successfully!");
        return data;
      } catch (err) {
        // toast.error("❌ Failed to fetch value.");
        const errorMessage =
          err.response?.data?.message || err.message || "Failed to fetch value";
        // toast.error(`❌ ${errorMessage}`);
        setError(err);
        return null;
      }
    },

    deleteItem: async (id, isDelete) => {
      try {
        await apiService.delete(id, isDelete);
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
