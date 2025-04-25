# Car Rental Microservice

A microservice for managing car rentals in the Cruise ride-hailing platform.

## Features

- List available cars
- Reserve cars
- Return cars
- Event-driven architecture using Kafka
- MongoDB for data persistence

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Kafka

## Setup

1. Clone the repository:
```bash
git clone https://github.com/zarzourr/car-rental.git
cd car-rental
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/car-rental
KAFKA_BROKERS=localhost:9092
```

4. Start the service:
```bash
npm start
```

## API Endpoints

### List Available Cars
- **GET** `/api/rentals`
- Returns a list of available cars
- Query parameters for filtering available

### Reserve a Car
- **POST** `/api/rentals`
- Creates a new car rental reservation
- Request body required with rental details

### Return a Car
- **POST** `/api/rentals/:rentId/return`
- Processes the return of a rented car
- Requires rental ID in URL

## Testing

Run tests:
```bash
npm test
```

## License

MIT 