export interface Parcel {
  parcel_id?: string;
  track_id?: string;
  shipper: string;
  weight: string;
  status: string;
  sender?: string;
  receiver?: string;
  item_name?: string;
  price: string;
  origin_location?: string;
  pick_up_location?: string;
}
