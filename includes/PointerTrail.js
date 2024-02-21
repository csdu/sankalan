import Particles from "@tsparticles/react";

const PointerTrail = (props) => {
  const { particlesInit, particlesLoaded } = props;

  return (
    <Particles
            id="pointertrail"
            style={{
              zIndex: 10000,
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
                          mode: "particle"
                        }
                    },
                },
                modes: {
                  particle: {
                    replaceCursor: false,
                    pauseOnStop: false
                  }
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    animation: {
                      enable: true,
                      speed: 180,
                      sync: true
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
                        value: 0,
                    },
                    effect: {
                      type: "trail",
                      options: {
                        trail: {
                          length: 10,
                          minWidth: 2
                        }
                      }
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                      value: 5
                    },
                },
                detectRetina: true,
            }}
        />
  )
}

export default PointerTrail;
