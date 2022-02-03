import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "ingred-ui";
import { RecoilRoot } from "recoil";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { External } from "./pages/External";

export const App: React.FC<{
    props: any;
}> = ({ props }): JSX.Element => {
    const theme = createTheme();

    return (
        <>
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <Routes>
                        <Route path="/" element={<Home props={props} />} />
                        <Route path="/post/:id" element={<Post props={props} />} />
                        <Route path="/external" element={<External props={props} />} />
                        <Route path="about" element={<About />} />
                    </Routes>
                </ThemeProvider>
            </RecoilRoot>
        </>
    )
}
