import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import cn from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
    React.ComponentRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({className, ...props}, ref) => {
    return (
        <TabsPrimitive.List 
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center rounded-md bg-[#21252b] p-1 text-[#9096A2]",
                className
            )}
            {...props}
        />
    )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
    React.ComponentRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({className, ...props}, ref) => {
    return (
        <TabsPrimitive.Trigger 
            ref={ref}
            className={cn(
                `inline-flex items-center justify-center whitespace-nowrap rounded-sm
                px-3 py-1.5 text-sm font-medium ring-offset-[#121417] transition-all
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5593f7]
                focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                data-[state=active]:bg-[#121417] data-[state=active]:text-[#F1F2F3]`,
                className
            )}
            {...props}
        />
    )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
    React.ComponentRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({className, ...props}, ref) => {
    return (
        <TabsPrimitive.Content
            ref={ref}
            className={cn(
                `mt-2 ring-offset-[#121417]`,
                className
            )}
            {...props}
        />
    )
})
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent}