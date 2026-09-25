import Image from "next/image";
import { PageBanner } from "@/components/layout/page-banner";
import { speakers2026 } from "@/data/speakers";

const KEYNOTE_ID = "tinubu";

export default function SpeakersPage() {
  const keynote = speakers2026.find((speaker) => speaker.id === KEYNOTE_ID);
  const otherSpeakers = speakers2026.filter((speaker) => speaker.id !== KEYNOTE_ID);

  return (
    <main className="grow">
      <PageBanner
        title="NIMS 2026 Speakers"
        description="Meet the leaders, policymakers and industry experts shaping Nigeria's industrial workforce conversation."
        bgImage="/images/photos/INGENIOUS_700.webp"
      />

      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          {keynote && (
            <div className="mb-16 md:mb-24">
              <div className="text-center mb-10">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                  Keynote Speaker
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto"></div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col md:flex-row items-stretch max-w-5xl mx-auto">
                <div className="relative w-full md:w-[40%] aspect-[4/5] md:aspect-auto md:min-h-125 bg-gray-100 overflow-hidden">
                  <Image
                    src={keynote.image}
                    alt={keynote.name}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-center border-t-4 md:border-t-0 md:border-l-4 border-primary">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-3 leading-tight">
                    {keynote.name}
                  </h3>
                  <p className="font-sans font-semibold text-primary mb-6">{keynote.role}</p>
                  <p className="font-sans text-lg text-gray-700 leading-relaxed">
                    His Excellency, President Bola Ahmed Tinubu (GCFR), will open NIMS 2026 with a
                    landmark address Unlocking Nigeria's Human Capital for Industrial Transformation.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Other Speakers
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="font-sans text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              NIMS 2026 brings together public sector leaders, institutional heads and industry voices for two days of practical dialogue and commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherSpeakers.map((speaker) => (
              <article key={speaker.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {speaker.tag && (
                    <span className="absolute top-4 left-4 bg-primary text-white font-sans font-semibold text-xs uppercase tracking-wide px-3 py-1.5 rounded-full shadow">
                      {speaker.tag}
                    </span>
                  )}
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
