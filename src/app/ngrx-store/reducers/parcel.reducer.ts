import { createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/parcel.actions';
import { ParcelState } from '../models/parcel.model';

// Initial state
export const initialState: ParcelState = {
  parcels: [],
  parcelsError: '',
  createdMessage: '',
  updateMessage: '',
  parcelId: '',
};

export const ParcelReducer = createReducer(
  initialState,

  // load parcels
  on(Actions.LoadParcelsSuccess, (state, action): ParcelState => {
    return { ...state, parcels: action.parcels };
  }),

  on(Actions.LoadParcelsFailure, (state, action): ParcelState => {
    return { ...state, parcelsError: action.error };
  }),

  // set parcel id
  on(Actions.SetParcelId, (state, action): ParcelState => {
    return { ...state, parcelId: action.id };
  }),

  // create parcel
  on(Actions.CreateParcelSuccess, (state, action): ParcelState => {
    return { ...state, createdMessage: action.createdMessage };
  }),

  on(Actions.CreateParcelFailure, (state, action): ParcelState => {
    return { ...state, parcelsError: action.error };
  })
);
