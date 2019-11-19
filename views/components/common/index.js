// import {React,Component} from 'react'
import React from 'react'
import {monthData} from '../../../public/src/javascripts/const.js'

let isFormData = (v) => {
  return Object.prototype.toString.call(v) === '[object FormData]';
}
let isObject = (v) => {
  return Object.prototype.toString.call(v) === '[object Object]';
}

let ajax = (obj) => {
  var ajaxRequest = new window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  var method = obj.method.toUpperCase();
  var url = obj.url;
  var data = obj.data;

  if (method === "GET") {
    if (data) {
      url = url + "?";
      for (var i in data) {
        url = url + i + "=" + data[i] + "&";
      }
      url = url.substring(0, url.length - 1);
    }
    ajaxRequest.open(method, url);
    ajaxRequest.send();
  } else if (method === "POST") {
    ajaxRequest.open(method, url);
    if(isFormData(data)){
      ajaxRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    }else if(isObject(data)){
      ajaxRequest.setRequestHeader("Content-type","application/json; charset=utf-8");
      data = JSON.stringify(data)
    }
    ajaxRequest.send(data);
  }

  ajaxRequest.onreadystatechange = function () {
    if (ajaxRequest.readyState === 4) {
      if (ajaxRequest.status === 200) {
        let _res = JSON.parse(ajaxRequest.responseText) || console.error('reqeust json errror');
        if (obj.success !== undefined) {
          obj.success(_res);
        }
      } else {
        if (obj.fail !== undefined) {
          obj.fail(ajaxRequest.status);
        }
      }
    }
  }
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return [year, month, day, hour, minutes, seconds].map(formatNumber).join('');
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

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

const reFormatTime = time => {
  let num = [4, 2, 2, 2, 2, 2];
  let a = [],i = 0;
  num.map((n)=>{
    a.push(time.substr(i,n));
    i = i + n;
  })
  return a.slice(0,3).join('-') + " " +a.slice(3,6).join(':');
}

export { MonthDom, ColorUnderline, ajax, formatTime, reFormatTime }