import Chart from 'chart.js'
Chart.defaults.global.defaultFontColor = 'white';

import { Bar } from 'vue-chartjs'

export default {
   extends: Bar,
   data: () => ({
     chartdata: {
       labels: ['HTML/CSS', 'Laravel', 'VueJS', 'Javascript', 'C#', 'C/C++', 'Python'],
       datasets: [
         {
           label: '# of Projects / Courses',
           backgroundColor: 'white',
           data: [10, 9, 8, 6, 4, 3, 4, 0]
         }
       ]
     },
     options: {
       responsive: true,
       maintainAspectRatio: false
     }
   }),
 
   mounted () {
     this.renderChart(this.chartdata, this.options)
   }
 }