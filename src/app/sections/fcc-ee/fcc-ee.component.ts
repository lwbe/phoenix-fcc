import { Component, OnInit } from '@angular/core';

import { EventDisplayService } from 'phoenix-ui-components';
import {
  Configuration,
  PresetView,
  PhoenixMenuNode,
  PhoenixLoader,
  StateManager,
} from 'phoenix-event-display';

@Component({
  selector: 'app-fcc-ee',
  templateUrl: './fcc-ee.component.html',
  styleUrls: ['./fcc-ee.component.scss']
})
export class FccEeComponent implements OnInit {

/** The root Phoenix menu node. */
  phoenixMenuRoot = new PhoenixMenuNode("Phoenix Menu");

  constructor(private eventDisplay: EventDisplayService) { }

  ngOnInit(): void {
    // Create the event display configuration
    const configuration: Configuration = {
      eventDataLoader: new PhoenixLoader(),
      presetViews: [
        new PresetView('Left View', [0, 0, -12000], 'left-cube'),
        new PresetView('Center View', [-500, 12000, 0], 'top-cube'),
        new PresetView('Right View', [0, 0, 12000], 'right-cube')
      ],
      defaultView: [4000, 0, 4000],
      phoenixMenuRoot: this.phoenixMenuRoot,
      // Event data to load by default
      defaultEventFile: {
        // (Assuming the file exists in the `src/assets` directory of the app)
        eventFile: 'assets/test_data/JiveXML.xml',
        eventType: 'jivexml'
      },
    }

    // Initialize the event display
    this.eventDisplay.init(configuration);

    // Load detector geometry (assuming the file exists in the `src/assets` directory of the app)
    this.eventDisplay.loadGLTFGeometry('assets/detector.gltf', 'Detector');
  }


}
