import React from "react";
import GroupIcon from "@material-ui/icons/Group";

function AccordionItems(props) {
  return (
    <div className="sidebar__group">
      <GroupIcon className="sidebar__groupIcon" />
      <p>{props.children}</p>
    </div>
  );
}

export default AccordionItems;
