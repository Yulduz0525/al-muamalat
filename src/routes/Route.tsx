import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contact, FinanceTools, Home, Programs } from "../pages"
import { Layout } from "../components/layout"

const RoutePage = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='programs' element={<Programs/>}/>
                    <Route path='financetools' element={<FinanceTools/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RoutePage