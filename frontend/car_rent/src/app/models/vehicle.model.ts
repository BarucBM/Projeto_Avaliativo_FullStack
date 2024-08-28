export interface VehicleModel {
    id: number;
    brand: string;
    color: string;
    licensePlate: string;
    model: string;
    rented: boolean;
    type: 'CAR' | 'BUS' | 'MOTORCYCLE' | 'TRUCK' | 'VAN';
    year: number;
    rentalId: number;
    image_url: string;
}
