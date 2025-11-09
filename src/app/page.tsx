import ProfileSection from "../components/ProfileSection";
import InterestsSection from "../components/InterestsSection";

export default function Home() {
  return (
    <main className="container">
      <div className="bg-[var(--color-surface)] p-6 rounded-2xl shadow-sm">
        <ProfileSection />
        <InterestsSection />
      </div>
    </main>
  );
}