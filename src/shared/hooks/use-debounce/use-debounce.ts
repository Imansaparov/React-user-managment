import { useEffect, useState } from "react";

interface useDebounceProps {
  value: any;
  delay?: number;
}

export const useDebounce = ({ value, delay = 500 }: useDebounceProps) => {
  const [debouncedValue, setDebouncedValue] = useState<any>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};