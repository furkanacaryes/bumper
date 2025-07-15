import React from "react";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";

import { TabItem } from "./tab-item";
import { ToolbarButton } from "./toolbar-button";


export const TabBar = () => {
  return (
    <div className="flex bg-brand-darkgrey text-white rounded-b-2xl">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="tabs">
          <TabItem label="For business" active />
          <TabItem label="For drivers" />
        </div>

        <ToolbarButton type="secondary" label="Partner login" icon={faSignIn} />
      </div>
    </div>
  );
}
