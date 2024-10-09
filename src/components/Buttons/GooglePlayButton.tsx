import GetAppStoreButton from "@/components/Buttons/GetAppStoreButton";

export type GooglePlayButtonProps = {
    className?: string
}

export default function GooglePlayButton({className} : GooglePlayButtonProps)
{
    return (
        <GetAppStoreButton src={"/assets/images/googleplay.png"} alt="google-play" className={className}/>
    )
}