import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Gif from "../../Main/Loaders/success.gif";
import "react-toastify/dist/ReactToastify.css";
import BackButton from "../../Accounts/BackButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import AdminDashboard from '../Admin_Navbar'

const RESTURANT_URL = "https://usermanagement-kbe1.onrender.com/restaurants";

// Validation schema for the form
const validationSchema = Yup.object({
    Resturantname: Yup.string().required("Required"),
    Resturantaddress: Yup.string().required("Required"),
    ResturantUrl: Yup.string().required("Required"),
});

const initialValues = {
    Resturantname: '',
    Resturantaddress: '',
    ResturantUrl: ''
};

function Demo() {
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const onSubmit = async (values, { resetForm }) => {
        try {
            const response = await axios.post(RESTURANT_URL, values);
            console.log("The restaurant data response is", response);
            setShowSuccessModal(true);
            toast.success("Item added successfully!");
            resetForm(); 
        } catch (error) {
            console.log("There is an error in the code", error);
            toast.error("An error occurred while adding the restaurant.");
        }
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    return (
        <>
        <AdminDashboard/>
        <div className="p-8 max-w-4xl mx-auto bg-orange-50 rounded-lg shadow-lg space-y-6">
            <h2 className="text-3xl font-extrabold text-orange-700 mb-4">
                Add Restaurant
            </h2>
            <BackButton />
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md space-y-4"
            >
                <div>
                    <label className="block text-orange-600 font-medium">Name:</label>
                    <input
                        name="Resturantname"
                        type="text"
                        id="Resturantname"
                        {...formik.getFieldProps("Resturantname")} 
                        className="mt-1 block w-full border-orange-300 rounded-md shadow-sm h-12 px-4 py-2 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
                    />
                    {formik.touched.Resturantname && formik.errors.Resturantname ? (
                        <div className="text-red-500 text-sm">{formik.errors.Resturantname}</div>
                    ) : null}
                </div>
                <div>
                    <label className="block text-orange-600 font-medium">Address:</label>
                    <input
                        type="text"
                        name="Resturantaddress"
                        id="Resturantaddress"
                        {...formik.getFieldProps("Resturantaddress")}
                        className="mt-1 block w-full border-orange-300 rounded-md shadow-sm h-12 px-4 py-2 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
                    />
                    {formik.touched.Resturantaddress && formik.errors.Resturantaddress ? (
                        <div className="text-red-500 text-sm">{formik.errors.Resturantaddress}</div>
                    ) : null}
                </div>
                <div>
                    <label className="block text-orange-600 font-medium">
                        Or Enter Photo URL:
                    </label>
                    <input
                        type="text"
                        name="ResturantUrl"
                        id="ResturantUrl"
                        {...formik.getFieldProps("ResturantUrl")}
                        placeholder="http://example.com/photo.jpg"
                        className="mt-1 block w-full border-orange-300 rounded-md shadow-sm h-12 px-4 py-2 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
                    />
                    {formik.touched.ResturantUrl && formik.errors.ResturantUrl ? (
                        <div className="text-red-500 text-sm">{formik.errors.ResturantUrl}</div>
                    ) : null}
                </div>
                <button
                    type="submit"
                    className="w-full bg-orange-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-orange-700 transition duration-300"
                >
                    Add Restaurant
                </button>
            </form>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                        <img src={Gif} alt="Success" className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-green-600">Success!</h3>
                        <p className="text-gray-700">Restaurant added successfully.</p>
                        {/* <Link to="/restaurants" className="text-blue-600 underline">
                            Go to Restaurants
                        </Link> */}
                    </div>
                </div>
            )}
        </div>
        </>
    );
}

export default Demo;
