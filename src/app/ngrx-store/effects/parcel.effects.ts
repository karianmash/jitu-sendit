import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of, tap } from 'rxjs';
import { ParcelsService } from 'src/app/admin/services/parcels.service';
import * as ParcelsActions from '../actions/parcel.actions';

@Injectable({
  providedIn: 'root',
})
export class ParcelEffectsService {
  constructor(
    private actions: Actions,
    private parcelsService: ParcelsService
  ) {}

  loadParcel = createEffect(() => {
    return this.actions.pipe(
      ofType(ParcelsActions.LoadParcels),

      // Projects each source value to the same Observable which is merged 
      // multiple times in a serialized fashion on the output Observable.
      concatMap(() =>
        this.parcelsService.getParcels.pipe(
          map((parcels) => ParcelsActions.LoadParcelsSuccess({ parcels })),
          catchError((error) =>
            of(ParcelsActions.LoadParcelsFailure({ error: error.message }))
          )
        )
      )
    );
  });
}
