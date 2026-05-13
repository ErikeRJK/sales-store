interface PageWrapperContentProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
}

export default function PageWrapperContent({ children, title, subtitle }: PageWrapperContentProps){
    return (
        <div className="py-8 space-y-12 px-28 text-[#F1F2F3]">
            {title && subtitle && (
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">
                        {title}
                    </h1>
                    <p className="text-gray-400">
                        {subtitle}
                    </p>
                </div>
            )}
            {children}
        </div>
    )
}