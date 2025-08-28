// Jessica Taylor's Data
const jessicaData = {
  name: "Jessica Taylor ",
  diagnosis_history: [
    {month:"Oct", year:2023, blood_pressure:{systolic:{value:125}, diastolic:{value:103}}},
    {month:"Nov", year:2023, blood_pressure:{systolic:{value:173}, diastolic:{value:103}}},
    {month:"Dec", year:2023, blood_pressure:{systolic:{value:91}, diastolic:{value:111}}},
    {month:"Jan", year:2024, blood_pressure:{systolic:{value:128}, diastolic:{value:86}}},
    {month:"Feb", year:2024, blood_pressure:{systolic:{value:119}, diastolic:{value:73}}},
    {month:"Mar", year:2024, blood_pressure:{systolic:{value:160}, diastolic:{value:78}}}
  ]
};

const ctx = document.getElementById('bpChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: jessicaData.diagnosis_history.map(d => `${d.month} ${d.year}`),
    datasets: [
      {
        label: 'Systolic',
        data: jessicaData.diagnosis_history.map(d => d.blood_pressure.systolic.value),
        borderColor: '#e74c3c',
        backgroundColor: 'rgba(231,76,60,0.2)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Diastolic',
        data: jessicaData.diagnosis_history.map(d => d.blood_pressure.diastolic.value),
        borderColor: '#3498db',
        backgroundColor: 'rgba(52,152,219,0.2)',
        fill: true,
        tension: 0.4
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {legend: {position: 'top'}},
    scales: {
      y: {beginAtZero: false, suggestedMin: 60, suggestedMax: 200}
    }
  }
});
