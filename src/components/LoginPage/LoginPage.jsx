
// import React, { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useAuth } from '../context/AuthContext.jsx';
// import axios from 'axios';

// const LoginPage = () => {
//   const { login } = useAuth(); // Assuming login function is provided by AuthContext
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const recaptchaResponse = document.getElementById('g-recaptcha-response').value; // Fetch reCAPTCHA response

//     try {
//       const response = await axios.post('http://localhost:3000/api/users/login', {
//         email,
//         password,
//       // Send reCAPTCHA response with the request
//       });
//       console.log("response-----", response.data);
//       if (response.data.status === 'success') {
//         login(response.data.accessToken); // Ensure login function works correctly
//       } else {
//         setError('Invalid email or password');
//       }
//     } catch (error) {
//       console.error('Login error:', error); // Log error details
//       setError('An error occurred during login');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="bg-white p-6 rounded shadow-md w-full max-w-md lg:max-w-lg">
//         <form id="form-id" onSubmit={handleLogin} method="post" className="space-y-4">
//           <div className="text-center">
//             <div className="mb-5">
//               <h1 className="text-3xl font-bold">Sign in</h1>
//               <span className="text-gray-500">(Admin Login)</span>
//             </div>
//           </div>
//           <div className="form-group">
//             <label className="input-label" htmlFor="signingAdminEmail">Your email</label>
//             <input
//               type="email"
//               className="form-control form-control-lg mb-4 p-3 rounded border border-gray-300 w-full"
//               name="email"
//               id="signingAdminEmail"
//               placeholder="admin@admin.com"
//               aria-label="email@address.com"
//               required
//               data-msg="Please enter a valid email address."
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label className="input-label" htmlFor="signingAdminPassword">
//               <span className="d-flex justify-content-between align-items-center">Password </span>
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 className="form-control form-control-lg mb-4 p-3 rounded border border-gray-300 w-full"
//                 name="password"
//                 id="signingAdminPassword"
//                 placeholder="12345678"
//                 aria-label="8+ characters required"
//                 required
//                 data-msg="Your password is invalid. Please try again."
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-3 text-gray-500"
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//           </div>
//           <div className="form-group mb-4">
//             <div className="custom-control custom-checkbox flex align-items-center gap-1">
//               <input type="checkbox" className="custom-control-input" id="termsCheckbox" name="remember" />
//               <label className="custom-control-label text-gray-500" htmlFor="termsCheckbox">Remember me</label>
//             </div>
//           </div>
//           <div id="recaptcha_element" className="w-full mb-0" style={{ height: '100px' }} data-type="image">
//             <iframe
//               title="reCAPTCHA"
//               width="304"
//               height="78"
//               role="presentation"
//               name="a-hf237g9wo2mj"
//               frameBorder="0"
//               scrolling="no"
//               sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
//               src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcDeeslAAAAADP9N8Vxw_uQ_u68qCwae19dFlmn&amp;co=aHR0cHM6Ly82dmFsbGV5LjZhbXRlY2guY29tOjQ0Mw..&amp;hl=en&amp;type=image&amp;v=rKbTvxTxwcw5VqzrtN-ICwWt&amp;size=normal&amp;cb=wzersp58wngg"
//             ></iframe>
//             <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{ display: 'none' }}></textarea>
//           </div>
//           <button type="submit" className="btn btn-block p-3 rounded bg-green-300 hover:bg-green-200 hover:text-black text-white font-semibold mt-0">
//             Sign in
//           </button>
//           {error && <div className="text-red-500 text-center mt-4">{error}</div>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



//////////////////////


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { login } from '../redux/auth/authSlice';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(login({ email, password }));
      if (login.fulfilled.match(resultAction)) {
        toast.success('Login successful');
        navigate('/dashboard');
      } else {
        toast.error(resultAction.payload || 'Invalid email or password');
      }
    } catch (error) {
      toast.error('An error occurred during login');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md lg:max-w-lg">
        <ToastContainer />
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="text-center mb-5">
            <h1 className="text-3xl font-bold">Sign in</h1>
            <span className="text-gray-500">(Admin Login)</span>
          </div>
          <div className="form-group">
            <label className="input-label" htmlFor="email">Your email</label>
            <input
              type="email"
              className="form-control form-control-lg mb-4 p-3 rounded border border-gray-300 w-full"
              id="email"
              placeholder="admin23@mail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email" // Added autocomplete attribute

            />
          </div>
          <div className="form-group">
            <label className="input-label" htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control form-control-lg mb-4 p-3 rounded border border-gray-300 w-full"
                id="password"
                placeholder="test12345"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="form-group mb-4">
            <div className="custom-control custom-checkbox flex items-center gap-1">
              <input type="checkbox" className="custom-control-input" id="rememberMe" name="remember" />
              <label className="custom-control-label text-gray-500" htmlFor="rememberMe">Remember me</label>
            </div>
          </div>
          <div id="recaptcha_element" className="w-full mb-0" style={{ height: '100px' }}></div>
          <button type="submit" className="btn btn-block p-3 rounded bg-green-300 hover:bg-green-200 hover:text-black text-white font-semibold mt-0">
            Sign in
          </button>
          {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
