"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
import type { Filter } from "@/lib/data";
import styles from "./app-filter.module.scss";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "Все сотрудники" },
  { key: "rise", label: "На повышение" },
  { key: "salary", label: "З/П больше 500$" },
];

export default function AppFilter({ filter }: { filter: Filter }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function buildHref(value: Filter) {
    const params = new URLSearchParams(searchParams);
    params.set("filter", value);
    return `${pathname}?${params.toString()}`;
  }

  return (
    <div className={styles.wrapper}>
      {FILTERS.map(({ key, label }) => {
        const isActive = filter === key;
        return (
          <Link
            key={key}
            href={buildHref(key)}
            className={clsx(
              "btn",
              isActive ? "btn-light" : "btn-outline-light",
            )}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
