import { useCallback, useState } from "react";

export default function useRequest({ fetchFn }) {
  const [loading, setLoading] = useState(false);

  const requestWithLoading = useCallback(
    (payload) => {
      setLoading(true);
      fetchFn(payload).finally(() => setLoading(false));
    },
    [fetchFn]
  );
  return { requestWithLoading, loading };
}
