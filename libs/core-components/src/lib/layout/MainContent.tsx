import { Outlet } from "@tanstack/react-router";
import BackgroundEffect from "./BackgroundEffect";
import PageContainer from "./PageContainer";

export const MainContent = ({children}:{children?: React.ReactNode}) => 
  <div className="min-w-screen min-h-screen flex relative items-center flex-col">
    <PageContainer>
      <Outlet />
      {children}
      <BackgroundEffect/>
    </PageContainer>
  </div>