import BannerSection from "@/components/BannerSection";
import CategorySection from "@/components/CategorySection";
import { PageWrapper } from "@/components/PageWrapper";
import ProductsSection from "@/components/ProductsSection";

export default function Home(){

  return (
    <PageWrapper.Root>
      <PageWrapper.Header/>
      <PageWrapper.Content>
        <BannerSection/>
        <CategorySection/>
        <ProductsSection/>
      </PageWrapper.Content>
    </PageWrapper.Root>
  )
}