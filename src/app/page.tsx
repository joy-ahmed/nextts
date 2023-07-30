"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/stories/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button
        label="Learn Storybook"
        size="large"
        primary
        onClick={() => alert("clicked")}
      />
    </main>
  );
}
