import React from 'react'
import { Link } from 'react-router-dom'


export default function LinkItem({ url, target = null, className, children, ...props }) {

  return (
    <Link
      to={ target ? { pathname: url } : url }
      rel="noopener noreferrer"
      target={ target && '_blank' }
      className={ className }
      {...props}
    >
      { children }
    </Link>
  )
}

// export function ExLink({ url, target = null, className, children, ...props }) {

//   return (
//     <Link
//       to={{ pathname: url }}
//       rel="noopener noreferrer"
//       target="_blank"
//       className={ className }
//       {...props}
//     >
//       { children }
//     </Link>
//   )
// }