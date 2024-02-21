import Particles from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";

const DotParticles = (props) => {
  const { particlesInit, particlesLoaded } = props;
    
  if (particlesInit)
    return (
        <Particles
                id="tsparticles"
                style={{
                     zIndex: -100,
                }}
                particlesLoaded ={particlesLoaded}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            resize: true,
                            onHover: {
                                enable: true,
                                mode: "",
                                parallax: {
                                    enable: true,
                                    force: 60,
                                    smooth: 10,
                                }
                            },
                        },
                    },
                    modes: {
                        grab: {
                            distance: 900,
                            links: {
                                opacity: 1
                            }
                        },
                        attract: {
                            distance: 200,
                            duration: 0.4,
                            easing: 'ease-quad-out',
                            factor: 1,
                            maxSpeed: 50,
                            speed: 1
                        }

                    },
                    particles: {
                        color: {
                            value: "#ffffff80",
                        },
                        links: {
                            color: "#ffffff80",
                            distance: 500,
                            enable: false,
                            opacity: 0.3,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,

                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 3, max: 8 },
                            random: true,
                        },
                    },
                    detectRetina: true,
                }}
            />
  )
  
  return <></>;
}

export default DotParticles;
