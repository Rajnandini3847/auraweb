

const HowSection = () => {
  return (
    <section className="container mx-auto ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-16 p-4 md:p-6 lg:p-8 ">
        <div className="relative w-full md:w-[600px]">
          <div className="rounded-lg border border-zinc-800  bg-zinc-900/50 p-4">
            <div className="relative rounded-lg border border-zinc-800 bg-zinc-900 p-4 h-[400px]">
              {/* Replace this placeholder with:
      <Image
        src="/your-image-path.png"
        alt="API Keys Setup"
        fill
        className="object-cover"
      /> */}
              {/* image placeholder */}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[600] px-10">
          <h3 className="text-4xl md:text-5xl font-bold text-white pb-4 ">
            Put Your API Keys 
          </h3>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            autem, vel blanditiis possimus dolor non commodi eveniet placeat
            esse incidunt similique maiores eligendi sunt deleniti delectus ea.
            Accusamus, expedita fuga.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 p-4 md:p-6 lg:p-8 ">
        <div className="flex flex-col w-[600] px-10 ">
          <h3 className="text-4xl md:text-5xl font-bold text-white pb-4 ">
            Select Your Favourite LLM 
          </h3>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            autem, vel blanditiis possimus dolor non commodi eveniet placeat
            esse incidunt similique maiores eligendi sunt deleniti delectus ea.
            Accusamus, expedita fuga.
          </p>
        </div>
        <div className="relative w-full md:w-[600px]">
          <div className="rounded-lg border border-zinc-800  bg-zinc-900/50 p-4">
            <div className="relative rounded-lg border border-zinc-800 bg-zinc-900 p-4 h-[400px]">
              {/* Replace this placeholder with:
      <Image
        src="/your-image-path.png"
        alt="API Keys Setup"
        fill
        className="object-cover"
      /> */}
              {/* image placeholder */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
