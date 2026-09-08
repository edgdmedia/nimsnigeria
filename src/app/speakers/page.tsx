import Image from "next/image";
import { PageBanner } from "@/components/layout/page-banner";
import { speakers2026 } from "@/data/speakers";

export default function SpeakersPage() {
  return (
    <main className="grow">
      <PageBanner
        title="NIMS 2026 Speakers"
        description="Meet the leaders, policymakers and industry experts shaping Nigeria's industrial workforce conversation."
        bgImage="/images/photos/INGENIOUS_700.webp"
      />

      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Distinguished Speakers
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="font-sans text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              NIMS 2026 brings together public sector leaders, institutional heads and industry voices for two days of practical dialogue and commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers2026.map((speaker) => (
              <article key={speaker.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center border-t-4 border-primary">
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    {speaker.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
