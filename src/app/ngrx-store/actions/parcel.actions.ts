import { createAction, props } from '@ngrx/store';
import { Parcel } from 'src/app/interface/parcel';

export const LoadParcels = createAction('LoadParcels');

export const LoadParcelsSuccess = createAction(
  'LoadParcelSuccess',
  props<{ parcels: Parcel[] }>()
);

export const LoadParcelsFailure = createAction(
  'LoadParcelsFailure',
  props<{ error: string }>()
);
