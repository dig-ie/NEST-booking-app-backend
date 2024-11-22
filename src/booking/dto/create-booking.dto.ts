export class CreateBookingDto {
  readonly id: number;
  readonly userId: number;
  readonly roomId: number;
  readonly checkIn: Date;
  readonly checkOut: Date;
  readonly totalPrice: number;
}
