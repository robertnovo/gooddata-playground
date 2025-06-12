"use client";

import { idRef } from "@gooddata/sdk-model";
import { Dashboard } from "@gooddata/sdk-ui-dashboard";

const dashboard = idRef(process.env.NEXT_PUBLIC_GD_DASHBOARD_ID!);

export const EmbeddedDashboard = () => {
  return <Dashboard dashboard={dashboard} />;
};
