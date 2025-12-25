import React from "react";

// import data of simulators
import dataSim from "../data/data.json";

import SimDescriptor from "../components/SimDescriptor";

// Styles
import "../styles/TabsView.css";

export default function SimMechanics() {
  return (
    <div className="TabFrame-pane tab-pane-right">
      <div className="TabFrame-pane tab-pane-right-content">
        <div className="SimFrame">
          <div className="Simulators-pane">
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion PM_20241"
                pathUrl={dataSim.simPeMa20241.path}
                imgDir={dataSim.simPeMa20241.icon}
                title={dataSim.simPeMa20241.title}
                abstract={dataSim.simPeMa20241.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion MW_20252"
                pathUrl={dataSim.simMaWh20252.path}
                imgDir={dataSim.simMaWh20252.icon}
                title={dataSim.simMaWh20252.title}
                abstract={dataSim.simMaWh20252.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion PS_20251"
                pathUrl={dataSim.simPeSo20251.path}
                imgDir={dataSim.simPeSo20251.icon}
                title={dataSim.simPeSo20251.title}
                abstract={dataSim.simPeSo20251.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion ET"
                pathUrl={dataSim.simEnTr.path}
                imgDir={dataSim.simEnTr.icon}
                title={dataSim.simEnTr.title}
                abstract={dataSim.simEnTr.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion MA"
                pathUrl={dataSim.simMeAx.path}
                imgDir={dataSim.simMeAx.icon}
                title={dataSim.simMeAx.title}
                abstract={dataSim.simMeAx.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion FM_20231"
                pathUrl={dataSim.simFlMo20231.path}
                imgDir={dataSim.simFlMo20231.icon}
                title={dataSim.simFlMo20231.title}
                abstract={dataSim.simFlMo20231.abst}
              />
            </div>
          </div>
        </div>

        <div className="SimFrame">
          <div className="Simulators-pane">
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion TB_20242"
                pathUrl={dataSim.simThBo20242.path}
                imgDir={dataSim.simThBo20242.icon}
                title={dataSim.simThBo20242.title}
                abstract={dataSim.simThBo20242.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion CM_20252"
                pathUrl={dataSim.simCoMa20252.path}
                imgDir={dataSim.simCoMa20252.icon}
                title={dataSim.simCoMa20252.title}
                abstract={dataSim.simCoMa20252.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion EC"
                pathUrl={dataSim.simEnCo.path}
                imgDir={dataSim.simEnCo.icon}
                title={dataSim.simEnCo.title}
                abstract={dataSim.simEnCo.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion BD"
                pathUrl={dataSim.simBoDr.path}
                imgDir={dataSim.simBoDr.icon}
                title={dataSim.simBoDr.title}
                abstract={dataSim.simBoDr.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion PL_20231"
                pathUrl={dataSim.simPaLa20231.path}
                imgDir={dataSim.simPaLa20231.icon}
                title={dataSim.simPaLa20231.title}
                abstract={dataSim.simPaLa20231.abst}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
