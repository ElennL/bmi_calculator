const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.post('/bmicalculator', (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const age = parseInt(req.body.age);
  const gender = req.body.gender;
  
  let result = weight / Math.pow(height, 2);

  let interpretation;
  if (result < 18.5) {
    interpretation = 'Underweight';
  } else if (result >= 18.5 && result < 25) {
    interpretation = 'Normal weight';
  } else if (result >= 25 && result < 30) {
    interpretation = 'Overweight';
  } else {
    interpretation = 'Obese';
  }

  const results = {
    bmi: result.toFixed(2),
    interpretation: interpretation
  };

  res.send(results);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 