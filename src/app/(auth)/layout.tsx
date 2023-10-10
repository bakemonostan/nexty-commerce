export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-center justify-center h-full bg-[#c1c1c1]">
      {children}
    </main>
  );
}
