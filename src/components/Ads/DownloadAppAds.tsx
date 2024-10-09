import Link from "next/link";
import GooglePlayButton from "@/components/Buttons/GooglePlayButton";
import AppleStoreButton from "@/components/Buttons/AppleStoreButton";
import Image from "next/image";

export default function DownloadAppAds()
{
    return (
        <section className="mt-16 ads-container rounded-2xl before:rounded-2xl">
            <div className="flex justify-between pt-20 px-28">
                <div className="flex flex-col gap-5 text-white max-w-[50%]">
                    <Link href="#" className="btn-primary-rounded">Download</Link>
                    <h2 className="text-5xl">Our app is available for Android & iOS</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industry&apos;s.</p>
                    <div className="flex gap-5">
                        <GooglePlayButton/>
                        <AppleStoreButton/>
                    </div>
                </div>
                <div>
                    <div className="ads-phone">
                        <Image src="/assets/images/app/iPhone-ads-cropped.png" alt="app-preview" width={350}
                               height={300}/>
                    </div>
                </div>
            </div>
        </section>
    )
}