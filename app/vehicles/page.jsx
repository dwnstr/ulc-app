import React from "react";
import { vehicleData } from "@/public/vehicles";

const vehicleCard = (vehicle) => {
  return (
    <div className='bg-shark-800 rounded-lg shadow-lg p-4'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between'>
          <h2 className='text-xl font-bold text-shark-100'>{vehicle.title}</h2>
          <h2 className='text-xl font-bold text-shark-100'>
            {vehicle.description}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default function Vehicles() {
  console.log(vehicleData);

  const cards = vehicleData.map((vehicle) => {
    return vehicleCard(vehicle);
  });
  return (
    <main className='bg-shark-950 min-h-screen'>
      <div className='max-w-7xl mx-auto'>{cards}</div>
    </main>
  );
}
