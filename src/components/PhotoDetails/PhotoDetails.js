import React from "react";
import styled from "styled-components"

export default function PhotoDetails (props) {
  const DetailsContainer = styled.div`
  width: 50rem;
  height: 25rem;
  background: lightgray;
  margin: auto;
  `

  const Title = styled.h1`
  font-size: 2rem;
  `

  const Date = styled.h2`
  font-size: 1.5rem;
  `

  return (
    <DetailsContainer>
      <Title>{props.title}</Title>
      <Date>{props.date}</Date>
      <p className="explanation">{props.explanation}</p>
    </DetailsContainer>
  )
}