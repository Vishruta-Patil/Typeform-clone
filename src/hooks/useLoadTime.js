import { useEffect, useState } from "react";

export const useLoadTime = (time = 1000) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsLoading(false);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return { isLoading };
};