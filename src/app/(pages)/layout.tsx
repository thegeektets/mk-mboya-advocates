import { SiteHeader } from "@/components/SiteHeader";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <div className="flex-1">{children}</div>
    </>
  );
}
