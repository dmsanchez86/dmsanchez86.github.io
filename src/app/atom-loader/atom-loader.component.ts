import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atom-loader',
  template: `
    <div class="atomLoader" id="atomLoader">
      <div class="contentAtoms">
        <div class="atom"></div>
        <div class="atom"></div>
        <div class="atom"></div>
      </div>
    </div>
  `,
})
export class AtomLoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
