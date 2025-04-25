const RentalCar = require('../models/RentalCar');

class RentalCarRepository {
  async findAvailable(filters = {}) {
    const query = {
      isAvailable: true,
      ...filters
    };
    return RentalCar.find(query);
  }

  async findByPlate(plateNumber) {
    return RentalCar.findOne({ plateNumber });
  }

  async create(carData) {
    const car = new RentalCar(carData);
    return car.save();
  }

  async update(plateNumber, updateData) {
    return RentalCar.findOneAndUpdate(
      { plateNumber },
      { $set: updateData },
      { new: true }
    );
  }

  async updateAvailability(plateNumber, isAvailable) {
    return this.update(plateNumber, { isAvailable });
  }
}

module.exports = new RentalCarRepository(); 