import { useEffect, useState } from "react";

const useCurrencyInfo = (fromCurrency) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
        );

        if (!response.ok) {
          console.error('Failed to fetch data:', response);
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setData(result[fromCurrency]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fromCurrency]);

  return { data, loading, error };
};

export default useCurrencyInfo;
