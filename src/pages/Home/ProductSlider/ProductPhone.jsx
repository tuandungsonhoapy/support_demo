import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './ProductPhone.css'
import CardSlider from '../Item/CardSlider/CardSlider'
import { styled } from '@mui/material'

const StyledDiv = styled('div')(({ theme }) => {
  console.log(theme.palette.customBackGround.main)
  return {
    backgroundColor: theme.palette.customBackGround.main.toString() // Màu chính từ theme
  }
})

const ProductPhone = () => {
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

  // Danh sách tên danh mục và thông tin cho từng sản phẩm
  const categories = ['SamSung Galaxy', 'Iphone', 'AriPod', 'Watch']

  const products = [
    {
      image: '/images/samsunggalaxy.webp',
      title: 'Samsung Galaxy S21',
      description: 'The latest Samsung Galaxy phone.'
    },
    {
      image: '/images/iphone13123.webp',
      title: 'iPhone 13',
      description: 'The new iPhone with amazing features.'
    },
    {
      image: '/images/tainghe.jpg',
      title: 'AirPods Pro',
      description: 'Wireless and noise-cancelling.'
    },
    {
      image: '/images/watch.jpeg',
      title: 'Apple Watch Series 6',
      description: 'Your perfect health companion.'
    }
  ]

  return (
    <>
      {/* Nút danh mục được đưa lên đầu */}
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
        <StyledDiv ref={sliderRef} className="keen-slider">
          {products.map((product, index) => (
            <div className="keen-slider__slide" key={index}>
              <CardSlider
                className={currentSlide === index ? 'show' : ''}
                image={product.image}
                title={product.title}
                description={product.description}
              />
            </div>
          ))}
        </StyledDiv>

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
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

export default ProductPhone
