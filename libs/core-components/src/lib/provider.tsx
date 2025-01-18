
import { HeroUIProvider } from "@heroui/system";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import "./globals.css";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
