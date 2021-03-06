import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, Route, Routes, useMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, useElementScroll } from "framer-motion";
import Contact from "../Components/Contact";
import Project from "../Components/Project";
import Profile from "../Components/Profile";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: teal;
  display: flex;
  align-items: center;
`;

const Viewport = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

const ColumnBox = styled.div`
  height: 80vh;
  width: 80vw;
  background-color: tomato;
  border-radius: 2vw;
  margin-left: 4vw;
  display: flex;
`;

const Slider = styled.div`
  position: relative;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-rows: repeat(4, minmax(100vh, auto));
  gap: 1px;
`;

const Box = styled(motion.div)``;

const navVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "black",
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    color: "white",
  },
};

export interface BoolProps {
  detail: {
    home: boolean;
    profile: boolean;
    project: boolean;
    contact: boolean;
  };
}
function RootHome() {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState<any | null>(0);
  const pathName = window.location.pathname;
  const locateMatch = useMatch(pathName);
  const [number, setNumber] = useState<any | null>([]);

  const [viewEvent, setEvent] = useState<number | any>(0);
  const homeMatch = useMatch("/");
  const profileMatch = useMatch("/profile");
  const portfolioMatch = useMatch("/portfolio");
  const contactMatch = useMatch("/contact");
  const [height, setHeight] = useState<number | any>(0);
  const [bool, setBool] = useState<BoolProps["detail"]>({
    home: true,
    profile: false,
    project: false,
    contact: false,
  });

  const { scrollY } = useElementScroll(ref);

  let arr: any = [];

  useEffect(() => {
    const viewHeight = ref.current?.scrollHeight;
    setHeight(() => viewHeight);
  }, [ref]);

  // function handleResize() {
  //   let hframe = window.innerHeight;
  //   setEvent(() => hframe);
  // }
  // // console.log(viewEvent);
  // window.addEventListener("resize", handleResize);

  useEffect(() => {
    for (let i = 1; i <= 5; i++) {
      arr.push(i * (height / 4 / 2));
    }
    if (arr[4] !== 0) {
      scrollY.onChange(() => {
        if (scrollY.get() >= arr[4]) {
          setBool({ ...bool, contact: true, home: false });
        } else if (scrollY.get() >= arr[2]) {
          setBool({ ...bool, project: true, home: false });
        } else if (scrollY.get() >= arr[0]) {
          setBool({ ...bool, profile: true, home: false });
        } else {
          setBool({ ...bool });
        }
      });
    }
  }, [scrollY, height]);

  useEffect(() => {
    const location = document.getElementById(
      `${locateMatch?.pathname}`
    )?.offsetTop;

    setLoad(() => location);
    document
      .getElementById("viewport")
      ?.scrollTo({ top: location, behavior: "smooth" });
  }, [locateMatch]);

  return (
    <>
      <Container>
        <Navbar {...bool} />
        <Viewport ref={ref} style={{ overflow: "auto" }} id="viewport">
          <Slider>
            <Grid>
              <Box id="/">
                <Home />
              </Box>
              <Box id="/profile">
                <Profile />
              </Box>
              <Box id="/project">
                <Project />
              </Box>
              <Box id="/contact">
                <Contact />
              </Box>
            </Grid>
          </Slider>
        </Viewport>

        <Outlet />
      </Container>
      <div>
        <Routes>
          <Route path="/profile" element={<Outlet />} />
          <Route path="/project" element={<Outlet />} />
          <Route path="/contact" element={<Outlet />} />
        </Routes>
      </div>
    </>
  );
}

export default RootHome;
