"use client";

import React, { useContext, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ModalContext } from "@/context/modal.context";

export default function Modal() {
  const { modalOpen, setModalOpen, modalContent } = useContext(ModalContext);

  // TODO transition is breaking this for some reason, maybe it's because of microsoft edge?
  return (
    // <Transition
    //     show={modalOpen}
    //     enter="transition duration-100 ease-out"
    //     enterFrom="transform scale-95 opacity-0"
    //     enterTo="transform scale-100 opacity-100"
    //     leave="transition duration-75 ease-out"
    //     leaveFrom="transform scale-100 opacity-100"
    //     leaveTo="transform scale-95 opacity-0"
    //     as={Fragment}
    // >
    <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className='fixed inset-0 bg-black/50' aria-hidden='true' />

      {/* Full-screen container to center the panel */}
      <div className='fixed inset-0 flex w-screen items-center justify-center p-4 pr-8'>
        {/* The actual dialog panel  */}
        <Dialog.Panel className='mx-auto w-full max-w-lg bg-shark-800 p-4 rounded-2xl border border-shark-600'>
          {modalContent}
          {/* ... */}
        </Dialog.Panel>
      </div>
    </Dialog>
    // </Transition>
  );
}
