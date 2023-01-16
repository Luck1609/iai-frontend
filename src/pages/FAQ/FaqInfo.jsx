import React from 'react'

export default function FaqInfo() {
  return (
    <div className="bg-[#FCF0F0] -mt-10 max-w-6xl m-auto rounded-xl">
      <h2 className="text-3xl font-semibold text-heading2 mb-8 p-10">Participants Criteria</h2>

      <div className="grid gap-5">
        <div className="p-5 rounded-xl bg-white">
          <label className="font-semibold block mb-5 text-xl">Incorporation</label>
          <p className="">Companies with more than one owner should indicate one lead and attend with team once they qualify for the stage.</p>
        </div>
      
        <div className="p-5 rounded-xl bg-white">
          <label className="font-semibold block mb-5 text-xl">Sole Proprietor</label>
          <p className="">Sole proprietor businesses are welcome to contest for the funding for their businesses.</p>
        </div>
      
        <div className="p-5 rounded-xl bg-white">
          <label className="font-semibold block mb-5 text-xl">How Much Is Invested?</label>
          <p className="">Total investment requirement should be up to ₵50,000 per organization.</p>
        </div>
      
        <div className="p-5 rounded-xl bg-white">
          <label className="font-semibold block mb-5 text-xl">Any Resources To Help?</label>
          <p className="">IAI Provides a one-day bootcamp for shortlisted businesses who are found to be eligible in the first stage of the competition.</p>
        </div>
      </div>
    </div>
  )
}
