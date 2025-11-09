import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="flex items-center gap-8 mb-12">
      <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          width={250}
          height={250}
          className="object-cover w-full h-full object-top"
        />
      </div>

      <div>
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
    </section>
  );
}