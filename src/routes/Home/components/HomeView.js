import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import InputText from '../../../components/input-text/input-text';
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <InputText
      id='input1'
      type='email'
    />
    <h4>Welcome!</h4>
  </div>
)

export default HomeView
