"use client";
import React from "react";
import Input from "../../components/input/Input";
import CodeWindow from "../../components/code/CodeWindow";

export default function Generator() {
  return (
    <main className='bg-shark-950'>
      {/* right section */}
      <div className='w-full max-w-[1920px] mx-auto sm:grid sm:grid-cols-2 min-h-screen p-8 gap-4'>
        <Input />
        <CodeWindow />
      </div>
    </main>
  );
}
