import Particles from "react-particles";

const DotParticles = (props) => {
  const { particlesInit, particlesLoaded } = props;

  return (
    <Particles
            id="tsparticles"
            style={{
              zIndex: -100,
            }}
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        resize: true,
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                    },
                },
                modes: {
                    grab: {
                        distance: 900,
                        line_linked: {
                            opacity: 1
                        }
                    },
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
                        direction: "none",
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
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                        random: true,
                    },
                    poisson: {
                        enable: true
                    }, 
                },
                detectRetina: true,
            }}
        />
  )
}

export default DotParticles;
