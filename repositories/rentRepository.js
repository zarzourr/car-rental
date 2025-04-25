const Rent = require('../models/Rent');

class RentRepository {
  async create(rentData) {
    const rent = new Rent(rentData);
    return rent.save();
  }

  async findById(id) {
    return Rent.findById(id).populate('carId');
  }

  async updateStatus(id, status) {
    return Rent.findByIdAndUpdate(
      id,
      { $set: { status } },
      { new: true }
    );
  }

  async findActiveByCarId(carId) {
    return Rent.findOne({
      carId,
      status: 'active'
    });
  }

  async findActiveByRenterId(renterId) {
    return Rent.find({
      renterId,
      status: 'active'
    });
  }
}

module.exports = new RentRepository(); 