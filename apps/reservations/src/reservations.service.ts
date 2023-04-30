import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepository } from './reservations.repository';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationRespository: ReservationsRepository,
  ) {}
  create(createReservationDto: CreateReservationDto, userId: string) {
    return this.reservationRespository.create({
      ...createReservationDto,
      timestamp: new Date(),
      userId,
    });
  }

  findAll() {
    return this.reservationRespository.find({});
  }

  findOne(_id: string) {
    return this.reservationRespository.findOne({ _id });
  }

  update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationRespository.findOneAndUpdate(
      { _id },
      { $set: updateReservationDto },
    );
  }

  remove(_id: string) {
    return this.reservationRespository.findOneAndDelete({ _id });
  }
}
