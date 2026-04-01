import { useEffect } from "react";
import { useLoading } from "../context/LoadingProvider";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    if (percent >= 100) {
      setIsLoading(false);
    }
  }, [percent, setIsLoading]);

  return null;
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;

  const interval = setInterval(() => {
    percent += 20;
    if (percent >= 100) {
      percent = 100;
      clearInterval(interval);
    }
    setLoading(percent);
  }, 50);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      setLoading(100);
      resolve(100);
    });
  }

  return { loaded, percent, clear };
};