import * as React from "react";
import { Outlet } from "react-router-dom";

function CivDataIndex() {
  return <Outlet />;
}

export default React.memo(CivDataIndex);
