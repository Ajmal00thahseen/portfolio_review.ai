import Image from "next/image";
import Header from "./components/header";
import Button from "@/app/components/Button";
import Hero from "./components/Hero";
import InsightSection from "./components/InsightSection";
import FeatureCard from "./components/FeatureBox";
export default function Home() {
  return (
    <div className="bg-white flex flex-col h-screen">
      <Header />
      <Hero />
      <InsightSection />
      <div className="flex flex-row justify-center items-center ml-14 space-x-3">
        <FeatureCard
          icon={"/icon1.svg"}
          headline={"AI-Powered Analysis"}
          content={
            " Our AI evaluates your portfolio's content, design, and overall effectiveness."
          }
        />
        <FeatureCard
          icon={"/icon2.svg"}
          headline={"Detailed Scoring"}
          content={
            "Receive a score based on key metrics, helping you understand your portfolio's strengths and weaknesses."
          }
        />
        <FeatureCard
          icon={"/icon3.svg"}
          headline={"Actionable Suggestions"}
          content={
            "Get three specific suggestions for improvement, tailored to your portfolio's unique needs."
          }
        />
      </div>
    </div>
  );
}
