// ------
// Chart TaskInDepartement
// ------
const taskindepartement = document.getElementById('TaskInDepartement');
new Chart(taskindepartement, {
  type: 'bar',
  data: {
    labels: ['Unassign', 'Wait', 'Process', 'Complete', 'Process', 'Approved'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    layout: {
      padding: 10,
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
})();
// ------
// end Chart TaskInDepartement
// ------

// ------
// Chart percentageOfTaskProgress
// ------
const taskprogress = document.getElementById('percentageOfTaskProgress');
new Chart(taskprogress, {
  type: 'pie',
  data: {
    labels: ['Unassign', 'Wait', 'Process', 'Complete', 'Process', 'Approved'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    layout: {
      padding: 10,
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
})();
// ------
// end Chart percentageOfTaskProgress
// ------
