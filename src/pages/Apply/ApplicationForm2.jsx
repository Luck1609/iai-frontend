import React from 'react'
import Input from '@components/Input'
import Textarea from '@components/textarea'

export default function ApplicationForm2() {
  return (
    <>
      <Input
        name="idea"
        label="Name of business or idea:"
        placeholder="Name of business or idea:"
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Input
        name="category"
        label="What best describes your business ?"
        placeholder="Select age"
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Input
        name="partners"
        label="Indicate any other co-owner or partner if any? "
        placeholder="Indicate any other co-owner or partner if any? "
        // constainerClass=""
        className="border-b border-input-border rounded-none"
      />

      <Textarea 
        name="description"
        label="Tell us about your business  or idea"
        placeholder="Simple description of what your company does  e.g Ecommerce website for trading agricultural fields"
        subClassName="border-b border-input-border"
      />


      <div className="font-bold text-2xl text-red-text">Upload component goes here</div>
      {/* <Input 
        type="file"
      /> */}
    </>
  )
}
