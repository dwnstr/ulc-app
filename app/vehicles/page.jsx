import React from "react";
import Link from 'next/link'
import { vehicleData } from "@/public/vehicles";
import VehicleCards from "@/components/vehicles/VehicleCards";

export default function Vehicles() {
  return (
    <main className='bg-shark-950 min-h-screen px-8'>
      <div className='max-w-7xl mx-auto py-6'>
        <div className='bg-shark-800 w-full p-8 sm:px-16 mb-4 flex flex-col gap-3 items-start justify-center rounded-xl border border-shark-600'>
          <h1 className='text-3xl sm:text-5xl text-shark-100 font-bold'>
            ULC Ready Vehicles
          </h1>
          <p className='text-shark-300 max-w-2xl'>
            Here you can find a directory of vehicles that are ready to use with
            Ultimate Lighting Controller! Use the feature buttons below to filter by ULC feature.
          </p>
          <div className="h-full grow"/>
          <div className="w-full bg-shark-900 p-4 text-shark-200 rounded-xl self-end mt-6">
            <p className="">Have a vehicle you want to add to this list? </p>
            <Link className="text-emerald-500 underline" href="https://discord.gg/zH3k624aSv">Join our Discord and make a ticket!</Link>
          </div>
        </div>
        <VehicleCards vehicles={vehicleData} />
      </div>
    </main>
  );
}
