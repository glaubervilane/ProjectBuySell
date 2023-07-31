// server/server.js

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

// Set the 'views' directory correctly to point to the 'server/views' folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Mounting Routes
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);

// Home page route
app.get('/', (req, res) => {
  // Example data for featured items (you can replace this with real data from your database)
  const featuredItems = [
    { name: 'Item 1', price: 19.99 },
    { name: 'Item 2', price: 29.99 },
    // Add more items here...
  ];

  res.render('index', { items: featuredItems });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});