import { useEffect, useRef, useState } from "react";
import { Outlet, Route, Routes, useMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, useElementScroll } from "framer-motion";
import Contact from "../Components/Contact";
import Project from "../Components/Project";
import Profile from "../Components/Profile";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import Experience from "../Components/Experience";

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

const Slider = styled.div`
  position: relative;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-rows: repeat(4, minmax(100vh, auto));
  gap: 1px;
`;

const Box = styled(motion.div)``;

export interface BoolProps {
  detail: {
    home: boolean;
    profile: boolean;
    experience: boolean;
    project: boolean;
    contact: boolean;
  };
}
function RootHome() {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState<any | null>(0);
  const pathName = window.location.pathname;
  const locateMatch = useMatch(pathName);
  const [height, setHeight] = useState<number | any>(0);
  const [bool, setBool] = useState<BoolProps["detail"]>({
    home: true,
    profile: false,
    experience: false,
    project: false,
    contact: false,
  });

  const { scrollY } = useElementScroll(ref);

  let arr: any = [];

  useEffect(() => {
    const viewHeight = ref.current?.scrollHeight;
    setHeight(() => viewHeight);
  }, [ref]);

  useEffect(() => {
    for (let i = 1; i <= 4; i++) {
      arr.push(i * (height / 5 / 1.25));
    }
    if (arr[3] !== 0) {
      scrollY.onChange(() => {
        if (scrollY.get() >= arr[3]) {
          setBool({ ...bool, contact: true, home: false });
        } else if (scrollY.get() >= arr[2]) {
          setBool({ ...bool, project: true, home: false });
        } else if (scrollY.get() >= arr[1]) {
          setBool({ ...bool, experience: true, home: false });
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
              <Box id="/experience">
                <Experience />
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
          <Route path="/experience" element={<Outlet />} />
          <Route path="/project" element={<Outlet />} />
          <Route path="/contact" element={<Outlet />} />
        </Routes>
      </div>
    </>
  );
}

export default RootHome;
