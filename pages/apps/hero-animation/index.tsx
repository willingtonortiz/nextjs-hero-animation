import { ReactElement } from "react";
import Link from "next/link";
import { AnimateSharedLayout, motion } from "framer-motion";
import Image from "next/image";

import styles from "./HeroAnimationPage.module.css";

import { NextPageWithLayout } from "../../_app";
import { DEFAULT_PRODUCTS } from "../../../lib/HeroAnimationPage/Models/Product";

const HeroAnimationApp: NextPageWithLayout = () => {
  return (
    <div>
      <Link href={"/"}>
        <a>Go to Home</a>
      </Link>

      <h1>Shop</h1>

      <div className={styles["product-container"]}>
        {DEFAULT_PRODUCTS.map(({ id, name, slug, imageUrl }) => (
          <div key={id}>
            <h2>{name}</h2>

            <Link href={`/apps/hero-animation/${slug}`}>
              <motion.div
                layoutId={slug}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  alt={name}
                  src={`/${imageUrl}`}
                  width={300}
                  height={200}
                />
              </motion.div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroAnimationAppLayout = (page: ReactElement) => {
  return <AnimateSharedLayout>{page}</AnimateSharedLayout>;
};

HeroAnimationApp.getLayout = HeroAnimationAppLayout;

export default HeroAnimationApp;
