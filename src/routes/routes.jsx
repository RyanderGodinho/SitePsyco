import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from '../pages/main/main.jsx';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/inicio" element={<Main />} />
                <Route path="*" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;