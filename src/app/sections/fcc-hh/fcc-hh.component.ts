import { Component, OnInit } from '@angular/core';

import { EventDisplayService } from 'phoenix-ui-components';
import {
  Configuration,
  PresetView,
  PhoenixMenuNode,
  PhoenixLoader,
    ScriptLoader,

  StateManager,
} from 'phoenix-event-display';

@Component({
  selector: 'app-fcc-ff',
  templateUrl: './fcc-hh.component.html',
  styleUrls: ['./fcc-hh.component.scss']
})
export class FccHhComponent implements OnInit {

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
    //this.eventDisplay.loadRootGeometry(JSROOT, 'assets/test.root', 'default;1', "root geom" , 'ROOT GEOMETRY', 1, true, true);

    ScriptLoader.loadJSRootScripts().then((JSROOT)=> {
	//this.eventDisplay.loadRootGeometry(
	//JSROOT,
	//'assets/fccee-geo.root',
        //'CMS Detector',
	//undefined,
	//10,
	//true
	//);
	this.eventDisplay.loadRootGeometry(JSROOT, 'assets/fcchh-geo.root', 'world;1', "root geom" , 'ROOT GEOMETRY', 1, true, true);
   });  


  }


}
