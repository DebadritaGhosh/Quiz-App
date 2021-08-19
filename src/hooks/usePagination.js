import { useState, useEffect, useRef } from 'react';

const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default (fetchList, deps) => {
  const limitOptions = [10, 20, 50];
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(limitOptions[0]);
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [filter, setFilter] = useState({});
  const prevState = usePrevious({ skip });

  const returnObject = {
    fetchList,
    setLoading,
    setSkip,
    setLimit,
    setTotalCount,
    setItems,
    setFilter: (newFilter) => {
      setFilter({
        ...filter,
        ...newFilter,
      });
    },
    resetFilter: () => {
      setFilter({});
    },
    loading,
    skip,
    limit,
    totalCount,
    items,
    filter,
    limitOptions,
  };

  useEffect(() => {
    fetchList();
  }, [skip, ...deps]);

  useEffect(() => {
    if (prevState && prevState.skip === 0) {
      fetchList();
    }
    setSkip(0);
  }, [filter, limit]);

  return returnObject;
};
