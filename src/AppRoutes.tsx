import {Route, Routes} from "react-router-dom";
import {InvoiceList} from "./components/invoiceList/InvoiceList";
import React from "react";
import {InvoiceDetails} from "./components/invoiceDetails/InvoiceDetails";

const AppRoutes = () => {
    return <Routes>
        <Route path="/" element={<InvoiceList />} />
        <Route path="/item/:id" element={<InvoiceDetails />} />
    </Routes>
}

export default AppRoutes;
