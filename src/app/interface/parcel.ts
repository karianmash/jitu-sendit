export interface Parcel {
  trackId: string;
  shipper: string;
  status: string;
  createdAt: string;
  sender?: string;
  receiver?: string;
  item?: string;
  location?: string;
  price: string;
}
