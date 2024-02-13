import React from "react";

const Partners = () => {
    return (
        <section className="max-w-screen-xl py-16">
            <div className="flex flex-col items-center gap-6">
                <div className="max-w-screen-md text-center">
                    <p className="text-xl">
                        Trusted by teams at over <strong>1,000</strong> of the
                        world’s leading organizations
                    </p>
                </div>
                <div>
                    <ul className="flex items-center gap-12">
                        <li>
                            <img src="/dell.png" alt="Dell" />
                        </li>
                        <li>
                            <img src="/zendesk.png" alt="Zendesk" />
                        </li>
                        <li>
                            <img src="/rakuten.png" alt="Rakuten" />
                        </li>
                        <li>
                            <img src="/pacific.png" alt="Pacific" />
                        </li>
                        <li>
                            <img src="/ncr.png" alt="NCR" />
                        </li>
                        <li>
                            <img src="/lattice.png" alt="Lattice" />
                        </li>
                        <li>
                            <img src="/ted.png" alt="TED" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Partners;
