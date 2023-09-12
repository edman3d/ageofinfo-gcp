import * as React from "react";
import { Outlet } from "react-router-dom";

function TechDataIndex() {
  return <Outlet />;
}

export default React.memo(TechDataIndex);
