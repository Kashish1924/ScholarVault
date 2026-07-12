import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, CheckCircle2, Wallet, Calendar, FileText, AlertTriangle, Lightbulb, Building2, Trophy, Award, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scholarship Guide for Students | DHTESS, NSP YASASVI, NSUT CVSPK & More" },
      { name: "description", content: "A clear, complete guide to major scholarships for engineering students — eligibility, financial assistance, timelines, and required documents." },
      { property: "og:title", content: "Scholarship Guide for Students" },
      { property: "og:description", content: "Eligibility, timelines, and required documents for DHTESS, NSP YASASVI, NSUT CVSPK, and private scholarships." },
    ],
  }),
  component: Guide,
});

function ApplyButton({ href, label = "Apply on Official Portal" }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
    >
      {label}
      <ExternalLink className="h-4 w-4" />
    </a>
  );
}

function SectionCard({
  number,
  title,
  subtitle,
  children,
  icon: Icon,
  applyHref,
  applyLabel,
}: {
  number: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
  applyHref?: string;
  applyLabel?: string;
}) {
  return (
    <section className="relative rounded-3xl border border-border bg-card p-8 shadow-sm md:p-12">
      <div className="mb-8 flex items-start gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <Icon className="h-7 w-7" />
        </div>
        <div className="flex-1">
          <div className="mb-1 font-mono text-xs tracking-[0.2em] text-muted-foreground">
            SCHOLARSHIP · {number}
          </div>
          <h2 className="font-serif text-2xl leading-tight text-foreground md:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="space-y-6">{children}</div>
      {applyHref && (
        <div className="mt-8 border-t border-border pt-6">
          <ApplyButton href={applyHref} label={applyLabel} />
        </div>
      )}
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
  tone = "default",
  timeline,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
  tone?: "default" | "warning";
  timeline?: Array<{ label: string; value: string }>;
}) {
  const isWarn = tone === "warning";
  return (
    <div
      className={`rounded-2xl border p-5 ${
        isWarn
          ? "border-accent bg-accent/40"
          : "border-border bg-secondary/40"
      }`}
    >
      <div className="mb-3 flex items-center gap-2">
        <Icon className={`h-4 w-4 ${isWarn ? "text-destructive" : "text-primary"}`} />
        <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground">
          {label}
        </h3>
      </div>
      <div className="space-y-2 text-sm leading-relaxed text-foreground/90">
        {children}
      </div>
      {timeline && timeline.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {timeline.map((item) => (
            <div
              key={`${item.label}-${item.value}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80"
            >
              <span className="font-mono uppercase tracking-[0.2em] text-muted-foreground">
                {item.label}
              </span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Bullet({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <p>
      {label && <span className="font-semibold text-foreground">{label} </span>}
      <span className="text-foreground/80">{children}</span>
    </p>
  );
}

const scholarshipTimeline = {
  dhtess: [
    { label: "Open", value: "Jan–Mar" },
    { label: "Apply by", value: "End of March" },
    { label: "Renewal", value: "Each year" },
  ],
  nsp: [
    { label: "Open", value: "Jul–Oct" },
    { label: "Apply by", value: "Late Oct" },
    { label: "Renewal", value: "Next cycle" },
  ],
  nsut: [
    { label: "Notice", value: "Mid-semester" },
    { label: "Apply by", value: "Weeks after notice" },
    { label: "Office", value: "DSW / portal" },
  ],
} as const;

const privateScholarships = [
  {
    name: "HDFC Bank Parivartan's ECSS",
    body: "Open to 1st–4th year UGs with family income under ₹2.5 Lakh. Support of ₹50,000–₹1,00,000 depending on course. Forms usually live on Buddy4Study in July–August.",
    href: "https://www.buddy4study.com/scholarship/hdfc-bank-parivartans-ecss-programme",
    deadline: "Official cycle deadlines: 4 Sep 2025, 30 Oct 2025, and 31 Dec 2025",
  },
  {
    name: "Reliance Foundation UG",
    body: "Primarily for 1st-year UG students. Selection via a basic online aptitude test plus merit-cum-means. Up to ₹2 Lakh support across the degree.",
    href: "https://www.scholarships.reliancefoundation.org/UG_Scholarship.aspx",
    deadline: "Check the official portal for the current year’s closing date after the application window opens",
  },
  {
    name: "Siemens Scholarship",
    body: "1st-year engineering students from top government colleges (NSUT, DTU, etc.). Requires strong academic performance; provides full tuition fee support.",
    href: "https://www.buddy4study.com/scholarship/siemens-scholarship-programme",
    deadline: "Current-cycle dates are announced on the scholarship page; follow the official notice for the closing date",
  },
  {
    name: "Amazon Future Engineer",
    body: "Strictly for female students in 1st year of engineering (CS/IT or allied ECE/VLSI). Includes financial grant plus Amazon mentorship and internship opportunities.",
    href: "https://amazonfutureengineer.in/scholarship",
    deadline: "Application end date varies by intake cycle — verify the latest notice on the official page",
  },
  {
    name: "ONGC Scholarship",
    body: "For 1st-year engineering students from SC/ST/OBC and General EWS categories. Merit-based selection; links available on Buddy4Study.",
    href: "https://www.buddy4study.com/scholarship/ongc-scholarship",
    deadline: "Buddy4Study and the official scheme page publish the closing date with each yearly announcement",
  },
  {
    name: "Tata Capital Pankh",
    body: "Any-year UG student with family income under ₹2.5 Lakh and a good percentage in the previous class.",
    href: "https://www.buddy4study.com/scholarship/tata-capital-pankh-scholarship",
    deadline: "Current-year deadline is listed on the official scholarship page once the application cycle opens",
  },
] as const;

function Guide() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "24px 24px"
        }} />
        <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 font-mono text-xs tracking-[0.2em]">
            <GraduationCap className="h-3.5 w-3.5" />
            STUDENT GUIDE · 2025
          </div>
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
            Scholarship Guide<br />for Students
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            Everything you need to know about government, university, and private scholarships for engineering students — eligibility, funding, deadlines, and documents.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { k: "01", v: "DHTESS / MCM" },
              { k: "02", v: "NSP YASASVI" },
              { k: "03", v: "NSUT CVSPK" },
              { k: "04", v: "Private & Corporate" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-4">
                <div className="font-mono text-xs text-primary-foreground/60">{s.k}</div>
                <div className="mt-1 text-sm font-medium">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-10 px-6 py-16 md:py-24">
        {/* 1. DHTESS */}
        <SectionCard
          number="01"
          title="DHTESS — Delhi Higher Education & Technical Education Scheme (MCM)"
          subtitle="Provided by the Delhi Government under a Merit-cum-Means framework — both academic marks and family income are considered."
          icon={Building2}
          applyHref="https://edistrict.delhigovt.nic.in/"
          applyLabel="Apply on E-District Delhi"
        >
          <InfoRow icon={CheckCircle2} label="Eligibility Criteria">
            <Bullet label="Delhi Resident:">Valid Delhi domicile, voter ID, or proof (e.g. 10th/12th passed from Delhi + Ration card).</Bullet>
            <Bullet label="University:">Must be enrolled in a Delhi Government University/College (NSUT, DTU, IGDTUW, etc.).</Bullet>
            <Bullet label="Family Income:">Total family income ≤ ₹3 Lakh/year.</Bullet>
            <Bullet label="Academic Marks:">Minimum 75% (or 7.5 CGPA) in previous class. SC/ST relaxation up to 70%.</Bullet>
          </InfoRow>
          <InfoRow icon={Wallet} label="Financial Assistance">
            <Bullet>Full Tuition Fee + University Fee are reimbursed.</Bullet>
          </InfoRow>
          <InfoRow
            icon={Calendar}
            label="Eligible Years & Timeline"
            timeline={scholarshipTimeline.dhtess}
          >
            <Bullet label="Eligible Years:">B.Tech 1st, 2nd, 3rd, and 4th year students (fresh/renewal each year). Note: currently running about a year late.</Bullet>
            <Bullet label="When to Apply:">Forms open on the E-District Delhi portal between January and March.</Bullet>
          </InfoRow>
          <InfoRow icon={FileText} label="Necessary Documents">
            <Bullet>Aadhar Card, valid Income Certificate (SDM-issued, latest FY), Delhi residence proof, Bank Passbook (Aadhar-linked), Ration Card, previous year marksheet/SGPA proofs, and current year fee receipt.</Bullet>
          </InfoRow>
        </SectionCard>

        {/* 2. NSP YASASVI */}
        <SectionCard
          number="02"
          title="NSP — PM YASASVI Scholarship Scheme"
          subtitle="A central government scheme by the Ministry of Social Justice and Empowerment, processed through the National Scholarship Portal (NSP)."
          icon={Award}
          applyHref="https://scholarships.gov.in/"
          applyLabel="Apply on NSP Portal"
        >
          <InfoRow icon={CheckCircle2} label="Eligibility Criteria">
            <Bullet label="Category:">EWS, OBC, EBC, DNT, and also SC/ST students.</Bullet>
            <Bullet label="Family Income:">≤ ₹2.5 Lakh/year.</Bullet>
            <Bullet label="Academic Marks:">Valid passing marks in previous year with no active backlog.</Bullet>
          </InfoRow>
          <InfoRow icon={Wallet} label="Financial Assistance">
            <Bullet>University + tuition fee and other academic allowances, credited directly to the bank account via DBT (amount varies college to college).</Bullet>
          </InfoRow>
          <InfoRow icon={AlertTriangle} label="Critical Application Rule" tone="warning">
            <Bullet>"Fresh Application" on the NSP portal is meant only for 1st-year students. Filing a fresh application in 2nd/3rd/4th year rarely gets selected — the major slots are locked for 1st-year entries.</Bullet>
            <Bullet>Students selected in 1st year only need to submit a "Renewal" form in subsequent years.</Bullet>
          </InfoRow>
          <InfoRow
            icon={Calendar}
            label="Timeline"
            timeline={scholarshipTimeline.nsp}
          >
            <Bullet label="When to Apply:">Applications typically open on NSP between July and September/October.</Bullet>
          </InfoRow>
          <InfoRow icon={FileText} label="Necessary Documents">
            <Bullet>Aadhar Card (bank seeding mandatory), Caste/Category Certificate, latest Income Certificate, School/College Bonafide Certificate, Fee Receipt.</Bullet>
          </InfoRow>
        </SectionCard>

        {/* 3. NSUT CVSPK */}
        <SectionCard
          number="03"
          title="NSUT CVSPK — Chhatra Vittiya Sahayta Evam Protsahan Kosh"
          subtitle="Exclusively for NSUT-enrolled students, administered by the Dean Students Welfare (DSW) office. Includes three sub-schemes."
          icon={Trophy}
          applyHref="https://incentives.nsut.ac.in/"
          applyLabel="Apply on NSUT Incentives"
        >
          <InfoRow icon={CheckCircle2} label="Sub-Scheme 1 · CVSPK FWS (Fee Waiver Scheme)">
            <Bullet>For financially weaker students who couldn't avail the Delhi Govt Merit-cum-Means (DHTESS) benefit.</Bullet>
            <div className="mt-3 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary text-left font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Family Income (p.a.)</th>
                    <th className="px-4 py-3">Tuition Waiver</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Up to ₹2 Lakh", "100%"],
                    ["₹2 Lakh – ₹4 Lakh", "50%"],
                    ["₹4 Lakh – ₹6 Lakh", "25%"],
                    ["₹6 Lakh – ₹8 Lakh", "10%"],
                  ].map(([a, b]) => (
                    <tr key={a}>
                      <td className="px-4 py-3">{a}</td>
                      <td className="px-4 py-3 font-semibold text-primary">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Bullet>No active backlog and a latest SDM-signed Income Certificate are mandatory.</Bullet>
          </InfoRow>
          <InfoRow icon={Trophy} label="Sub-Scheme 2 · CVSPK TIS-I (Talent Incentive — Meritorious)">
            <Bullet>Strictly for department/branch toppers. Top 5% of each department with exceptionally high CGPA get financial rewards or tuition fee reimbursement.</Bullet>
          </InfoRow>
          <InfoRow icon={Award} label="Sub-Scheme 3 · CVSPK TIS-III (Competitive Exams Incentive)">
            <Bullet>Students/alumni scoring top ranks in GATE, CAT, UPSC, Defence Services, or Judiciary exams receive certified financial rewards from the administration.</Bullet>
          </InfoRow>
          <InfoRow
            icon={Calendar}
            label="Eligible Years & Timeline"
            timeline={scholarshipTimeline.nsut}
          >
            <Bullet label="Eligible Years:">1st, 2nd, 3rd, and 4th year students who meet the criteria.</Bullet>
            <Bullet label="When to Apply:">No fixed portal date — the administration issues notices/circulars around mid-semester. Forms and details: <span className="font-mono text-primary">incentives.nsut.ac.in</span> or the offline DSW office.</Bullet>
          </InfoRow>
        </SectionCard>

        {/* 4. Private & Corporate */}
        <SectionCard
          number="04"
          title="Private & Corporate Scholarships"
          subtitle="For engineering students who don't fit government scholarship criteria — worth monitoring throughout the year."
          icon={Building2}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {privateScholarships.map((s, i) => (
              <div key={s.name} className="flex flex-col rounded-2xl border border-border bg-secondary/40 p-5">
                <div className="mb-2 font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </div>
                <h3 className="mb-2 font-serif text-lg text-foreground">{s.name}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground/80">{s.body}</p>
                <div className="mb-4 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80">
                  End date to apply: {s.deadline}
                </div>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Apply now <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Pro Tips */}
        <section className="rounded-3xl border border-primary bg-primary p-8 text-primary-foreground md:p-12">
          <div className="mb-6 flex items-center gap-3">
            <Lightbulb className="h-6 w-6" />
            <h2 className="font-serif text-2xl md:text-3xl">Pro Tips for Every Applicant</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
              <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-primary-foreground/70">
                Buddy4Study Portal
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/90">
                Check <span className="font-semibold">Buddy4Study</span> regularly so you never miss a private or corporate scholarship deadline. It's India's largest scholarship aggregator.
              </p>
            </div>
            <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
              <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-primary-foreground/70">
                Aadhar–Bank Link (DBT Active)
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/90">
                All government scholarships (DHTESS & NSP) are paid via Direct Benefit Transfer. Make sure your bank account is Aadhar-mapped (NPCI seeding complete) — otherwise the amount won't credit even after sanction.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10 text-center">
        <p className="font-mono text-xs tracking-widest text-muted-foreground">
          SCHOLARSHIP GUIDE · COMPILED FOR ENGINEERING STUDENTS
        </p>
      </footer>
    </div>
  );
}
