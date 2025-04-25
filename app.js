require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const publisher = require('./events/publisher');
const rentalController = require('./controllers/rentalController');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

// Routes
app.get('/api/rentals', rentalController.listAvailableCars);
app.post('/api/rentals', rentalController.reserveCar);
app.post('/api/rentals/:rentId/return', rentalController.returnCar);

// Error handling
app.use(errorHandler);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Connect to Kafka
publisher.connect()
  .then(() => console.log('Connected to Kafka'))
  .catch(err => console.error('Kafka connection error:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  await publisher.disconnect();
  await mongoose.connection.close();
  process.exit(0);
}); 