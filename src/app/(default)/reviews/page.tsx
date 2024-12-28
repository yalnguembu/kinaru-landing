
import ReviewsPage from "@/app/(default)/reviews/reviews";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Revues | Kinaru',
    description: 'Discover other user\'s reviews'
}

export default function Reviews()
{
  return (
    <ReviewsPage />
  )
}
