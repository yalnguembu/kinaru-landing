import {FaFacebookF, FaInstagram, FaPaperPlane, FaPinterest, FaTwitter} from "react-icons/fa6";
import GooglePlayButton from "@/components/Buttons/GooglePlayButton";
import AppleStoreButton from "@/components/Buttons/AppleStoreButton";

export default function Footer()
{
    return (
        <footer className="text-white mt-20">
            <div className="container flex flex-col gap-10 py-20">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-5">
                        <h2>Subscribe newsletter</h2>
                        <p>Be the first to receive all latest post in your inbox</p>
                        <form action="#" method="GET">
                            <div className="flex gap-3 p-1 w-full bg-white rounded-lg">
                                <input type="email" name="email" placeholder="Enter your email"
                                       className="w-full bg-transparent border-0 outline-none text-gray-600"/>
                                <button type="submit" className="bg-primary rounded-lg px-4"><FaPaperPlane/></button>
                            </div>
                        </form>
                        <p className="text-gray-400">By clicking send link you agree to receive message.</p>
                        <p><b>support@localhost &thinsp; | &thinsp; +1-900-123 4567</b></p>
                        <div className="links flex gap-3">
                            <a href="#" target="_blank"><FaFacebookF size={28}/></a>
                            <a href="#" target="_blank"><FaTwitter size={28}/></a>
                            <a href="#" target="_blank"><FaInstagram size={28}/></a>
                            <a href="#" target="_blank"><FaPinterest size={28}/></a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-center">Download App</h2>
                        <div className="flex gap-5">
                            <GooglePlayButton />
                            <AppleStoreButton />
                        </div>
                    </div>
                </div>
                <p className="text-center bg-gray-950/75 p-5 rounded-lg">
                   Copyright &copy; All rights reserved { (new Date()).getFullYear() }
                </p>
            </div>
        </footer>
    )
}