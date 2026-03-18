interface PageWrapperRootProps {
    children: React.ReactNode
}

export default function PageWrapper({children}: PageWrapperRootProps) {
    return(
        <div className="min-h-screen bg-[#111418] flex">
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}