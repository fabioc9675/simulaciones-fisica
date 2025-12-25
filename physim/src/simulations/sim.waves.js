import React from "react";

// import data of simulators
import dataSim from "../data/data.json";

import SimDescriptor from "../components/SimDescriptor";

// Styles
import "../styles/TabsView.css";

export default function SimWaves() {
  return (
    <div className="TabFrame-pane tab-pane-right">
      <div className="TabFrame-pane tab-pane-right-content">
        <div className="SimFrame">
          <div className="Simulators-pane">
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion OG_20251"
                pathUrl={dataSim.simOpGe20251.path}
                imgDir={dataSim.simOpGe20251.icon}
                title={dataSim.simOpGe20251.title}
                abstract={dataSim.simOpGe20251.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion IM_20242"
                pathUrl={dataSim.simInMz20242.path}
                imgDir={dataSim.simInMz20242.icon}
                title={dataSim.simInMz20242.title}
                abstract={dataSim.simInMz20242.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion AS_20241"
                pathUrl={dataSim.simAtSp20241.path}
                imgDir={dataSim.simAtSp20241.icon}
                title={dataSim.simAtSp20241.title}
                abstract={dataSim.simAtSp20241.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion DS_20241"
                pathUrl={dataSim.simDoSl20241.path}
                imgDir={dataSim.simDoSl20241.icon}
                title={dataSim.simDoSl20241.title}
                abstract={dataSim.simDoSl20241.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion SP"
                pathUrl={dataSim.simSiPe.path}
                imgDir={dataSim.simSiPe.icon}
                title={dataSim.simSiPe.title}
                abstract={dataSim.simSiPe.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion DO"
                pathUrl={dataSim.simDaOs.path}
                imgDir={dataSim.simDaOs.icon}
                title={dataSim.simDaOs.title}
                abstract={dataSim.simDaOs.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion DP"
                pathUrl={dataSim.simDoPe.path}
                imgDir={dataSim.simDoPe.icon}
                title={dataSim.simDoPe.title}
                abstract={dataSim.simDoPe.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion RP_20231"
                pathUrl={dataSim.simRiPe20231.path}
                imgDir={dataSim.simRiPe20231.icon}
                title={dataSim.simRiPe20231.title}
                abstract={dataSim.simRiPe20231.abst}
              />
            </div>
          </div>
        </div>

        <div className="SimFrame">
          <div className="Simulators-pane">
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion NO_20252"
                pathUrl={dataSim.simNoOs20252.path}
                imgDir={dataSim.simNoOs20252.icon}
                title={dataSim.simNoOs20252.title}
                abstract={dataSim.simNoOs20252.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion SF_20251"
                pathUrl={dataSim.simSoFo20251.path}
                imgDir={dataSim.simSoFo20251.icon}
                title={dataSim.simSoFo20251.title}
                abstract={dataSim.simSoFo20251.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion CO_20242"
                pathUrl={dataSim.simCoOs20242.path}
                imgDir={dataSim.simCoOs20242.icon}
                title={dataSim.simCoOs20242.title}
                abstract={dataSim.simCoOs20242.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion CO"
                pathUrl={dataSim.simCoOs.path}
                imgDir={dataSim.simCoOs.icon}
                title={dataSim.simCoOs.title}
                abstract={dataSim.simCoOs.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion SR"
                pathUrl={dataSim.simSuRe.path}
                imgDir={dataSim.simSuRe.icon}
                title={dataSim.simSuRe.title}
                abstract={dataSim.simSuRe.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion DO_20231"
                pathUrl={dataSim.simDoOs20231.path}
                imgDir={dataSim.simDoOs20231.icon}
                title={dataSim.simDoOs20231.title}
                abstract={dataSim.simDoOs20231.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion PO_20232"
                pathUrl={dataSim.simPiOs20232.path}
                imgDir={dataSim.simPiOs20232.icon}
                title={dataSim.simPiOs20232.title}
                abstract={dataSim.simPiOs20232.abst}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
