import type { Metadata } from "next";
import EmailOpenersClient from "./EmailOpenersClient";

export const metadata: Metadata = {
  title: "Outbound Email Opener Templates | bajwaa.dev",
  description: "Stop writing generic 'hope you are doing well' emails. 30+ field-tested cold email hook frameworks categorized by prospect role and tactic.",
  alternates: { canonical: "https://bajwaa.dev/tools/email-openers" },
};

export default function EmailOpenersPage() {
  return <EmailOpenersClient />;
}
