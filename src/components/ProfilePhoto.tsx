import Image from "next/image";

export default function ProfileSection() {
  return (
    <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          width={190}
          height={250}
          className="object-cover w-full h-full object-top"
        />
      </div>
  );
}