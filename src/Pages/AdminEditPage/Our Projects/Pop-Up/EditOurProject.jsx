import React, { useState } from "react";
import Modal from "../../../../Components/Modal/Modal";
import { IoClose } from "react-icons/io5";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../../Components/Firebase/Firebase";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
const EditOurProject = ({ openModal, closeModal, isModalOpen }) => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    try {
      const { name, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } catch (error) {
      alert(error);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      setImageName(file.name);
    }
  };

  const clearImage = () => {
    setImage(null);
  };

  const handleSubmit = async () => {
    try {
      const metadata = {
        contentType: "image/png",
      };
      console.log(data);
      const docRef = doc(collection(db, "Projects"));
      const storage = getStorage();
      const imageRef = ref(storage, `images/${imageName}`);
      const uploadTask = uploadBytesResumable(imageRef, image, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // alert("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              // alert("Upload is paused");
              break;
            case "running":
              // alert("Upload is running");
              break;
          }
        },
        (error) => {
          alert(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
           alert("File available at", downloadURL);
            setImageUrl(downloadURL);
          });
        }
      );
      await setDoc(docRef, {
        title: data.title,
        desc: data.description,
        imgUrl: imageUrl,
      });
    } catch (e) {
      alert(`Error : ${e}`);
    }
  };

  return (
    <>
      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <form className="">
            <div className="flex md:flex-row flex-col justify-center items-center">
              <div className="flex items-center justify-center xl:w-[45%] w-full md:my-0 my-4 px-5">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-slate-200  hover:bg-slate-100 transition-all ease-in-out duration-300 relative hover:border-gray-500 "
                >
                  {image ? (
                    <>
                      <img
                        src={image}
                        alt="Uploaded"
                        className="h-full  object-cover "
                      />
                      <div className=" absolute -top-2 -right-2 bg-slate-300 border-2 border-gray-400 p-1 rounded-full text-xl">
                        <IoClose
                          className="text-red-700 "
                          onClick={clearImage}
                        />
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 xl:text-sm text-xs text-gray-500 dark:text-gray-400 text-center">
                        <span className="font-semibold ">Click to upload</span>{" "}
                        <br />
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        SVG, PNG, JPG or GIF
                      </p>
                    </div>
                  )}
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>

              <div className="flex flex-col w-full my-5 md:mx-5 mx-0">
                <div className="relative">
                  <input
                    type="text"
                    id="title"
                    className="block w-full px-2.5 py-2.5 text-sm bg-transparent rounded-lg border-2 border-gray-400 text-black hover:shadow-sm bg-slate-200 hover:shadow-slate-200 focus:outline-none focus:ring-0 focus:border-orange-600 peer hover:border-orange-600   dark:hover:border-gray-500 dark:focus:border-orange-600 peer-hover:shadow-orange-500 peer-focus:shadow-orange-500 "
                    placeholder="Title"
                    minLength={4}
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="title"
                    className="absolute text-sm  text-black  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-200  px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Title
                  </label>
                </div>
                <div className="relative mt-4">
                  <textarea
                    id="description"
                    className="block w-full px-2.5 py-2.5 text-sm bg-transparent rounded-lg border-2 border-gray-400 text-black hover:shadow-sm bg-slate-200 hover:shadow-slate-200 focus:outline-none focus:ring-0 focus:border-orange-600 peer hover:border-orange-600   dark:hover:border-gray-500 dark:focus:border-orange-600 peer-hover:shadow-orange-500 peer-focus:shadow-orange-500 "
                    placeholder="Description"
                    minLength={4}
                    rows={6}
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    style={{ resize: "none" }}
                    required
                  />
                  <label
                    htmlFor="description"
                    className="absolute text-sm  text-black  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-200  px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[15%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 pointer-events-none"
                  >
                    Description
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:justify-end justify-between items-end">
              <button className="mx-3 border-double border-[3px] border-red-500 hover:border-slate-200 hover:bg-red-500 hover:text-white px-4 py-2  text-black rounded-md">
                Delete
              </button>
              <button
                className="mx-3 bg-orange-500 px-4 py-[11px] hover:bg-orange-600 text-white rounded-md"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
        {/* <button onClick={openModal}>Open</button> */}
      </div>
    </>
  );
};

export default EditOurProject;
