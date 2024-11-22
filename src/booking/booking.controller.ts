import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('bookings') // Defina a rota base para o controller
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async create(@Body() createBookingDto: CreateBookingDto) {
    return await this.bookingService.create(createBookingDto);
  }

  @Get()
  async findAll() {
    return await this.bookingService.findAll();
  }
}
