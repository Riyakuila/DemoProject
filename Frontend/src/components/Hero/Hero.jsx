import React from "react";

const Hero =() => {
    return (
        <section
        id="home"
        className="relative flex min-h-screen items-center justify-center text-center bg-cover bg-center overflow-hidden"
        style={{
            backgroundImage: `linear-gradient(
                130deg,rgba(3,0,0,0.84),
                rgba(0,0,0,0.5),
                rgba(150,100,50,0.12)
                ),
                url('/Images/background_3.png')`,
        }}
        >
            <div className="absolute top-10 right-10 h-72 w-80 bg-orange-500/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-300/10 blur-3xl rounded-full"></div>

            <div className="relative z-10 max-w-5xl px-6">
                <h1 className="text-white text-7xl md:text-6xl font-bold leading-tight">
                    Building Intelligent <br/>
                    Digital Solution With AI
                </h1>

                <p className="mt-6 text-lg md:text-2xl text-gray-300">
                    <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent font-semibold">
                        by Driksha Infotech Private Limited
                    </span>
                </p>
            </div>

        </section>

    );
};

export default Hero;





