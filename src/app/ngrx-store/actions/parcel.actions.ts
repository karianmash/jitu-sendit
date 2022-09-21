import { createAction, props } from '@ngrx/store';
import { Parcel } from 'src/app/interface/parcel';

// Loading parcels
export const LoadParcels = createAction('LoadParcels');
export const LoadParcelsSuccess = createAction(
  'LoadParcelSuccess',
  props<{ parcels: Parcel[] }>()
);
export const LoadParcelsFailure = createAction(
  'LoadParcelsFailure',
  props<{ error: string }>()
);

// set single parcel's id
export const SetParcelId = createAction('SetParcelId', props<{ id: string }>());

// create parcel
export const CreateParcel = createAction(
  'CreateParcel',
  props<{ newParcel: Parcel }>()
);
export const CreateParcelSuccess = createAction(
  'CreateParcelSuccess',
  props<{ createdMessage: string }>()
);
export const CreateParcelFailure = createAction(
  'CreateParcelFailure',
  props<{ error: string }>()
);

// update parcel
export const UpdateParcel = createAction(
  'UpdateParcel',
  props<{ updatedParcel: Parcel }>()
);
export const UpdateParcelSuccess = createAction(
  'UpdateParcelSuccess',
  props<{ updateMessage: string }>()
);
export const UpdateParcelFailure = createAction(
  'UpdateParcelFailure',
  props<{ error: string }>()
);
