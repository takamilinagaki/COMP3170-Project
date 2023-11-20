import { Route } from "react-router-dom";

import Layout from "../components/Layout";

import HomePage from "../routes/HomePage";
import Favourite from "../routes/Favourite";

export const config = (
    <Route element={<Layout/>}>
        <Route path ="/">
            <Route index element={<HomePage/>}/>
            <Route path="Favourite">
                <Route index element={<Favourite/>}/>
                <Route path=":id" element={<Favourite/>} />
            </Route>
        </Route>
    </Route>
)