import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  return {data, error, loading};
};
export default useFetch;
