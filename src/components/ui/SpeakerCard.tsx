import Image from "next/image";

interface SpeakerCardProps {
  name: string;
  role: string;
  image: string;
}

export function SpeakerCard({ name, role, image }: SpeakerCardProps) {
  return (
    <figure className="group relative w-full m-0 bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
      <div className="relative w-full aspect-[4/5] bg-[#333] grayscale contrast-105">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover object-center"
        />
      </div>
      <figcaption className="p-5 border-t-[3px] border-accent bg-white">
        <div className="font-display font-bold text-lg text-ink-900 leading-tight">
          {name}
        </div>
        {role && (
          <div className="text-sm text-ink-500 mt-1">
            {role}
          </div>
        )}
      </figcaption>
    </figure>
  );
}
