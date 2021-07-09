import React, { useEffect, useState } from "react";

export const useStatus = (bruker?: string) => {
  const [status, setStatus] = useState(0);

  const handleStatusChange = () => {
    setStatus(getRandom(100));
  };

  const subscribe = (): any => {
    const intervalId = setInterval(() => {
      handleStatusChange();
    }, 1000);
    return intervalId;
  };

  const unsubscribe = (intervalId: number) => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    const id = subscribe();

    return () => {
      unsubscribe(id);
    };
  }, []);

  return status;
};

const getRandom = (max: number): number => {
  return Math.floor(Math.random() * (max + 1));
};
