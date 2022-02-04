<template>
  <app-main-layout class="flex-row"></app-main-layout>
</template>

<script>
import MainLayout from './components/Shared/MainLayout.vue'

export default {
  name: 'App',
  components: {
    'app-main-layout': MainLayout,
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, ol{
    list-style-type: none;
  }

  a{
    color: #333;
    text-decoration: none;
  }

  .bg-table {
    background-color:rgb(5, 77, 5)
  }

  .light-color {
    color: white;
  }

  .dark-color {
    color: black;
  }

  .pa-xs {
    padding: 4px;
  }

  .pa-sm {
    padding: 8px;
  }

  .pa-md {
    padding: 12px;
  }

  .pa-lg {
    padding: 16px;
  }

  .pa-xl {
    padding: 20px;
  }

  .ma-xs {
    margin: 4px;
  }

  .ma-sm {
    margin: 8px;
  }

  .ma-md {
    margin: 12px;
  }

  .ma-lg {
    margin: 16px;
  }

  .ma-xl {
    margin: 20px;
  }

  .flex-row,
  .flex-column
    {
      display: flex;
  }

  .flex-column {
      flex-direction: column;
  }

  .justify-center {
    justify-content: center;
  }

  .align-center {
    align-items: center;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .justify-end {
    justify-content: flex-end;
  }

  .align-end {
    align-items: flex-end;
  }

  .self-align-center {
      align-self: center;
  }

  .self-justify-center {
      justify-self: center;
  }

  .full-width {
    width: 100%;
  }

  .full-height {
    height: 100%;
  }

  .absolute {
    position: absolute;
  }

  .relative {
    position: relative;
  }
  
  .zero-top {
    top : 0;
  }
  
  .zero-right {
    right : 0;
  }
  
  .zero-bottom {
    bottom : 0;
  }
  
  .zero-left {
    left : 0;
  }

  .center-top {
    top: 50%;
  }

  .center-right {
    right: 50%;
  }

  .center-bottom {
    bottom: 50%;
  }

  .center-left {
    left: 50%;
  }

  .quarter-top {
    top: 25%;
  }

  .quarter-right {
    right: 25%;
  }

  .quarter-bottom {
    bottom: 25%;
  }

  .quarter-left {
    left: 25%;
  }

  .max-width-xl {
    max-width: 1200px;
  }
</style>
