import { MoneySend } from '@assets/img/svg'
import React from 'react'

export default function Services() {
  return (
    <div className="py-5 max-w-5xl m-auto">
      <h2 className="text-4xl font-bold mb-8 text-heading2 col-span-4 text-center">
        Our Services
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-5 gap-y-3">
        <div className="w-full p-8 bg-white form-shadow flex gap-4">
          <div className="w-16 h-16">
            <MoneySend className="h-16 w-16" />
          </div>
          <div className="grow">
            <label className="font-semibold text-lg">Financial support</label>
            <p className="leading-8">
              Make use of our working relationships with more than 1.600
              organizations including incubators, accelerators, NGOs, VCs, angel
              networks, and multinationals, built over the past decade.
            </p>
          </div>
        </div>

        <div className="w-full p-8 bg-white form-shadow flex gap-4">
          <div className="w-16 h-16">
            <MoneySend className="h-16 w-16" />
          </div>
          <div className="grow">
            <label className="font-semibold text-lg">
              Mentorship & Coaching
            </label>
            <p className="leading-8">
              Make use of our working relationships with more than 1.600
              organizations including incubators, accelerators, NGOs, VCs, angel
              networks, and multinationals, built over the past decade.
            </p>
          </div>
        </div>

        <div className="w-full p-8 bg-white form-shadow flex gap-4 col-span-2">
          <div className="w-16 h-16">
            <MoneySend className="h-16 w-16" />
          </div>
          <div className="grow">
            <label className="font-semibold text-lg">Consultancy</label>
            <p className="leading-8">
              Choose from a la carte services what you need most, from designing
              the program or contest to arranging mentorship and training for
              entrepreneurs to organizing the final pitch event and anything in
              between.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
