export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Clinic floor</h1>
      <p className="max-w-2xl text-slate-600">
        Staff dashboard for managing agents, ailments, therapies, and
        appointments. Patient records and booking tools will appear here in
        upcoming phases.
      </p>
      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
        No agents registered yet. The waiting room is empty — for now.
      </div>
    </div>
  );
}
