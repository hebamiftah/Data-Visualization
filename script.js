var dataset = [
  { name: 'Heba', value: 24 },
  { name: 'Ahmed', value: 30 },
  { name: 'Sara', value: 30 },
  { name: 'Ali', value: 40 },
  { name: 'Nour', value: 50 },
  { name: 'Omar', value: 60 },
  { name: 'Laila', value: 70 },
  { name: 'Khaled', value: 80 },
]

// Extract the names and values from the dataset
var names = dataset.map((entry) => entry.name)
var values = dataset.map((entry) => entry.value)

// Create a doughnut chart
var doughnutChart = new Chart(document.getElementById('doughnutChart'), {
  type: 'doughnut',
  data: {
    labels: names,
    datasets: [
      {
        data: values,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF9F40',
          '#4BC0C0',
          '#9966FF',
          '#FF99FF',
          '#FFCC99',
        ],
        borderColor: '#FFFFFF',
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Doughnut Chart - Names and Grades',
    },
  },
})

// Create a horizontal bar chart
var barChart = new Chart(document.getElementById('barChart'), {
  type: 'horizontalBar',
  data: {
    labels: names,
    datasets: [
      {
        labels: 'Grades',
        data: values,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF9F40',
          '#4BC0C0',
          '#9966FF',
          '#FF99FF',
          '#FFCC99',
        ],

        borderColor: '#F1F1F1',
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Bar Chart - Names and Grades',
    },
  },
})
