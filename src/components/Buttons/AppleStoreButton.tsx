import GetAppStoreButton from "@/components/Buttons/GetAppStoreButton";

export type AppleStoreButtonProps = {
    className?: string
}

export default function AppleStoreButton({className} : AppleStoreButtonProps)
{
    return (
        <GetAppStoreButton src={"/assets/images/appstorebtn.png"} alt="apple-store" className={className}/>
    )
}