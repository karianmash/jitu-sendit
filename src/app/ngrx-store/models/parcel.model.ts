import { Parcel } from 'src/app/interface/parcel';

export interface ParcelState {
  parcels: Parcel[];
  parcelsError: string;
  createdMessage: string;
  updateMessage: string;
  parcelId: string;
}
