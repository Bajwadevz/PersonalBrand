import Link from "next/link";
import DemoShowcase from "@/components/DemoShowcase";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata(
  "/services/websites",
  "Service Business Website Concepts",
  "Explore seven fictional service businesses and their booking, quote and enquiry flows from the bajwaa.dev design archive.",
);

export default function WebsiteArchive() {
  return (
    <>
      <section className="container-shell pt-20">
        <h1 className="text-4xl font-bold">Service business website concepts</h1>
        <p className="my-5 max-w-2xl">These archived concepts explore how customers book appointments, request quotes and send enquiries. Each uses a fictional business and sample data.</p>
        <Link className="underline" href="/ai-implementation">Explore our current AI implementation service</Link>
      </section>
      <DemoShowcase />
    </>
  );
}
