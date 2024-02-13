import React from "react";
import CardFeature from "./CardFeature";

const Features = () => {
    return (
        <section className="max-w-screen-xl ">
            <div className="flex flex-col items-center gap-6">
                <div className="max-w-md text-center">
                    <h2 className="text-5xl font-medium">Features that work for your future.</h2>
                </div>
                <div className="max-w-md text-center">
                    <p className="text-lg">
                        Check out our amazing features and experience the power
                        of Vaultflow for yourself.
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <CardFeature  icon="analytics" title="Analytics Dashboard" btn="View dashboard">Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.</CardFeature>
            </div>
        </section>
    );
};

export default Features;
