import Skeleton from "../Skeleton";

export default function ProductSkeleton() {
  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <Skeleton className="h-8 w-20" />
        <span className="text-muted-foreground">/</span>
        <Skeleton className="h-4 w-24" />
        <span className="text-muted-foreground">/</span>
        <Skeleton className="h-4 w-48" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images Skeleton */}
        <div className="space-y-4">
          {/* Main Image */}
          <Skeleton className="aspect-square w-full rounded-lg" />

          {/* Thumbnail Images */}
          <div className="flex gap-2">
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} className="aspect-square w-20 rounded" />
            ))}
          </div>
        </div>

        {/* Product Info Skeleton */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-12" />
              <Skeleton className="h-6 w-16" />
            </div>

            <Skeleton className="h-8 w-full mb-2" />
            <Skeleton className="h-8 w-3/4 mb-4" />

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-4 rounded-full" />
                ))}
              </div>
              <Skeleton className="h-4 w-32" />
            </div>
          </div>

          {/* Price Skeleton */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-6 w-24" />
            </div>
            <Skeleton className="h-4 w-48" />
          </div>

          {/* Description Skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          {/* Quantity and Actions Skeleton */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-32" />
            </div>

            <div className="flex gap-3">
              <Skeleton className="h-12 flex-1" />
              <Skeleton className="h-12 w-12" />
              <Skeleton className="h-12 w-12" />
            </div>

            <Skeleton className="h-12 w-full" />
          </div>

          {/* Shipping & Warranty Info Skeleton */}
          <div className="space-y-3 pt-4 border-t">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-4 w-48" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
