import Link from "next/link";

export default function ContactPage() {
  return (
    <div style={{ paddingTop: 18 }}>
      <section className="card" style={{ padding: 18 }}>
        <h1 className="h1">Contact Will</h1>
        <p className="p">Call/Text: (210) 542-5451</p>
        <div style={{ marginTop: 14 }}>
          <Link className="btn secondary" href="/">Back home</Link>
        </div>
      </section>
    </div>
  );
}
