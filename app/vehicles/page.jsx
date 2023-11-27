import React from "react";
import { vehicleData } from "@/public/vehicles";
import VehicleCards from "@/components/vehicles/VehicleCards";

export default function Vehicles() {
  return (
    <main className='bg-shark-950 min-h-screen px-8'>
      <div className='max-w-7xl mx-auto py-6'>
        <div className='bg-shark-800 w-full p-8 sm:p-16 mb-4 flex flex-col gap-3 items-start justify-center rounded-xl border border-shark-600'>
          <h1 className='text-5xl text-shark-100 font-bold'>
            ULC Ready Vehicles
          </h1>
          <p className='text-shark-300 max-w-2xl'>
            Here you can find a directory of vehicles that are ready to use with
            ULC! Use the feature buttons below to filter by feature.
          </p>
        </div>
        <VehicleCards vehicles={vehicleData} />
      </div>
    </main>
  );
}
