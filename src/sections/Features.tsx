import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tags";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl md:text-6xl lg:text-7xl text-center font-medium mt-6 max-w-2xl mx-auto">
                    Where power meets{" "}
                    <span className="text-lime-400">simplicity</span>
                </h2>
                <div className="mt-12 grid grid-col-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Real-time Collaboration"
                        description="Work Together seemlessly with conflict-free team editing"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center gap-2">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    className="rounded-full"
                                    alt="Team member 1"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 z-30 border-indigo-500">
                                <Image
                                    src={avatar2}
                                    className="rounded-full"
                                    alt="Team member 2"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 z-20 border-amber-500">
                                <Image
                                    src={avatar3}
                                    className="rounded-full"
                                    alt="Team member 3"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                                <div className="relative size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                                    <Image
                                        src={avatar4}
                                        alt="Team member 4"
                                        className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                                    ></Image>
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            className="size-1.5 rounded-full bg-white inline-flex"
                                            key={i}
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Interactive Prototyping"
                        description="Enagege your clients with prototypes that react to user actions"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-vedio flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">
                                We&apos;ve achived{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                                    <span>incredible</span>
                                    <video
                                        src="/assets/gif-incredible.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none transition duration-500 group-hover:opacity-100"
                                    ></video>
                                </span>{" "}
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description="Powerful commands to help you create designs more quickly"
                        className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto"
                    >
                        <div className="aspect-video flex items-center justify-center gap-2">
                            <Key className="w-28">shift</Key>
                            <Key>alt</Key>
                            <Key>C</Key>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center text-xl"
                        >
                            <span className="bg-lime-400 text-neutral-500 size-5 rounded-full inline-flex items-center justify-center">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
