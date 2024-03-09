import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../Components/Firebase/Firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleRegisterClick = (e) => {
    let valid = true;
    e.preventDefault();
    //Check whether Name is valid or not
    if (firstName.length < 2) {
      setFirstNameError("First name must be at least 2 characters.");
      valid = false;
    } else {
      setFirstNameError("");
    }
    if (lastName.length < 4) {
      setLastNameError("Last name must be at least 4 characters.");
      valid = false;
    } else {
      setLastNameError("");
    }

    //Check Email
    if (!validateEmail(email)) {
      setEmailError("Invalid email address.");
      valid = false;
    } else {
      setEmailError("");
    }
    // Check Password
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      valid = false;
    } else {
      setPasswordError("");
    }
    // Check Phone Number
    if (phoneNumber.length < 10) {
      setPhoneNumberError("Phone number must be at least 10 digits.");
      valid = false;
    } else {
      setPhoneNumberError("");
    }

    if (valid) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: firstName + " " + lastName,
          });
          const userDocRef = doc(collection(db, "users"), auth.currentUser.uid);
          await setDoc(userDocRef, {
            id: userCredential.user.uid,
            firstName,
            lastName,
            email,
            phoneNumber,
          });
          alert("Successfully created an account...");
          navigate("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          // ..
        });
      console.log("Successfully created an account...");
    }
  };

  const handleFirstName = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^A-Za-z]/g, ""); // Allow only alphabetic characters
    e.target.value = sanitizedValue; // Update the input value
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^A-Za-z]/g, ""); // Allow only alphabetic characters
    e.target.value = sanitizedValue; // Update the input value
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    // e.target.setCustomValidity('');
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    // e.target.setCustomValidity('');
  };
  const handleChangePhoneNumber = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters
    if (sanitizedValue.length <= 10) {
      // If the sanitized value's length is 10 or less, update the input value
      e.target.value = sanitizedValue;
      setPhoneNumber(e.target.value);
    }
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <>
      <form action="" className="overflow-x-hidden">
        {" "}
        <div className=" w-full z-40">
          <Header color={"black"} />{" "}
        </div>
        <div className=" py-16 min-h-screen w-screen flex flex-col items-center justify-center -z-10">
          <h1 className="md:text-5xl text-3xl font-bold text-black  mb-4">
            Create Account
          </h1>
          <br />
          <div className="flex xl:flex-row flex-col xl:justify-between justify-center items-center md:w-3/5 w-full">
            <div className="w-full ml-[15%] md:ml-0 flex flex-col justify-center">
              <input
                className="xl:w-[97%] md:w-full w-[85%] py-1 xl:mr-2 border-b-[1px] font-semibold border-gray-600 placeholder-gray-600 outline-none"
                type="text"
                placeholder="First Name"
                minLength={2}
                value={firstName}
                onChange={handleFirstName}
                required
              />
              {firstNameError && (
                <p className="text-red-500 text-xs mt-0 ">{firstNameError}</p>
              )}
            </div>
            <div className="w-full ml-[15%] md:ml-0 flex flex-col justify-center">
              <input
                className="xl:w-[97%] md:w-full w-[85%] py-1 xl:ml-2 mt-6 xl:mt-0 border-b-[1px] font-semibold border-gray-600 placeholder-gray-600 outline-none"
                type="text"
                placeholder="Last Name"
                minLength={4}
                value={lastName}
                onChange={handleLastName}
                required
              />
              {lastNameError && (
                <p className="text-red-500 text-xs mt-0 xl:ml-2">
                  {lastNameError}
                </p>
              )}
            </div>
          </div>
          <input
            className="md:w-3/5 w-[85%] mt-6 py-1 border-b-[1px] font-semibold border-gray-600 placeholder-gray-600 outline-none"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
            required
          />
          {emailError && (
            <p className="text-start left-0 text-red-500 text-xs mt-0 mr-auto md:ml-[20%] xl:ml-[20%] ml-[7%]">
              {emailError}
            </p>
          )}
          <input
            className="md:w-3/5 w-[85%] mt-6 py-1 border-b-[1px] font-semibold border-gray-600 placeholder-gray-600 outline-none"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            minLength={8}
            required
          />

          {passwordError ? (
            <p className="md:w-[60%] w-[90%] text-start left-0 text-red-500 text-xs mt-0 mr-auto md:ml-[20%] xl:ml-[20%] ml-[7%]">
              {passwordError}
            </p>
          ) : (
            <div className="w-full md:ml-[40%] xl:ml-[40%] ml-[10%] md:px-0 px-4">
              <p className="flex items-center gap-1 justify-start mt-2 text-start font-roboto text-[14px] antialiased font-normal leading-normal text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 -mt-px"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Use at least 8 characters, one uppercase, one lowercase and one
                number.
              </p>
            </div>
          )}

          <input
            className="md:w-3/5 w-[85%] mt-6 py-1 border-b-[1px] font-semibold border-gray-600 placeholder-gray-600 outline-none"
            type="text"
            placeholder="Phone No."
            maxLength={10}
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
            required
          />
          {phoneNumberError && (
            <p className="text-start left-0 text-red-500 text-xs mt-0 mr-auto md:ml-[20%] xl:ml-[20%] ml-[7%]">
              {phoneNumberError}
            </p>
          )}

          <a
            className="mt-4 md:text-right w-3/5 text-center text-base font-normal hover:text-orange-600"
            href="/login"
          >
            Already have an account?
          </a>
          <button
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded"
            onClick={handleRegisterClick}
          >
            Continue
          </button>
        </div>
        <div>
          <Footer />
        </div>
      </form>
    </>
  );
};
export default SignUp;
