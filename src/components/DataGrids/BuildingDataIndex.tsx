import * as React from "react";
import { Outlet } from "react-router-dom";

function BuildingDataIndex() {
  return <Outlet />;
}

export default React.memo(BuildingDataIndex);
