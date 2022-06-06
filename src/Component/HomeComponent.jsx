import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const HomeComponent = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const [isLoading, setLoading] = useState(false);
  const [likeCount, setLikeCount] = useState(123124);
  useEffect(() => {
    setLoading(!isLoading);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const [yAxis, setYaxis] = useState(false);
  useEffect(() => {
    if (window.pageYOffset > 700) {
      setYaxis(true);
      console.log("yAxis", yAxis);
    } else {
      setYaxis(false);
    }
  }, [window.pageYOffset]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <>
          <div className="flex flex-col justify-center align-middle items-center min-h-full">
            <span className=" font-sans text-3xl font-bold text-white">
              Loading...
            </span>
            <Player
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_wzcckjq4.json"
              style={{ height: "30rem", width: "30rem" }}
            ></Player>
          </div>
        </>
      ) : (
        <>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                    divs: {
                      distance: 200,
                      duration: 0.4,
                      mix: false,
                      selectors: [],
                    },
                  },
                  grab: {
                    distance: 400,
                  },
                  push: {
                    groups: ["z5000", "z7500", "z2500", "z1000"],
                  },
                },
              },
              particles: {
                color: {
                  animation: {
                    h: {
                      speed: 20,
                    },
                  },
                },
                groups: {
                  z5000: {
                    number: {
                      value: 70,
                    },
                    zIndex: {
                      value: 50,
                    },
                  },
                  z7500: {
                    number: {
                      value: 30,
                    },
                    zIndex: {
                      value: 75,
                    },
                  },
                  z2500: {
                    number: {
                      value: 50,
                    },
                    zIndex: {
                      value: 25,
                    },
                  },
                  z1000: {
                    number: {
                      value: 40,
                    },
                    zIndex: {
                      value: 10,
                    },
                  },
                },
                links: {
                  color: {
                    value: "#ffffff",
                  },
                  opacity: 0.2,
                },
                move: {
                  angle: {
                    value: 10,
                  },
                  attract: {
                    rotate: {
                      x: 600,
                      y: 1200,
                    },
                  },
                  direction: "right",
                  enable: true,
                  path: {},
                  outModes: {
                    bottom: "out",
                    left: "out",
                    right: "out",
                    top: "out",
                  },
                  speed: 2,
                  spin: {},
                },
                number: {
                  value: 100,
                },
                opacity: {
                  animation: {
                    speed: 3,
                    minimumValue: 0.1,
                  },
                },
                size: {
                  animation: {},
                },
                zIndex: {
                  value: 5,
                  opacityRate: 0.5,
                },
              },
              emitters: {
                autoPlay: true,
                fill: true,
                life: {
                  wait: false,
                },
                rate: {
                  quantity: 1,
                  delay: 7,
                },
                shape: "square",
                startCount: 0,
                size: {
                  mode: "percent",
                  height: 0,
                  width: 0,
                },
                position: {
                  x: -5,
                  y: 55,
                },
              },
            }}
          />
          {yAxis ? (
            <div
              className="btn-primary"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              {" "}
              Back
            </div>
          ) : (
            <></>
          )}
          <div className="container md:flex justify-center align-middle items-center text-center sm:mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 row-auto">
              <div className=" font-sans text-center text-white flex flex-col justify-center">
                <div
                  className=" transition duration-200 ease-in-out hover:scale-105  font-extrabold "
                  style={{ textShadow: "2px 3px 3px rgba(0, 0, 0, 0.39)" }}
                >
                  <p className=" py-1 text-lg md:text-8xl ">WELCOME</p>
                  <p className=" py-1 text-lg md:text-8xl ">TO</p>
                  <p className=" py-1 text-lg md:text-8xl ">MY WEBSITE</p>
                </div>
                <div className=" text-gray-100">
                  My name is Phawit Monchaising. Currently Computer Science at
                  KMUTT.
                </div>
                <div className="flex flex-row gap-6 align-middle justify-center items-center my-5">
                  <svg
                    class="w-6 h-6 text-blue-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <svg
                    class="w-6 h-6 text-blue-300 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  <svg
                    class="w-6 h-6 text-blue-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </div>
              </div>
              <div className="hidden flex sm:block sm:w-full order-first sm:order-last">
                <Player
                  autoplay
                  loop
                  src="https://assets7.lottiefiles.com/packages/lf20_q7uarxsb.json"
                  style={{ height: "50rem", width: "50rem" }}
                ></Player>
              </div>
            </div>
          </div>
          <div className=" min-h-screen">
            <div className="flex flex-col text-center my-52 group overflow-visible">
              <div className="text-7xl sm:text-9xl font-sans font-extrabold bg-clip-text bg-gradient-to-r from-red-600 to-pink-300 text-transparent">
                {likeCount}
              </div>
              <div className="text-4xl sm:text-6xl font-sans font-extrabold bg-clip-text bg-gradient-to-r from-purple-600 to-green-300 text-transparent -translate-y-7">
                Likes
              </div>
              <button
                className="bg-gradient-to-r from-red-500 to-blue-500 w-64 text-center self-center align-middle  items-center h-16 rounded-full flex justify-center hover:border-2 hover:border-slate-200 hover:border-opacity-50 hover: cursor-pointer"
                onClick={() => {
                  setLikeCount(likeCount + 1);
                }}
              >
                <span className="text-center text-white font-sans font-bold disable">
                  Like
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default HomeComponent;
