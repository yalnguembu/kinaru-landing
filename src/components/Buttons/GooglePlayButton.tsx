import GetAppStoreButton from "@/components/Buttons/GetAppStoreButton";
import { APPLINK_ANDROID } from "@/constants";

export type GooglePlayButtonProps = {
    className?: string
}

export default function GooglePlayButton({className} : GooglePlayButtonProps)
{
    return (
        <GetAppStoreButton src={"/assets/images/googleplay.png"} alt="google-play" className={className} href={APPLINK_ANDROID}/>
    )
}