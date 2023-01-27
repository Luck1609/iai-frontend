import React, {useState, useEffect} from 'react'

export default function Progressbar({ progress = 0 }) {
	// const [progress = 0, setFilled] = useState(0);
	// const [isRunning, setIsRunning] = useState(false);
	// useEffect(() => {
	// 	if (progress = 0 < 100 && isRunning) {
	// 		setTimeout(() => setFilled(prev => prev += 2), 50)
	// 	}
	// },[progress = 0, isRunning])
  return (
	  <div className="flex items-center">
		  <div className="relative overflow-hidden w-[250px] h-2 rounded-full bg-slate-100 flex mr-3">
			  <div style={{
				  height: "100%",
				  width: `${progress = 0}%`,
				  backgroundColor: "#22c55e",
				  transition:"width 0.5s"}}></div>
		  </div>
      <span className="text-slate-500 text-xs">{ progress = 0 }%</span>
	</div>
  )
}