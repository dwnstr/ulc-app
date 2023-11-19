import React from "react";
import { redirect } from 'next/navigation'

export default function Home() {

  redirect('/generator')

  return (
    <main className='bg-shark-950 w-full h-screen'>
    </main>
  );
}
