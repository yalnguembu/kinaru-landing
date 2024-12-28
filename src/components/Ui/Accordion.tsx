import {
    ComponentProps,
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useEffect,
    useId,
    useState
} from "react";
import {cn} from "@/libs/utils";
import {FaMinus, FaPlus} from "react-icons/fa6";

export type AccordionProps = ComponentProps<'div'> & {
    label: string,
    content: string
}

export type AccordionContextType = {
    items: {[key: string]: boolean},
    registerItem: (key: string) => void,
    toggleItem: (key: string) => void,
    hasItem: (key: string) => boolean
}

const defaultValue: AccordionContextType = {
    items: {},
    registerItem: (key: string) => { console.log(key) },
    toggleItem: (key: string) => { console.log(key) },
    hasItem: (key: string) => { console.log(key); return false}
}
export const AccordionContext = createContext<AccordionContextType>(defaultValue)

export const useAccordionContext = () => useContext(AccordionContext)

export function AccordionProvider({children}: PropsWithChildren)
{
    const [items, setItems] = useState({})
    const registerItem = useCallback((key: string) => {
        setItems(prev => {
            const next = {...prev}
            next[key] = true
            return next
        })
    }, [])
    const toggleItem = useCallback((key: string) => {
        setItems(prev => {
            const next = {}
            for (const k in prev) {
                next[k] = k === key ? !prev[key] : true
            }
            return next
        })
    }, [])
    const hasItem = useCallback((key: string) => items.hasOwnProperty(key), [items])

    return (
        <AccordionContext.Provider value={{items, registerItem, toggleItem, hasItem}}>
            {children}
        </AccordionContext.Provider>
    )
}

export function Accordion({label, content, className, ...props}: AccordionProps)
{
    const key = label.toLowerCase().concat(useId()).replaceAll(' ', '-')
    const { items, registerItem, toggleItem} = useAccordionContext()
    const collapsed = items[key]

    useEffect(() => {
        registerItem(key)
    }, [registerItem, key]);

    return (
        <div
            className={cn('p-3 rounded-xl bg-white ', className)}
            {...props}
        >
            <div className="flex justify-between items-center cursor-pointer select-none" onClick={() => toggleItem(key)}>
                <b className={cn(collapsed ? '':"text-primary")}>{label}</b>
                <span>{collapsed ? <FaPlus /> : <FaMinus/> }</span>
            </div>
            <p className={cn('transition-all duration-500 text-left p-2', collapsed ? 'h-0 hidden' : 'h-auto')}>{content}</p>
        </div>
    )
}