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
                fpsLimit: 120,
                interactivity: {
                    events: {
                        resize: true,
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff80",
                    },
                    links: {
                        color: "#ffffff80",
                        distance: 100,
                        enable: true,
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
                        value: 45,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "square",
                    },
                    size: {
                        value: { min: 1, max: 6 },
                    },
                },
                detectRetina: true,
            }}
        />
  )
}

export default DotParticles;
