export default function AboutSection() {
  return (
    <div className="bg-[var(--color-card)] p-6 rounded-2xl shadow-sm">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-2">
        Hi, I'm Jefferson Batista
      </h1>
      <p className="max-w-xl leading-relaxed text-[var(--color-text)]">
        I'm a software engineer specializing in iOS and cross-platform development.  
        I love crafting clean, scalable architectures and exploring how design systems,  
        AI, and modern frameworks like SwiftUI and Compose Multiplatform can merge  
        into real-world, production-grade apps.
      </p>
    </div>
  );
}