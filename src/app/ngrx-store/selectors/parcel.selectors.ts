import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ParcelState } from '../models/parcel.model';

// returns a typed selector function for a feature slice of state
const getParcelFeatureState = createFeatureSelector<ParcelState>('parcel');

export const getParcel = createSelector(
  getParcelFeatureState,
  (state) => state.parcels
);

export const getParcelError = createSelector(
  getParcelFeatureState,
  (state) => state.parcelsError
);

export const numberOfParcels = createSelector(
  getParcelFeatureState,
  (state) => state.parcels.length
);

export const numberOfDeliveries = createSelector(
  getParcelFeatureState,
  (state) => {
    let deliveries: number = 0;

    state.parcels.forEach((parcel) => {
      if (parcel.status === 'Completed') {
        deliveries += 1;
      }
    });

    return deliveries;
  }
);

export const totalParcelsPrice = createSelector(
  getParcelFeatureState,
  (state) => {
    let priceAmount = 0;

    state.parcels.forEach((parcel) => {
      priceAmount += parseInt(parcel.price);
    });

    return priceAmount.toString();
  }
);

// get parcel id
export const getParcelId = createSelector(
  getParcelFeatureState,
  (state) => state.parcelId
);

// get single parcel
export const getSingleParcel = createSelector(
  getParcelFeatureState,
  getParcelId,
  (state, parcelId) =>
    state.parcels.find((parcel) => parcel.track_id === parcelId)
);
