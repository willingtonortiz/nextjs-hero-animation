import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import Image from "next/image";

import styles from "./HeroAnimationPage.module.css";
import {
  DEFAULT_PRODUCTS,
  Product,
} from "../../../lib/HeroAnimationPage/Models/Product";
import { NextPageWithLayout } from "../../_app";

const ProductDetail: NextPageWithLayout = () => {
  const {
    query: { productSlug },
  } = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const foundProduct = DEFAULT_PRODUCTS.find(
      (product) => product.slug === productSlug
    );

    setProduct(foundProduct ?? null);
  }, [productSlug]);

  if (!product) {
    return <p>Cargando...</p>;
  }

  const { id, name, slug, imageUrl } = product;
  return (
    <div>
      <div className={styles["product-detail"]}>
        <motion.div layoutId={slug} className={styles["product-detail__image"]}>
          <Image
            alt={name}
            src={`/${imageUrl}`}
            layout="fill"
            objectFit="cover"
          />

          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <h1>Lorem, ipsum dolor.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              rem a expedita fugit soluta quo ad iure vitae fuga. Odio sit
              voluptatem dolorum, amet iusto dignissimos nostrum magni nesciunt
              error, natus necessitatibus, provident nam eius eos suscipit. Eius
              esse culpa consequatur nam at perferendis quisquam numquam
              recusandae minus eos. Sint eaque quibusdam molestias praesentium
              debitis deserunt deleniti corporis minima nulla, veritatis maiores
              optio, fuga doloremque vero consequatur error a. Dolores,
              eligendi! Repellendus fugiat dignissimos, consectetur numquam quae
              temporibus aliquid quam natus beatae perferendis, quo blanditiis
              sit? Expedita fuga quos ducimus delectus fugit quibusdam,
              excepturi error alias neque porro possimus quia.
            </p>
          </div>
        </motion.div>

        <Link href="/apps/hero-animation">
          <a>Go to Home</a>
        </Link>

        <h1>{id}</h1>
      </div>
    </div>
  );
};

const HeroAnimationAppLayout = (page: ReactElement) => {
  return <AnimateSharedLayout>{page}</AnimateSharedLayout>;
};

ProductDetail.getLayout = HeroAnimationAppLayout;

export default ProductDetail;
