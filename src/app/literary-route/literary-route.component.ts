import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LiteraryRoute } from '../literary_route';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {MapDirectionsService} from '@angular/google-maps';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';









@Component({
  selector: 'app-literary-route',
  templateUrl: './literary-route.component.html',
  styleUrls: ['./literary-route.component.css']
})

export class LiteraryRouteComponent implements OnInit{

  literary_route: LiteraryRoute | undefined;
  directionsResults$: Observable<google.maps.DirectionsResult | undefined> | undefined;
  route_directions: {name?: string} = {};

  literary_routes: LiteraryRoute[] = [];

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


  ngOnInit(): void {
    this.apiService.listRoutes().subscribe(data => {
      console.log('...',data);
      this.literary_routes = data
    })

  }
}

