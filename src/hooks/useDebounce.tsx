import { useEffect, useRef } from "react";

const useDebounce = (
  callback: () => void,
  delay: number,
  search: string,
  dependencies: any[]
) => {
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (search?.length > 2) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        callback();
      }, delay);

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }
  }, dependencies);
};

export default useDebounce;
