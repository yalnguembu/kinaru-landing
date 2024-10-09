import {Review} from "@/types";
import Image from "next/image";
import Stars from "@/components/Ui/Stars";

export default function SingleReview({review}: {review: Review})
{
    return (
        <div className="flex flex-col gap-10 p-10 bg-white rounded-2xl shadow">
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <Image src={review.user.image_url ?? ''} alt={review.user.name} width={64} height={64}/>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg">{review.user.name}</span>
                        <span className="text-sm">{review.user.role}</span>
                    </div>
                </div>
                <Stars stars={review.stars} />
            </div>
            <p>{review.review}</p>
        </div>
    )
}