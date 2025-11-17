"use client";

export default function HireMePage() {
  return (
    <div className="min-h-screen container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Hire Me</h1>
      <p className="text-muted-foreground max-w-2xl">
        Interested in hiring me for freelance work or a long-term project? 
        Fill in the form below and I will get back to you.
      </p>

      <form
        className="mt-10 grid md:grid-cols-2 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const body = `
Name: ${data.get("name")}
Email: ${data.get("email")}
Budget: ${data.get("budget")}
Timeline: ${data.get("timeline")}
Message: ${data.get("message")}
`;

          window.location.href = `mailto:numaanhussain121@gmail.com?subject=Hire%20Request&body=${encodeURIComponent(
            body
          )}`;
        }}
      >
        <input name="name" placeholder="Your name" className="border p-2 rounded" required />
        <input name="email" type="email" placeholder="Your email" className="border p-2 rounded" required />
        <input name="budget" placeholder="Budget" className="border p-2 rounded" />
        <input name="timeline" placeholder="Timeline" className="border p-2 rounded" />

        <textarea
          name="message"
          placeholder="Tell me about your project..."
          className="border p-2 rounded md:col-span-2"
          rows={6}
          required
        />

        <button type="submit" className="bg-primary text-white px-4 py-2 rounded mt-2">
          Send Request
        </button>
      </form>
    </div>
  );
}
