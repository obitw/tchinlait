"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/api/test")
      .then((response) => response.text())
      .then((data) => setText(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Rest of the code */}
      <p>{text}</p>
      {/* Rest of the code */}
    </main>
  );
}
