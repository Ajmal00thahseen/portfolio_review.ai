import Image from "next/image";
import Button from "@/app/components/Button";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 relative">
      <div>
        <Image src="/card_img1.svg" height={480} width={928} alt="CardImg" />
      </div>
      <div className="flex flex-col items-center mt-48 absolute">
        <p className="text-5xl p-3 text-white font-extrabold">
          Get AI-Powered Portfolio Feedback
        </p>
        <p className="text-white w-4xl text-center">
          Upload your portfolio and receive instant, actionable feedback from
          our AI. Improve your portfolio's impact and land your dream job.
        </p>
        <div className="mt-8">
          <Button>Upload Portfolio</Button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
