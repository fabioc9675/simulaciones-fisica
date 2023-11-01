import React from "react";

// import data of simulators
import dataSim from "../data/data.json";

import SimDescriptor from "../components/SimDescriptor";

// Styles
import "../styles/TabsView.css";

export default function SimTermo() {
  return (
    <div className="TabFrame-pane tab-pane-right">
      <div className="TabFrame-pane tab-pane-right-content">
        <div className="SimFrame">
          <div className="Simulators-pane">
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion IG"
                pathUrl={dataSim.simIdGa.path}
                imgDir={dataSim.simIdGa.icon}
                title={dataSim.simIdGa.title}
                abstract={dataSim.simIdGa.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion GD_20232"
                pathUrl={dataSim.simGaDi20232.path}
                imgDir={dataSim.simGaDi20232.icon}
                title={dataSim.simGaDi20232.title}
                abstract={dataSim.simGaDi20232.abst}
              />
            </div>
          </div>
        </div>

        <div className="SimFrame">
          <div className="Simulators-pane">
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion LV"
                pathUrl={dataSim.simLoVo.path}
                imgDir={dataSim.simLoVo.icon}
                title={dataSim.simLoVo.title}
                abstract={dataSim.simLoVo.abst}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
