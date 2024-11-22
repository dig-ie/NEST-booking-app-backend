import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingService {
  findAll() {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    const newBooking = this.bookingRepository.create(createBookingDto);
    await this.bookingRepository.save(newBooking);
  }
}
