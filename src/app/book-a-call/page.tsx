export default function BookACallPage() {
  return (
    <div className="min-h-screen container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Book a Call</h1>
      <p className="text-muted-foreground max-w-2xl">
        Schedule a 1-on-1 session to discuss your project, idea, or collaboration. 
        Select a time that works best for you. 
      </p>

      <div className="mt-10 p-6 rounded-xl border bg-card shadow">
        <iframe
          src="https://cal.com/numaansuhaff/30min"
          className="w-full h-[700px] rounded-xl border"
        />
      </div>
    </div>
  );
}
