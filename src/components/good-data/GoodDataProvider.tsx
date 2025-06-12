"use client";

import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui-all";
import backend from "./tigerbackend";

export default function GoodDataProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BackendProvider backend={backend}>
      <WorkspaceProvider workspace={process.env.NEXT_PUBLIC_GD_WORKSPACE_ID!}>
        {children}
      </WorkspaceProvider>
    </BackendProvider>
  );
}
