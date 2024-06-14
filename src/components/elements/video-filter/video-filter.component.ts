import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-video-filter',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './video-filter.component.html',
  styleUrl: './video-filter.component.css'
})
export class VideoFilterComponent {

  @Output() filterChange = new EventEmitter<string>();
  filterText = '';

  onFilterChange() {
    this.filterChange.emit(this.filterText);
  }

}
