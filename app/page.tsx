import HackathonIntro from "@/components/Intro";
import Timeline from "@/components/TimeLine";
import Tracks from "@/components/Tracks";
import FAQ from "@/components/Faq"
import Sponsors from "@/components/Sponsors";


export default function Home() {
  return (
    <main className="flex flex-col">
      <HackathonIntro />
          <Tracks />
          <Sponsors />
          {/* <Panel /> */}
          <Timeline />
          {/* <TeamComponent /> */}
          <FAQ />
    </main>
  );
}
