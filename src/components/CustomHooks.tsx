import { useState, useEffect } from "react";

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

// custom hook
const useFetch = (
  url: string
): { data: Beverage[] | null; loading: boolean } => {
  const [data, setData] = useState<Beverage[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d: Beverage[]) => {
        setData(d);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return { data, loading };
};

const CustomHookComponent = () => {
  const { data, loading } = useFetch("/data.json");
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={data![0].logo} alt="Beverage Logo" />
      )}
    </div>
  );
};

export default CustomHookComponent;
