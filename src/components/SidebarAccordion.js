import { useState } from "react";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function SidebarAccordion(props) {
  const [openAccordion, setOpenAccordion] = useState("");

  return (
    <div className={props.class}>
      <p onClick={() => setOpenAccordion(!openAccordion)}>
        {props.title}
        <span>{!openAccordion ? <ExpandMoreIcon /> : <ExpandLessIcon />}</span>
      </p>
      {openAccordion && props.children}
    </div>
  );
}

export default SidebarAccordion;

// <div className="sidebar__group">
//       <GroupIcon className="sidebar__groupIcon" />
//       <p>{group}</p>
//     </div>
