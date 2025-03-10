/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import styles from "./GalleryMain.module.css";

const items = [
  // Donations category
  { id: 1, category: "Donations", src: "/gallery/1.png" },
  { id: 2, category: "Donations", src: "/gallery/2.png" },
  { id: 3, category: "Donations", src: "/gallery/3.png" },

  // Volunteers category
  { id: 4, category: "Volunteers", src: "/gallery/4.png" },
  { id: 5, category: "Volunteers", src: "/gallery/5.png" },
  { id: 6, category: "Volunteers", src: "/gallery/6.png" },

  // Charity category
  { id: 7, category: "Charity", src: "/gallery/7.png" },
  { id: 8, category: "Charity", src: "/gallery/8.png" },
  { id: 9, category: "Charity", src: "/gallery/9.png" },

  // Additional items to ensure "All" displays more content
  { id: 10, category: "Donations", src: "/gallery/10.png" },
  { id: 11, category: "Volunteers", src: "/gallery/11.png" },
  { id: 12, category: "Charity", src: "/gallery/12.png" },
];

const categories = ["All", "Donations", "Volunteers", "Charity"];
const itemsPerPage = 8;

function GalleryMain() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter items based on selected category
  const filteredItems =
    activeCategory === "All"
      ? items // Show all items if "All" is selected
      : items.filter((item) => item.category === activeCategory);

  // Pagination calculations
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to the first page on category change
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className={styles.GalleryMain}>
      <div className="container">
        {/* Category Tabs */}
        <div className={styles.tabs}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.tab} ${
                activeCategory === category ? styles.active : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <hr className={styles.tabsHr} />

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {displayedItems.map((item) => (
            <div key={item.id} className={styles.galleryItem}>
              <img src={item.src} alt={item.category} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className={styles.pagination}>
          <FaLongArrowAltLeft
            cursor={"pointer"}
            size={20}
            onClick={() => handlePageChange(currentPage - 1)}
          />
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`${styles.pageButton} ${
                currentPage === index + 1 ? styles.active : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <FaLongArrowAltRight
            cursor={"pointer"}
            size={20}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </div>
      </div>
    </section>
  );
}

export default GalleryMain;
