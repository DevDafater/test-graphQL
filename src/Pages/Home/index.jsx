import React from "react";
import {FaLinkedinIn} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import Navbar from "../../Components/Navbar";

const Index = ({activePage, setActivePage}) => {
  return (
    <div>
      <Navbar activePage={activePage} setActivePage={setActivePage}/>
      <div className="flex justify-center items-center flex-col h-[80vh] relative">
      <div className="bg-gradient-to-br from-[#9f47ac] to-[#de397e] w-8 h-48 absolute left-0 rounded-e-3xl text-white text-2xl flex flex-col justify-evenly">
            <FaLinkedinIn className="p-1"/>
            <AiFillInstagram className="p-1"/>
            <MdEmail className="p-1"/>
      </div>
        <h1 className="text-6xl text-center font-bold lg:pt-12">
          Welcome to the world of GraphQL
        </h1>
        <p className="text-center font-bold opacity-60 py-4">
          Get more transcription, storage and access to some advanced features
          like analytics by <br />
          <span className="underline cursor-pointer">upgrading here</span>
        </p>
      </div>
    </div>
  );
};

export default Index;
