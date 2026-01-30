import SectionHeader from "../components/ui/SectionHeader";
import StatCard from "../components/ui/StatCard";
import { sampleAnalytics } from "../mocks/data";

export default function AnalyticsPage() {
  return (
    <section className="container section">
      <SectionHeader
        title="Analytics & insights"
        subtitle="Track readership, subscriber growth, and paid revenue."
      />
      <div className="grid grid-3">
        <StatCard label="Post views" value={sampleAnalytics.views.toLocaleString()} />
        <StatCard label="Subscribers" value={sampleAnalytics.subscribers.toLocaleString()} />
        <StatCard label="Monthly revenue" value={`$${sampleAnalytics.revenueMonthly}`} />
        <StatCard label="Open rate" value={`${Math.round(sampleAnalytics.openRate * 100)}%`} />
        <StatCard label="Click rate" value={`${Math.round(sampleAnalytics.clickRate * 100)}%`} />
        <StatCard label="Yearly revenue" value={`$${sampleAnalytics.revenueYearly}`} />
      </div>
      <div className="card" style={{ marginTop: "2rem" }}>
        <h3 style={{ marginTop: 0 }}>Growth highlights</h3>
        <p className="muted">
          Audience growth accelerates when mixing Amharic and English content with clear calls to
          action.
        </p>
        <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
          <li>Top referrers: Telegram, X/Twitter, local newsletters</li>
          <li>Best performance: bilingual long-form essays</li>
          <li>Paid conversion: 7.4% monthly</li>
        </ul>
      </div>
    </section>
  );
}
