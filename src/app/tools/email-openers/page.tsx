import { pageMetadata } from "@/lib/page-metadata";
import EmailOpenersClient from "./EmailOpenersClient";

export const metadata = pageMetadata(
  "/tools/email-openers",
  "Outbound Email Opener Templates",
  "Explore outbound email openers by recipient role and outreach approach, with examples you can adapt for your own message.",
);

export default function EmailOpenersPage() {
  return <EmailOpenersClient />;
}
