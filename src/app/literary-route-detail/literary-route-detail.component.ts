import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LiteraryRoute } from '../literary_route';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {MapDirectionsService} from '@angular/google-maps';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Component({
  selector: 'app-literary-route-detail',
  templateUrl: './literary-route-detail.component.html',
  styleUrls: ['./literary-route-detail.component.css']
})
export class LiteraryRouteDetailComponent{
  literary_route: LiteraryRoute | undefined;
  directionsResults$: Observable<google.maps.DirectionsResult | undefined> | undefined;
  route_directions: {name?: string} = {};


  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
    mapDirectionsService: MapDirectionsService
  ) {
    const id = this.route.snapshot.paramMap.get('id')
    this.apiService.getRoute(id).subscribe(data => {
      this.literary_route = data
      this.directionsResults$ = mapDirectionsService.route(this.literary_route.directions).pipe(map(response => response.result));
    })
  }


  goBack(): void {
    this.location.back();
  }

}
