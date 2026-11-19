import HeroText from "@/components/ui/hero-shutter-text";

export const metadata = { robots: { index: false, follow: true } };

export default function DemoPage() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-white flex items-center justify-center">
      <HeroText text="Bajwaa.Dev" />
    </main>
  );
}
