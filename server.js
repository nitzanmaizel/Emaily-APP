const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ name: 'My name is Nitzan Maizel' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server run on http://localhost:${PORT}`);
});
