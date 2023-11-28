"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { ModalContext } from '@/context/modal.context'
import LeaveConfirmModal  from '@/components/modals/LeaveConfirmModal'
import { ExternalLink } from "lucide-react";

// TODO https://docs.clickvote.dev/quickstart
const VehicleCard = (props) => {
  const { vehicle, setFilterTags } = props;
  const { openModal } = useContext(ModalContext)

  const priceFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(vehicle.price / 100);

  return (
    <div className='bg-shark-800 rounded-xl shadow-lg p-3 border-t border-shark-600'>
      <div className='flex flex-col gap-3'>
        <button className='flex flex-col gap-2 text-left'>
          <Image
            src={vehicle.image}
            alt={vehicle.title}
            width={500}
            height={500}
            className='rounded-lg aspect-video object-cover'
          />
          <h2 className='text-xl font-bold text-shark-200 line-clamp-1 mt-2'>
            {vehicle.title}
          </h2>
          <p className='text-shark-300 line-clamp-2'>{vehicle.description}</p>
        </button>

        {/* creator */}
        <span className='text-shark-300 select-none cursor-events-none'>
          by{" "}
          <button 
            onClick={() => {openModal(<LeaveConfirmModal href={vehicle.creatorLink}/>)}}
            className='text-emerald-500 underline'>
            {vehicle.creatorName}
          </button>
        </span>

        {/* features tags */}
        <div className='flex flex-wrap gap-2 h-6 overflow-hidden'>
          {vehicle.features.map((tag) => {
            return (
              <button
                key={tag}
                className='bg-shark-700 text-shark-200 text-xs h-6 px-2 rounded-md hover:brightness-125 border-t border-white/10'
                onClick={() => {
                  setFilterTags((prev) => [...prev, tag]);
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* action section */}
        <div className='flex h-9 gap-2'>
          {/* <button
            onClick={() => {
              console.log("Hello");
            }}
            className='flex items-center justify-center bg-shark-700 hover:brightness-125 text-shark-200 rounded-lg grow basis-1/4 transition border-t border-white/10'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='w-5 h-5'
            >
              <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
            </svg>
          </button> */}
          {/* <button
            onClick={() => {
              console.log("Hello");
            }}
            className={`flex items-center bg-shark-600 justify-center hover:brightness-125 text-white px-4 py-2 rounded-lg grow basis-3/4 transition border-t border-white/20`}
          >
            Config
          </button> */}
          <button
            onClick={() => {
              openModal(<LeaveConfirmModal href={vehicle.url} />)
            }}
            className={`${
              vehicle.price > 0 ? "bg-shark-600" : "bg-emerald-500"
            } flex items-center justify-center hover:brightness-125 text-white px-4 py-2 rounded-lg grow basis-3/4 transition border-t border-white/20`}
          >
            {vehicle.price > 0 ? `${priceFormatted}` : "Free!"}
            <ExternalLink className='ml-2 opacity-60' size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
