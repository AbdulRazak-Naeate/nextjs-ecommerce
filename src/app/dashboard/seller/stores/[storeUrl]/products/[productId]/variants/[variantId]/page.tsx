// Product details form
import ProductDetails from "@/components/dashboard/forms/product-details";

// Queries
import { getAllCategories } from "@/queries/category";
import { getCountries } from "@/queries/country";
import { getAllOfferTags } from "@/queries/offer-tag";
import { getProductVariant } from "@/queries/product";
import { get } from "http";

export default async function ProductVariantPage({
  params,
}: {
  params: { storeUrl: string; productId: string; variantId: string };
}) {
  const categories = await getAllCategories();
  const offerTags = await getAllOfferTags();
  const countries = await getCountries();

  const { productId, variantId, storeUrl } = params;
  const productDetails = await getProductVariant(productId, variantId);
  if (!productDetails) return;
  return (
    <div>
      <ProductDetails
        countries={countries.length ? countries : []}
        categories={categories}
        offerTags={offerTags}
        storeUrl={storeUrl}
        data={productDetails}
      />
    </div>
  );
}
