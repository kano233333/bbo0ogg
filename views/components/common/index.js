// import {React,Component} from 'react'
import React from 'react'
import {monthData} from '../../../public/src/javascripts/const.js'

function MonthDom(props){
  var m = monthData[props.month-1];
  var monthStyle = {
    backgroundColor: m.color,
    color: m.font_color
  };
  return (
    <span className='p-radius' style={monthStyle}>{m.zh}</span>
  )
}

function ColorUnderline(props){
  var m = monthData[props.month-1];
  return (
    <span className='underline' style={{backgroundColor:m.color}}></span>
  )
}

export { MonthDom, ColorUnderline }