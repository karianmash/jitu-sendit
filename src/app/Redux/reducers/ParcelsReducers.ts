import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Parcel } from 'src/app/interface/parcel';
import * as Actions from '../actions/ParcelsActions';

export interface ParcelState {
  parcels: Parcel[];
  parcelsError: string;
  error: string;
}

const initialState: ParcelState = {
  parcels: [],
  parcelsError: '',
  error: '',
};

const getParcelFeatureState = createFeatureSelector<ParcelState>('parcel');

export const getParcel = createSelector(
  getParcelFeatureState,
  (state) => state.parcels
);

export const ParcelReducer = createReducer(
  initialState,
  on(Actions.LoadParcelsSuccess, (state, action): ParcelState => {
    return { ...state, parcels: action.parcels };
  }),

  on(Actions.LoadParcelsFailure, (state, action): ParcelState => {
    return { ...state, parcelsError: action.error };
  })
);
