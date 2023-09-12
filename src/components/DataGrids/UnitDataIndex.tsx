import * as React from "react";
import { Outlet } from "react-router-dom";

function UnitDataIndex() {
  return <Outlet />;
}

export default React.memo(UnitDataIndex);
