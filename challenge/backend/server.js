const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, process.env.FRONTEND_BUILD_PATH)));

const reindeer = [
  'Dasher',
  'Dancer',
  'Prancer',
  'Vixen',
  'Comet',
  'Cupid',
  'Donner',
  'Blitzen',
  'Rudolph',
  'HO HO HO! I bet you won\'t be able to find this!',
  'SAMUEL{3v3n_r3g3x_c4n_b3_d4ng3r0u5}',
]

app.get('/api/reindeer', (req, res) => {
  const filter = req.query.filter;
  let regex;
  try {
    regex = new RegExp(`^${filter}$`, 'i');
  } catch (e) {
    res.status(400).json([e.message]);
    return;
  }
  const results = reindeer.filter((r) => regex.test(r));
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
