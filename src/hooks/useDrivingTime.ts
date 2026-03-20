import { useState, useEffect } from 'react';

const durationCache = new Map<string, string>();

export function useDrivingTime(lat1: number, lng1: number, lat2: number, lng2: number) {
  const [time, setTime] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const key = `${lat1},${lng1}-${lat2},${lng2}`;
    
    if (durationCache.has(key)) {
      setTime(durationCache.get(key)!);
      setLoading(false);
      return;
    }

    let isMounted = true;
    setLoading(true);

    fetch(`/api/distance?origins=${lat1},${lng1}&destinations=${lat2},${lng2}`)
      .then(res => res.json())
      .then(data => {
        if (!isMounted) return;
        const durationText = data.rows?.[0]?.elements?.[0]?.duration?.text;
        if (durationText) {
          durationCache.set(key, durationText);
          setTime(durationText);
        } else {
          setTime('未知');
        }
      })
      .catch(() => {
        if (isMounted) setTime('未知');
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [lat1, lng1, lat2, lng2]);

  return { time, loading };
}
