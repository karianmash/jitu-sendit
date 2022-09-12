import { createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/parcel.actions';
import { ParcelState } from '../models/parcel.model';

// Initial state
export const initialState: ParcelState = {
  parcels: [],
  parcelsError: '',
};

export const ParcelReducer = createReducer(
  initialState,

  on(Actions.LoadParcelsSuccess, (state, action): ParcelState => {
    return { ...state, parcels: action.parcels };
  }),

  on(Actions.LoadParcelsFailure, (state, action): ParcelState => {
    return { ...state, parcelsError: action.error };
  })
);
