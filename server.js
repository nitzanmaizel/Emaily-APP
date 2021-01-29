require('dotenv').config();
const express = require('express');
require('./services/passport');
const connectDB = require('./services/db');

const app = express();
connectDB();
app.use(express.json({ extended: false, limit: '50mb' }));

//const authRoutes = require('./routes/authRoutes')&&authRoutes(app)==> `-The same-` ==>
require('./routes/authRoutes')(app);
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server run on http://localhost:${PORT}`);
});
