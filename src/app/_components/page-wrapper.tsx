const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex gap-2 border-dashed rounded p-4 border-yellow-500 border flex-grow flex-col">
      {children}
    </main>
  );
};

export default PageWrapper;
