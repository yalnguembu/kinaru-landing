import {Pricing} from "@/types";
import {FaCheckCircle, FaTimesCircle} from "react-icons/fa";

export type PricingTableProps = {
    prices: Pricing[]
}

export default function PricingTable({prices}: PricingTableProps)
{
    return (
        <table className="table-horizontal w-full text-left">
            <tbody>
                <tr>
                    <th>Features</th>
                    {prices.map((item, index) => {
                        return (
                            <td key={index}>
                                <div className="flex flex-col mb-5">
                                    <h3 className="text-xl">{item.name}</h3>
                                    <span className="text-base">{item.appliers}</span>
                                    <span className="text-primary my-5"><span className="text-4xl font-bold">${item.price}</span>/month</span>
                                    <a href="#" className="btn-action">Choose Plan</a>
                                </div>
                            </td>
                        )
                    })}
                </tr>
                <tr>
                    <th>Cloud Storage</th>
                    {prices.map((item, index) => {
                        return (
                            <td key={index}>Up to {item.storage} GB</td>
                        )
                    })}
                </tr>
                <tr>
                    <th>Chat History</th>
                    {prices.map((item, index) => {
                        return (
                            <td key={index}>{item.chatHistory > 0 ? `${item.chatHistory} days` : 'Unlimited'}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th>Optimization</th>
                    {prices.map((item, index) => {
                        return (
                            <td key={index}>{!item.optimization ? <FaTimesCircle color="red"/> : <FaCheckCircle color="var(--primary-color)" />}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th>Unlimited Viewers</th>
                    {prices.map((item, index) => {
                        return (
                            <td key={index}>{!item.unlimitedViewers ? <FaTimesCircle color="red"/> : <FaCheckCircle color="var(--primary-color)" />}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th>Live reporting</th>
                    {prices.map((item, index) => {
                        return (
                            <td key={index}>{item.liveReporting} Days</td>
                        )
                    })}
                </tr>
                <tr>
                    <th>24/7 Support</th>
                    {prices.map((item, index) => {
                        return (
                            <td key={index}>{item.supportDays} Days</td>
                        )
                    })}
                </tr>
            </tbody>
        </table>
    )
}