import React from "react";
import Image from "next/image";

const VehicleCard = (vehicle) => {
  return (
    <div className='bg-shark-800 rounded-lg shadow-lg p-2 hover:brightness-110 transition'>
      <div className='flex flex-col gap-2'>
        <Image
          src={vehicle.image}
          alt={vehicle.title}
          width={500}
          height={500}
          className='rounded-lg aspect-video object-cover'
        />
        <h2 className='text-xl font-bold text-shark-100'>{vehicle.title}</h2>
        <h2 className=' text-shark-200'>{vehicle.description}</h2>
      </div>
    </div>
  );
};

export default VehicleCard;
