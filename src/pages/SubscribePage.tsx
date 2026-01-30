import { useParams } from "react-router-dom";
import SubscribeCard from "../components/ui/SubscribeCard";
import { samplePlans } from "../mocks/data";

export default function SubscribePage() {
  const { authorHandle } = useParams();

  return (
    <section className="container section">
      <h1>Subscribe to @{authorHandle}</h1>
      <p className="muted">
        Support independent writers. Choose monthly or yearly plans, with Stripe-style checkout.
      </p>
      <div className="grid grid-3">
        {samplePlans.map((plan) => (
          <SubscribeCard key={plan.id} plan={plan} />
        ))}
      </div>
      <div className="card" style={{ marginTop: "2rem" }}>
        <h3 style={{ marginTop: 0 }}>Email delivery</h3>
        <p className="muted">
          Get every post in your inbox. Manage preferences and unsubscribe at any time.
        </p>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <input className="input" placeholder="you@example.com" />
          <button className="btn btn-accent">Confirm email</button>
        </div>
      </div>
    </section>
  );
}
