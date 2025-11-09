const interests = ["Gaming", "Traveling", "Music"];

export default function InterestsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-xl text-[var(--color-secondary)] mb-4">Interests</h2>
      <div className="flex gap-3 flex-wrap">
        {interests.map((item) => (
          <span
            key={item}
            className="bg-[var(--color-surface)] px-4 py-2 rounded-xl text-sm text-[var(--color-muted)]"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}