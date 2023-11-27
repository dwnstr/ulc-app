import React from "react";
import { vehicleData } from "@/public/vehicles";
import VehicleCard from "@/components/vehicles/VehicleCard";

export default function Vehicles() {
  console.log(vehicleData);

  const cards = vehicleData.map((vehicle) => {
    return VehicleCard(vehicle);
  });

  return (
    <main className='bg-shark-950 min-h-screen'>
      <div className='max-w-7xl mx-auto grid sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-12'>
        {cards}
      </div>
    </main>
  );
}
