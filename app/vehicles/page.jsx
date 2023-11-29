import React from "react";
import Link from "next/link";
import { vehicleData } from "@/public/vehicles";
import VehicleCards from "@/components/vehicles/VehicleCards";

export const metadata = {
  title: "ULC Ready Vehicles",
  description:
    "Find vehicles pre-configured for ULC! Filter by feature to find the perfect vehicle for you!",
  metadataBase: new URL("https://ulc.dwnstr.com/"),
};

export default function Vehicles() {
  return (
    <main className='bg-shark-950 min-h-screen px-8'>
      <div className='max-w-7xl mx-auto py-6'>
        <div className='relative bg-shark-800 w-full p-8 sm:px-16 mb-4 flex flex-col gap-3 items-start justify-center rounded-xl border border-shark-600'>
          <div className='absolute z-10 top-0 left-0 right-0 bottom-0 bg-cover bg-center rounded-xl opacity-20 bg-[url(https://i.imgur.com/QBCOaKa.jpg)]' />
          <h1 className='z-20 text-3xl sm:text-5xl text-shark-100 font-bold'>
            ULC Ready Vehicles
          </h1>
          <p className='z-20 text-shark-300 max-w-2xl'>
            Here you can find a directory of vehicles that are ready to use with
            Ultimate Lighting Controller! Use the feature buttons below to
            filter by ULC feature.
          </p>
          <div className='z-20 w-full flex flex-col sm:flex-row gap-4 self-end mt-8'>
            <div className=' bg-shark-900 p-4 text-shark-200 rounded-xl'>
              <p className=''>Have a vehicle you want to add to this list? </p>
              <Link
                className='text-emerald-500 underline'
                href='https://discord.gg/zH3k624aSv'
                target='_blank'
              >
                Join our Discord and make a ticket!
              </Link>
            </div>
          </div>
        </div>
        <VehicleCards vehicles={vehicleData} />
      </div>
    </main>
  );
}
