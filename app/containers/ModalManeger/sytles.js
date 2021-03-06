// @flow
import styled, { keyframes } from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  align-content: center;
  box-sizing: border-box;
  top: 0;
  left: 0;
  z-index: 700;
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
    margin-top: -1000px;
  }

  20% {
    opacity: 100;
  }
  100% {
    margin-top: 0;
  }
`

export const Content = styled.div`
  z-index: 900;
  position: relative;
  background: #f5f5f5;
  max-width: 90%;
  max-height: 90%;
  width: auto;
  height: auto;
  overflow-y: hidden;
  box-shadow: 0 0 10px rgba(17, 17, 17, 0.5);
  border-radius: 3px;
  padding-top: 10px;
  padding-bottom: 15px;
  animation: ${fadeIn} 0.2s ease-out 0.1s both;
`
