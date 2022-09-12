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
