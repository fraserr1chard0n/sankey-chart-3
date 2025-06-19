import React from "react";
import ReactDOM from "react-dom/client";
import { ResponsiveSankey } from "@nivo/sankey";
import "./index.css";

const data = {
  nodes: [
    { id: "Government Industrial Strategy" },
    { id: "Innovate UK" },
    { id: "ESA" },
    { id: "MoD" },
    { id: "NIHR" },
    { id: "Grant Funding" },
    { id: "CapEx" },
    { id: "R&D" },
    { id: "Energy & Net Zero" },
    { id: "Undefined CapEx" },
    { id: "Automotive & Manufacturing" },
    { id: "Aerospace & Defence" },
    { id: "Medical" },
    { id: "Software" },
    { id: "Others" }
  ],
 links: [
  // Funding sources → Grant Funding
  { source: "Government Industrial Strategy", target: "Grant Funding", value: 1400 },
  { source: "Innovate UK", target: "Grant Funding", value: 910 },
  { source: "ESA", target: "Grant Funding", value: 85 },
  { source: "MoD", target: "Grant Funding", value: 50 },
  { source: "NIHR", target: "Grant Funding", value: 50 },

  // Grant Funding → CapEx & R&D
  { source: "Grant Funding", target: "CapEx", value: 1400 },
  { source: "Grant Funding", target: "R&D", value: 1095 },

  // CapEx → Sectors
  { source: "CapEx", target: "Energy & Net Zero", value: 1325 },
  { source: "CapEx", target: "Undefined CapEx", value: 350 },
  { source: "CapEx", target: "Automotive & Manufacturing", value: 75 },

  // R&D → Sectors
  { source: "R&D", target: "Energy & Net Zero", value: 75 }, // ✅ NEW
  { source: "R&D", target: "Automotive & Manufacturing", value: 218 },
  { source: "R&D", target: "Aerospace & Defence", value: 260 },
  { source: "R&D", target: "Medical", value: 156 },
  { source: "R&D", target: "Software", value: 74 },
  { source: "R&D", target: "Others", value: 37 }
]
};

const Chart = () => (
  <div style={{ height: "100vh", padding: "2rem", background: "#fff" }}>
    <ResponsiveSankey
      data={data}
      margin={{ top: 40, right: 160, bottom: 40, left: 180 }}
      align="justify"
      colors={{ scheme: "category10" }}
      nodeOpacity={1}
      nodeThickness={18}
      nodeSpacing={24}
      nodeBorderWidth={1}
      nodeBorderColor={{ from: "color", modifiers: [["darker", 0.8]] }}
      linkOpacity={0.4}
      linkHoverOpacity={0.6}
      linkBlendMode="multiply"
      labelPosition="outside"
      labelOrientation="horizontal"
      labelPadding={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Chart />);
