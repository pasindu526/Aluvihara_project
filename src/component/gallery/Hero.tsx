import bgImage from "../../assets/images/landing/gallery.webp";

const Hero = () => {
  return (
    <div className="relative h-[50dvh] min-h-[500px] md:min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-bottom z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Hero Content */}
      <div className="w-full pr-4 relative z-10">
        <div className="lg:w-[800px] md:max-w-[90%] md:mr-auto">
          <div className="bg-black/70 bg-opacity-60 p-6 rounded-md md:rounded-r-[10px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-2 pl-0 md:pl-14 font-roboto leading-[1.5] md:leading-[1.5] lg:leading-[1.3] text-center md:text-left">
              <span className="text-primary  block">Legacy</span>
              <span className="text-white">of Aluvihara</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
