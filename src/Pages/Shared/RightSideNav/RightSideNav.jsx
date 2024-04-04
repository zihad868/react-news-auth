import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";

import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div className="space-y-7">
            <div>
                <h5 className="text-4xl font-bold">Login With</h5>
                <div className="space-y-2">
                    <button className="flex items-center justify-center w-full border-2 border-primary p-2 space-x-2">
                        <FaGoogle />
                        <p>Login With Google</p>
                    </button>
                    <button className="flex items-center justify-center w-full border-2 border-black p-2 space-x-2">
                        <FaGithub />
                        <p>Login With Google</p>
                    </button>
                </div>
            </div>

            <div>
                <h5 className="text-4xl font-bold">Find Us On</h5>
                <div className="ml-4">
                    <button className="flex items-center justify-start w-full p-2 space-x-2 border">
                        <FaFacebook className="text-primary"/>
                        <p>FaceBook</p>
                    </button>
                    <button className="flex items-center justify-start w-full p-2 space-x-2 border-x">
                        <FaTwitter className="text-blue-400"/>
                        <p>Twitter</p>
                    </button>
                    <button className="flex items-center justify-start w-full p-2 space-x-2 border">
                        <FaInstagram className="text-secondary"/>
                        <p>Instagram</p>
                    </button>
                </div>
            </div>

            <div>
               <h5 className="text-4xl font-bold">Q Zone</h5>
               <div>
                  <img src={qZone1} alt="" />
                  <img src={qZone2} alt="" />
                  <img src={qZone3} alt="" />
               </div>
            </div>
        </div>
    );
};

export default RightSideNav;