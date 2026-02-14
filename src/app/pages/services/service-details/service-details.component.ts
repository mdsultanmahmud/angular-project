import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
})
export class ServiceDetailsComponent {
  private route = inject(ActivatedRoute);

  ngOnInit() {
    const serviceId = this.route.snapshot.paramMap.get('id');
    console.log('service id is: ', serviceId);

    // another way to get dynamic value of the route
    this.route.params.subscribe({
      next: (data) => {
        console.log(data);
        console.log(data['id']);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
