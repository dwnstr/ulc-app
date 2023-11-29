"use client";
import React, { useState, useEffect } from "react";
import VehicleCard from "./VehicleCard";

export default function VehicleCards(props) {
  const { vehicles } = props;
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  // get all tags from every item in vehicles.features
  const getAllTags = () => {
    let result = [];

    vehicles.forEach((vehicle) => {
      vehicle.features.forEach((feature) => {
        if (!result.includes(feature)) {
          result.push(feature);
        }
      });
    });

    return result.sort((a, b) =>
      a.toLowerCase().localeCompare(b.toLowerCase())
    );
  };
  const possibleTags = getAllTags();
  const [filterTags, setFilterTags] = useState([]);

  // setFilteredVehicles to vehicles that have all filterTags
  const filterVehicles = () => {
    if (filterTags.length === 0) {
      setFilteredVehicles(vehicles);
      return;
    }

    let filtered = [];
    vehicles.forEach((vehicle) => {
      let hasAllTags = true;
      filterTags.forEach((tag) => {
        if (!vehicle.features.includes(tag)) {
          hasAllTags = false;
        }
      });
      if (hasAllTags) {
        filtered.push(vehicle);
      }
    });

    setFilteredVehicles(filtered);
  };

  useEffect(() => {
    filterVehicles();
  }, [filterTags]);

  return (
    <div>
      {/* filter tag cloud */}
      <div className='flex flex-col gap-2 bg-shark-800 border border-shark-600 rounded-xl p-4 mb-4'>
        <span className='text-shark-300 px-1'>Filters</span>
        <div className=' flex flex-wrap gap-2 '>
          {possibleTags.map((tag) => {
            return (
              <button
                key={tag}
                className={`${
                  filterTags.includes(tag)
                    ? "bg-emerald-500 border-emerald-300"
                    : "bg-shark-700 border-shark-600"
                } text-white h-8 px-2 rounded-md hover:brightness-125 border-t transition shadow-lg`}
                onClick={() => {
                  if (filterTags.includes(tag)) {
                    setFilterTags((prev) => prev.filter((t) => t !== tag));
                  } else {
                    setFilterTags((prev) => [...prev, tag]);
                  }
                }}
              >
                <span className='capitalize'>{tag}</span>
              </button>
            );
          })}
        </div>
        <p className='text-shark-300'>
          Entries are sorted by price (lowest to highest)
        </p>
      </div>

      {/* cards */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredVehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            setFilterTags={setFilterTags}
          />
        ))}
      </div>
    </div>
  );
}
