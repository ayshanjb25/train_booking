import { useEffect, useState } from "react";
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  // The first useEffect block is removed because fetchData is already defined above

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, [url]);

  // Move the reFetch function inside the hook

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  // Return the necessary values and functions from the hook
  return { data, loading, error, reFetch };
};

export default useFetch;
