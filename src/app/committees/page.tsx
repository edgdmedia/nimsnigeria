import Image from "next/image";
import { PageBanner } from "@/components/layout/page-banner";
import { committees } from "@/data/committee";

export default function CommitteesPage() {
  return (
    <main className="grow">
      <PageBanner
        title="The NIMS 2026 Committees"
        description="Meet the team behind NIMS 2026"
        bgImage="/images/photos/INGENIOUS_700.webp"
      />

      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <p className="font-sans text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed text-center mb-14">
            The National Industrial Manpower Summit is supported by a dedicated team working across planning, logistics, stakeholder engagement, communications and monitoring to deliver the 2026 summit.
          </p>

          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col md:flex-row items-stretch max-w-5xl mx-auto">
            <div className="relative w-full md:w-[40%] aspect-[4/5] md:aspect-auto md:min-h-100 bg-gray-100 overflow-hidden">
              <Image
                src="/images/hon-adamson-oluwatosin-ayinde.webp"
                alt="Hon. Adamson Oluwatosin Ayinde"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-center border-t-4 md:border-t-0 md:border-l-4 border-primary">
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-3 leading-tight">
                Hon. Adamson Oluwatosin Ayinde
              </h3>
              <p className="font-sans font-semibold text-primary mb-2">
                SSA to the President on Industrial Training and Development
              </p>
              <p className="font-sans text-lg text-gray-700">Convener, NIMS 2026</p>
            </div>
          </div>
        </div>
      </section>

      {committees.map((committee) => (
        <section key={committee.id} className="w-full bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                {committee.name}
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="font-sans text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {committee.description}
              </p>
            </div>

            {committee.members.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {committee.members.map((member) => (
                  <article key={member.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                          <span className="font-heading font-bold text-4xl text-primary">
                            {member.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 text-center border-t-4 border-primary">
                      <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 leading-tight">
                        {member.name}
                      </h3>
                      {member.role && (
                        <p className="font-sans text-sm text-gray-600 leading-relaxed italic">
                          {member.role}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-dashed border-gray-300 p-10 text-center">
                <p className="font-sans text-lg text-gray-500 italic">
                  Committee members will be announced shortly.
                </p>
              </div>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
