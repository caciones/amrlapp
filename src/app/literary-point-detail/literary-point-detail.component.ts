import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Point } from '../point';
import { Location } from '@angular/common';
import { SliderImage } from '../slider_image';


@Component({
  selector: 'app-literary-point-detail',
  templateUrl: './literary-point-detail.component.html',
  styleUrls: ['./literary-point-detail.component.css']
})
export class LiteraryPointDetailComponent {
  literary_point: Point | undefined;
  slider_images: SliderImage[] = [];


  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
  ){
    const id = this.route.snapshot.paramMap.get('id')
    this.apiService.getPoint(id).subscribe(data => {
      this.literary_point = data;
      data.images.forEach(element => {
        this.slider_images.push({
          image:element.image,
          thumbImage: element.image,
          alt: element.caption,
          title: element.name})
      });           
    })
  }

  goBack(): void {
    this.location.back();
  }
}
