import React from "react";
import Button from "./Button";

const Hero = () => {
    return (
        <section className="max-w-screen-xl py-8 px-4">
            <div className="flex flex-col items-center gap-6">
                <div>
                    <Button bg="white" variant="outline">
                        We just raised $20M in Series B. Learn more
                    </Button>
                </div>
                <div className="max-w-screen-sm text-center">
                    <h1 className="text-6xl font-medium">
                        Modern analytics for the modern world
                    </h1>
                </div>
                <div className="max-w-screen-sm text-center">
                    <p className="text-lg px-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                    </p>
                </div>
                <div className="flex gap-4 items-center">
                    <Button bg="white" variant="solid">
                        Download the app
                    </Button>
                    <Button bg="white" variant="outline">
                        Talk to an expert
                    </Button>
                </div>
            </div>
            <div className="pt-20">
                <img src="/graphic.png" alt="graphic Vaultflow" />
            </div>
        </section>
    );
};

export default Hero;
