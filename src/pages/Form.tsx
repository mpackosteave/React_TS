import { Formik, useFormik } from "formik"
import * as Yup from 'yup'

export default function Form() {
    const formik = useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            message:"",
        },


        onSubmit:(values) =>{
            console.log(values, null, 2)
        },
    });

    const message1 = "FristName required"
    const message2 = "LaststName required"

    const Register = Yup.object().shape({
      firstName : Yup.string().required(message1).min(3, "user name should be at least 3 character long"),
      lastName : Yup.string().required(message2).min(3, "user name should be at least 3 character long"),
      email : Yup.string().required("email required !!").email("User email required"),
      password : Yup.string().required("password required").min(6, "atleast contain 6 charater"),
    })
    
  



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formik.values);

    // You can send formData to your backend here
  };

  return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-2xl font-bold text-slate-800 mb-6">Contact Form</h1>

        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            First Name
          </label>

          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            
            />
            {
              formik.touched.firstName && formik.errors.firstName && (
                <div className="text-red-500 py-1.5 text-sm">{formik.errors.firstName}</div>
              )
            }
        </div>
                <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Last Name
          </label>

          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="example@email.com"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            placeholder="Write your message..."
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}










// export default function Form() {

//     const formik = useFormik({
//         initialValues:{
//             fristName:"",
//             lastName:"",
//             email:"",
//         },
//         onsubmit:values =>{
//             console.log(JSON.stringify(values, null, 2))
//         },
//     });


//     return (
//      <form onSubmit={formik.handleSubmit}>
//        <label htmlFor="firstName">First Name</label>
//        <input
//          id="firstName"
//          name="firstName"
//          type="text"
//          onChange={formik.handleChange}
//          value={formik.values.firstName}
//        />
 
//        <label htmlFor="lastName">Last Name</label>
//        <input
//          id="lastName"
//          name="lastName"
//          type="text"
//          onChange={formik.handleChange}
//          value={formik.values.lastName}
//        />
 
//        <label htmlFor="email">Email Address</label>
//        <input
//          id="email"
//          name="email"
//          type="email"
//          onChange={formik.handleChange}
//          value={formik.values.email}
//        />
 
//        <button type="submit">Submit</button>
//      </form>
//    );
//  };



























