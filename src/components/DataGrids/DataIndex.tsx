import * as React from "react";
import { Outlet } from "react-router-dom";

function DataIndex() {
  return <Outlet />;
}

export default React.memo(DataIndex);
