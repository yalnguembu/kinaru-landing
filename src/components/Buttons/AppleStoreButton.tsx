import GetAppStoreButton from "@/components/Buttons/GetAppStoreButton";
import { APPLINK_IOS } from "@/constants";

export type AppleStoreButtonProps = {
    className?: string
}

export default function AppleStoreButton({className} : AppleStoreButtonProps)
{
    return (
        <GetAppStoreButton src={"/assets/images/appstorebtn.png"} alt="apple-store" className={className} href={APPLINK_IOS}/>
    )
}