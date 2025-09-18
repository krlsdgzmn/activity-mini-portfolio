import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import AboutPanel from "./AboutPanel";
import SkillsPanel from "./SkillsPanel";

export default function TabsMenu() {
  const [value, setValue] = useState(0);

  function propsHandler(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Tabs
        value={value}
        onChange={(_, index: number) => setValue(index)}
        sx={tabsStyle}
      >
        <Tab label="About" {...propsHandler(0)} />
        <Tab label="Skills" {...propsHandler(1)} />
      </Tabs>

      <AboutPanel value={value} />
      <SkillsPanel value={value} />
    </>
  );
}

const tabsStyle = {
  marginTop: 4,
};
