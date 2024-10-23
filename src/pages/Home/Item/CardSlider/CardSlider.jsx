import React, { useEffect } from 'react'
import './CardSlider.css' // Ensure this is your actual CSS file path
import { styled } from '@mui/material'

const StyledDiv = styled('div')(({ theme }) => {
  console.log(theme.palette.customBackGround.main)
  return {
    backgroundColor: theme.palette.customBackGround.main.toString() // Màu chính từ theme
  }
})

const StyledButton = styled('button')(({ theme }) => {
  return {
    borderColor: theme.palette.buttonColor.main, // Màu chính từ theme
    color: theme.palette.customText.main
  }
})
const CardSlider = ({ className, image, title, description }) => {
  // Effect to add the show class for animation
  useEffect(() => {
    const timer = setTimeout(() => {
      const cardElement = document.querySelector(`.${className}.card`)
      const afterLayoutElement = document.querySelector(
        `.${className}.afterLayout`
      )

      if (cardElement) cardElement.classList.add('show')
      if (afterLayoutElement) afterLayoutElement.classList.add('animate') // Add animate class for text
    }, 100) // Delay to ensure the animation happens after mount
    return () => clearTimeout(timer) // Clean up the timer
  }, [className])

  return (
    <StyledDiv className={`card ${className}`}>
      <img src={image} alt={title} className="phone-image" />
      <div className={`afterLayout ${className}`}>
        <h2 className={`text-container ${className}`}>{title}</h2>
        <p className={`text-container ${className}`}>{description}</p>
        <div className="buttons">
          <StyledButton className="learn-more">Learn more</StyledButton>
          <button className="buy-now">Buy now</button>
        </div>
      </div>
    </StyledDiv>
  )
}

export default CardSlider
