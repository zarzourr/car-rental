# 🚗 Cruise Car Rental Microservice

Welcome to the Car Rental Microservice for Cruise! This service handles all car rental operations in our ride-hailing platform, making it easy for users to rent cars when they need them.

## ✨ Features

- 🚘 List and search available cars
- 📅 Book car rentals with flexible dates
- 🔄 Handle car returns and maintenance
- 📊 Real-time availability tracking
- 🔔 Event-driven notifications
- 🔒 Secure payment processing
- 📱 Mobile-friendly API

## 🛠️ Tech Stack

- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Message Queue**: Kafka
- **Testing**: Jest
- **API Documentation**: Swagger/OpenAPI

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Kafka
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zarzourr/car-rental.git
cd car-rental
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the service:
```bash
npm start
```

## 📡 API Documentation

### List Available Cars
```http
GET /api/rentals
```
Query Parameters:
- `location` - City or area
- `startDate` - Rental start date
- `endDate` - Rental end date
- `priceRange` - Min and max price
- `carType` - Type of car (sedan, SUV, etc.)

### Reserve a Car
```http
POST /api/rentals
```
Request Body:
```json
{
  "carId": "string",
  "userId": "string",
  "startDate": "2024-01-01",
  "endDate": "2024-01-03",
  "pickupLocation": {
    "lat": 37.7749,
    "lng": -122.4194
  }
}
```

### Return a Car
```http
POST /api/rentals/:rentId/return
```

## 🧪 Testing

Run the test suite:
```bash
# Run all tests
npm test

# Run unit tests
npm run test:unit

# Run integration tests
npm run test:integration
```

## 📦 Project Structure

```
car-rental/
├── controllers/     # Request handlers
├── models/         # Database models
├── services/       # Business logic
├── repositories/   # Data access
├── events/         # Kafka events
├── middleware/     # Express middleware
├── validation/     # Input validation
└── tests/          # Test files
```

## 🤝 Contributing

We love your input! We want to make contributing to Cruise as easy and transparent as possible.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all our contributors
- Inspired by modern car-sharing platforms
- Built with ❤️ by the Cruise team 