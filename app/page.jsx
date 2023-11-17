"use client";
import React from "react";
import Input from "../components/input/Input";
import CodeWindow from "../components/CodeWindow";

export default function Home() {
  return (
    <main className='bg-zinc-900'>
      {/* right section */}
      <div className='w-full max-w-[1920px] mx-auto grid grid-cols-2 min-h-screen p-8 gap-4'>
        <Input />
        <CodeWindow />
      </div>
    </main>
  );
}
