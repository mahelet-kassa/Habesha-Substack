import { SubscriptionPlan } from "../../types";

type Props = {
  plan: SubscriptionPlan;
};

export default function SubscribeCard({ plan }: Props) {
  return (
    <div className="card" style={{ display: "grid", gap: "0.8rem" }}>
      <h3 style={{ margin: 0 }}>{plan.name}</h3>
      <div style={{ fontSize: "1.4rem", fontWeight: 600 }}>
        ${plan.priceMonthly}/mo
      </div>
      <div className="muted">${plan.priceYearly}/yr</div>
      <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
        {plan.perks.map((perk) => (
          <li key={perk}>{perk}</li>
        ))}
      </ul>
      <button className="btn btn-accent">Choose plan</button>
    </div>
  );
}
