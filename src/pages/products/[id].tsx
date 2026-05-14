import Breadcrumb from "@/components/Breadcrumb";
import CustomButton from "@/components/CustomButton";
import { PageWrapper } from "@/components/PageWrapper";
import ProductImages from "@/components/ProductImages";
import ProductInfo from "@/components/ProductInfo";
import ProductReviews from "@/components/ProductReviews";
import ProductSkeleton from "@/components/Skeletons/ProductSkeletonPage";
import StarsRating from "@/components/StarsRating";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import requestApi from "@/helpers/requestApi";
import { ProductDetails } from "@/interfaces/productDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);

      try {
        if (!id) return;

        const response = await requestApi({
          url: `/products/${id}`,
          method: "GET",
        });

        setProduct(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Erro ao buscar produtos")
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <PageWrapper.Root>
        <PageWrapper.Header />

        <PageWrapper.Content>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
            <Link href="/">
              <CustomButton className="h-[45px] px-4">
                Voltar para a home
              </CustomButton>
            </Link>
          </div>
        </PageWrapper.Content>
      </PageWrapper.Root>
    );
  }

  return (
    <PageWrapper.Root>
      <PageWrapper.Header />

      <PageWrapper.Content>
        {loading ? (
          <ProductSkeleton />
        ) : (
          <>
            <Breadcrumb
              items={[{ title: product.Category.name }, { title: product.name }]}
            />
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <ProductImages images={product.ProductsImages} />
              <ProductInfo product={product} />
            </div>
            <Tabs defaultValue="description" className="w-full">
              <TabsList>
                <TabsTrigger value="description">Descrição</TabsTrigger>
                <TabsTrigger value="specifications">Especificações</TabsTrigger>
                <TabsTrigger value="reviews">Avaliações</TabsTrigger>
              </TabsList>

              <TabsContent value="description">
                <div className="rounded-lg border border-[#343942] bg-[#181B20]">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Características Principais
                    </h3>
                    <ul className="space-y-2">
                      {product?.features?.map((feature, index) => {
                        return (
                          <li className="flex items-center gap-2" key={index}>
                            <div className="w-2 h-2 rounded-full bg-[#5593f7]"></div>
                            <span>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="specifications">
                <div className="rounded-lg border border-[#343942] bg-[#181b20]">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Especificações Técnicas
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(product?.specifications || {}).map(
                        ([key, value]) => {
                          return (
                            <div
                              key={value}
                              className="flex justify-between py-2 border-b border-[#2c313a]/50"
                            >
                              <span className="font-medium">{key}</span>
                              <span className="text-gray-400">{value}</span>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div
                  className="rounded-lg border border-[#343942]
                             bg-[#181B20] shadow-md"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold">
                        Avaliações dos clientes
                      </h3>
                      <StarsRating
                        rating={product?.rating}
                        reviews={product?.reviews}
                        size={16}
                      />
                    </div>
                    <ProductReviews id={product?.id} />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </>
        )}
      </PageWrapper.Content>
    </PageWrapper.Root>
  );
}
