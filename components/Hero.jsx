function Hero() {
  return (
    <div className="min-h-screen bg-black">

      <div className="text-7xl text-white absolute mt-32 ml-20">
        <p className="max-w-screen-md font-thin">Empower your business with top-class software development</p>
      </div>
      <video autoPlay muted playsInline loop>
        <source src="/assets/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;
