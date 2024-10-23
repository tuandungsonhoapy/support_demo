import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './ProductSlider.css' // Ensure your CSS here handles layout
import Endow from '../Item/Endow/Endow'
import Phone from '../Item/Phone/Phone'
import ScreenAndMemory from '../Item/ScreenAndMemory/ScreenAndMemory'
import TV from '../Item/TV/TV'
import Household from '../Item/Household/Household'

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  // List of category names
  const categories = [
    'Ưu đãi',
    'Điện Thoại',
    'TV & AV',
    'Gia Dụng',
    'Màn hình - Bộ nhớ'
  ]

  return (
    <>
      {/* Category buttons */}
      {loaded && instanceRef.current && (
        <div className="category-titles">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx)
              }}
              className={`category-title ${
                currentSlide === idx ? 'active' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <Endow />
          </div>
          <div className="keen-slider__slide">
            <Household />
          </div>
          <div className="keen-slider__slide">
            <ScreenAndMemory />
          </div>
          <div className="keen-slider__slide">
            <Phone />
          </div>
          <div className="keen-slider__slide">
            <TV />
          </div>
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </>
  )
}

// Arrow component for navigation
function Arrow(props) {
  const disabled = props.disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
