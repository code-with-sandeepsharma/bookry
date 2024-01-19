import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function Author() {
  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Carousel with indicators outside --> */}
      <div className="glide-05 relative w-full">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="data:image/jpeg;base64,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"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="data:image/jpeg;base64,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"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAagCwhQNT7fcyPKH7cZ5D2smFJHNanqW7qw&usqp=CAU"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1SntxixgKUjobuT7HQnYlAEJZjP0X_JyOA&usqp=CAU"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqIpX8Xv8_PLk2B0pWK_KXk3Pui2m_euuwQ&usqp=CAU"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqIpX8Xv8_PLk2B0pWK_KXk3Pui2m_euuwQ&usqp=CAU"
                className="m-auto max-h-full w-full max-w-full"
              />
              
            </li>
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqIpX8Xv8_PLk2B0pWK_KXk3Pui2m_euuwQ&usqp=CAU"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqIpX8Xv8_PLk2B0pWK_KXk3Pui2m_euuwQ&usqp=CAU"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqIpX8Xv8_PLk2B0pWK_KXk3Pui2m_euuwQ&usqp=CAU"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with indicators outside --> */}
    </>
  )
}
