"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./search-panel.module.scss";

export default function SearchPanel({ query }: { query: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(query);

  useEffect(() => {
    if (value === query) return;

    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set("query", value);
      } else {
        params.delete("query");
      }
      router.replace(`${pathname}?${params.toString()}`);
    }, 300);

    return () => clearTimeout(timer);
  }, [value, query, pathname, router, searchParams]);

  useEffect(() => {
    setValue(query);
  }, [query]);

  return (
    <input
      type="text"
      className={styles.searchPanel}
      placeholder="Найти сотрудника"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
