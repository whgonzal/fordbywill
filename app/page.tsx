import { getInventory } from "@/lib/inventory/source";
import VehicleCard from "@/components/VehicleCard";
import { SITE_NAME } from "@/lib/config";

export default async function Home() {
  const inventory = await getInventory();

  return (
    <div style={{ paddingTop: 18, display: "grid", gap: 18 }}>
      <section className="card" style={{ padding: 18 }}>
        <h1 className="h1">{SITE_NAME}</h1>
        <p className="p">Browse inventory and send inquiries directly to Will.</p>
      </section>

      <section id="inventory" className="card" style={{ padding: 18 }}>
        <h2 className="h2">Inventory</h2>
        <div className="grid" style={{ marginTop: 14 }}>
          {inventory.map((v) => <VehicleCard key={v.id} vehicle={v} />)}
        </div>
      </section>
    </div>
  );
}
