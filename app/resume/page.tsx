import type { Metadata } from "next";
import ResumeContent from "./ResumeContent";

export const metadata: Metadata = {
  title: "Resume | Arnold Kevin Desouza",
  description: "View and download Arnold Kevin Desouza's resume.",
};

export default function ResumePage() {
  return <ResumeContent />;
}
