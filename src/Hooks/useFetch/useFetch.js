import React from 'react';
import {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import Config from 'react-native-config';

const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${Config.API_URL}/jobs?page=${page}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      setData([...data, ...json.results]);
      setTotalPages(json.total_pages);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, error, loading, page, totalPages, fetchData};
};

export default useFetch;
