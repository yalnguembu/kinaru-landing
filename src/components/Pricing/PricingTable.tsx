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
                    <th>Fonctionnalités</th>
                    {prices.map((item, index) => {
                        return (
                            <td key={index}>
                                <div className="flex flex-col mb-5">
                                    <h3 className="text-xl">{item.name}</h3>
                                    <span className="text-base">{item.appliers}</span>
                                    <span className="text-primary my-5"><span className="text-4xl font-bold">${item.price}</span>/mois</span>
                                    <a href="#" className="btn-action">Souscrire</a>
                                </div>
                            </td>
                        )
                    })}
                </tr>
                <tr>
                    <th>Stockage Cloud</th>
                    {prices.map((item, index) => {
                        return (
                            <td key={index}>Jusqu&apos;à {item.storage} GB</td>
                        )
                    })}
                </tr>
                <tr>
                    <th>Historique de Chats</th>
                    {prices.map((item, index) => {
                        return (
                            <td key={index}>{item.chatHistory > 0 ? `${item.chatHistory} Jours` : 'Illimité'}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th>Optimisations</th>
                    {prices.map((item, index) => {
                        return (
                            <td key={index}>{!item.optimization ? <FaTimesCircle color="red"/> : <FaCheckCircle color="var(--primary-color)" />}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th>Notes Illimités</th>
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
                            <td key={index}>{item.liveReporting} Jours</td>
                        )
                    })}
                </tr>
                <tr>
                    <th>Assistance 24/7</th>
                    {prices.map((item, index) => {
                        return (
                            <td key={index}>{item.supportDays} Jours</td>
                        )
                    })}
                </tr>
            </tbody>
        </table>
    )
}