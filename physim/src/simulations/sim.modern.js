import React from "react";

// import data of simulators
import dataSim from "../data/data.json";

import SimDescriptor from "../components/SimDescriptor";

// Styles
import "../styles/TabsView.css";

export default function SimModern() {
  return (
    <div className="TabFrame-pane tab-pane-right">
      <div className="TabFrame-pane tab-pane-right-content">
        <div className="SimFrame">
          <div className="Simulators-pane">
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion TD_20241"
                pathUrl={dataSim.simTiDi20241.path}
                imgDir={dataSim.simTiDi20241.icon}
                title={dataSim.simTiDi20241.title}
                abstract={dataSim.simTiDi20241.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion NR_20241"
                pathUrl={dataSim.simNuRe20241.path}
                imgDir={dataSim.simNuRe20241.icon}
                title={dataSim.simNuRe20241.title}
                abstract={dataSim.simNuRe20241.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion BB"
                pathUrl={dataSim.simBlBo.path}
                imgDir={dataSim.simBlBo.icon}
                title={dataSim.simBlBo.title}
                abstract={dataSim.simBlBo.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion QA_20232"
                pathUrl={dataSim.simQuAr20232.path}
                imgDir={dataSim.simQuAr20232.icon}
                title={dataSim.simQuAr20232.title}
                abstract={dataSim.simQuAr20232.abst}
              />
            </div>
          </div>
        </div>

        <div className="SimFrame">
          <div className="Simulators-pane">
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion JC_20242"
                pathUrl={dataSim.simJaCu20242.path}
                imgDir={dataSim.simJaCu20242.icon}
                title={dataSim.simJaCu20242.title}
                abstract={dataSim.simJaCu20242.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion TE_20241"
                pathUrl={dataSim.simTuEf20241.path}
                imgDir={dataSim.simTuEf20241.icon}
                title={dataSim.simTuEf20241.title}
                abstract={dataSim.simTuEf20241.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion HA_20231"
                pathUrl={dataSim.simHyAt20231.path}
                imgDir={dataSim.simHyAt20231.icon}
                title={dataSim.simHyAt20231.title}
                abstract={dataSim.simHyAt20231.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion RD_20232"
                pathUrl={dataSim.simRaDe20232.path}
                imgDir={dataSim.simRaDe20232.icon}
                title={dataSim.simRaDe20232.title}
                abstract={dataSim.simRaDe20232.abst}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
