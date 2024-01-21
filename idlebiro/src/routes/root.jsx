import { useState, useEffect } from "react";
import "../App.css"
import ImageWidget from "../components/imageWidget";
import Navbar from "../components/Navbar";
import { artData } from "../data/data";
import Title from "../components/Title";
import Image from "../components/Image";
import { motion, useAnimation } from "framer-motion";


function Root() {
  const titleContainerAnimation = useAnimation();
  const imageContainerAnimation = useAnimation();
  const quoteAnimation = useAnimation();

  useEffect(() => {
    titleContainerAnimation.start({
      opacity: 1,
      y: 0,
      transition: { duration: 2.2, delay: 1.5 },
    });
    imageContainerAnimation.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, delay: 1.5 },
    });
    quoteAnimation.start({
      opacity: 1,
      transition: { duration: 1, delay: 0.6 },
    });
  }, []);

  const [rotationPosition, setRotation] = useState(
    new Array(artData.length).fill(0)
  );
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSetRotation = (itemIndex) => {
    const newRotation =
      Math.random() * 7 * (Math.round(Math.random()) ? 1 : -1);
    const tempState = [...rotationPosition];

    tempState[itemIndex] = newRotation;
    setRotation(tempState);
    setActiveIndex(itemIndex);
  };

  return (
    <>
      <motion.div
        className="flex flex-col justify-center items-center relative mt-2 justify-center"
        initial={{ opacity: 0}}
        animate={quoteAnimation}
      >
        <div className="w-[54px] h-[2px] bg-gray-200"></div>

        <h4 className="tracking-wide text-center my-4 text-gray-500 text-2xl">
          "The sentimental value of a gift is what makes it so significant.
          <br></br> A unique artwork is the perfect way to show them how much
          you care."
        </h4>
        <div className="w-[54px] h-[2px] bg-gray-200"></div>
      </motion.div>
      <div className="main-container">
        <motion.div
          className="title-container"
          initial={{ opacity: 0, y: 130 }}
          animate={titleContainerAnimation}
        >
          <h2 className="text-4xl mb-4 font-semibold">Featured Work</h2>
          <div className="w-[54px] h-[2px] bg-gray-300 mb-4"></div>
          {artData.map(({ pieceName }, index) => (
            <Title
              key={index}
              pieceName={pieceName}
              index={index}
              setRotation={handleSetRotation}
              setIndex={setActiveIndex}
            />
          ))}
        </motion.div>
        <motion.div
          className="image-container"
          initial={{ opacity: 0, y: 130 }}
          animate={imageContainerAnimation}
        >
          {artData.map(({ src }, index) => (
            <Image
              key={index}
              src={src}
              active={activeIndex == index}
              rotationPosition={rotationPosition[index]}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Root;
