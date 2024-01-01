document.getElementById('bmiForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const formData = new FormData(this);
  
    fetch('/bmicalculator', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById('bmiValue').innerText = `BMI: ${data.bmi}`;
        document.getElementById('interpretation').innerText = `Interpretation: ${data.interpretation}`;
      })
      .catch((error) => console.error('Error:', error));
  });