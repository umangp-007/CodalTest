import React, { useState, useMemo } from "react";
import "./App.scss";

// Components
import Breadcrumb from "./components/breadcrum/Breadcrum";
import Filter from "./components/Filter/Filter";
import Header from "./components/header/Header";
import PageTitle from "./components/Pagetitle/PageTitle";
import Pagination from "./components/Pagination/Pagination";
import ProductList from "./components/ProductList/ProductList";
import SortByDropdown from "./components/SortByPriceFilter/SortByPriceFilter";
import Footer from "./components/Footer/Footer";

// Utilities and Data
import { productsList } from "./utils/productList";
import { filters } from "./utils/FilterList";

// Types
import { Product } from "./types/ProductTypes";
import { Filters } from "./types/FilterTypes";
import SidePanel from "./components/SidePanel/SidePanel";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(productsList);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<"lowToHigh" | "highToLow">(
    "lowToHigh"
  );
  const itemsPerPage = 6;

  // Pagination logic using useMemo for efficiency
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return products.slice(startIndex, startIndex + itemsPerPage);
  }, [products, currentPage]);

  // Handlers
  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleSortChange = (order: "lowToHigh" | "highToLow") => {
    setSortOrder(order);
    const sorted = [...products].sort((a, b) =>
      order === "lowToHigh" ? a.price - b.price : b.price - a.price
    );
    setProducts(sorted);
  };

  const handleApplyFilters = (selectedFilters: Filters) => {
    const filtered =
      selectedFilters["brand"]?.length > 0
        ? productsList.filter((product) =>
            selectedFilters["brand"].includes(product.brand)
          )
        : productsList;

    setProducts(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  const toggleSidePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />
      <div className="container">
        <Breadcrumb
          items={[
            { label: "Home", link: "#", isActive: false },
            { label: "Product", link: "#", isActive: false },
            { label: "Data", link: "#", isActive: true },
          ]}
        />
        <PageTitle
          title="Hydraulic Fluids"
          description="Hydraulic oil is a fluid that has several functions. It serves as an energy transfer or power transmission medium, lubricant, and sealant. Also, it is a fluid that cools the equipment and carries contaminants away. Based on the division of hydraulics into hydrodynamics and hydrostatics, we have different hydraulic fluids. Firstly, hydraulic fluids for hydrodynamic applications are called power-transmission oils. Secondly, hydraulic fluids for hydrostatic application are called hydraulic oils."
        />
        <div className="row mt-4">
          {/* Filter Sidebar */}
          <div className="col-lg-3 d-none d-lg-block">
            <Filter filters={filters} handleApplyFilters={handleApplyFilters} />
          </div>

          {/* Product Content */}
          <div className="col-12 col-lg-9">
            <div className="d-flex w-100 align-items-center justify-content-between mb-3">
              <div>
                Showing{" "}
                <b>
                  {(currentPage - 1) * itemsPerPage + 1} -{" "}
                  {Math.min(currentPage * itemsPerPage, products.length)}
                </b>{" "}
                of {products.length}
              </div>
              <div
                className="d-inline d-lg-none filter-button"
                onClick={toggleSidePanel}
              >
                <div className="d-flex align-items-center">
                  <div className="filter-icon me-2">
                    <i className="bi bi-funnel"></i>
                  </div>
                  <div>FILTER(2)</div>
                </div>
              </div>
              <div className="d-flex align-items-center d-lg-flex d-none">
                <span className="fw-bold me-1">Sort By:</span>
                <SortByDropdown
                  onSortChange={handleSortChange}
                  currentSortOrder={sortOrder}
                />
                <div className="ms-3">
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(products.length / itemsPerPage)}
                  onPageChange={handlePageChange}
                />
                </div>
              </div>
            </div>
            <div>
            <ProductList products={paginatedProducts} />

            </div>
            <div className="d-flex justify-content-center mt-3">
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(products.length / itemsPerPage)}
                  onPageChange={handlePageChange}
                />
            </div>
          </div>
        </div>
        <SidePanel isOpen={isOpen} onClose={toggleSidePanel}>
          <SortByDropdown
            onSortChange={handleSortChange}
            currentSortOrder={sortOrder}
          />
          <Filter filters={filters} handleApplyFilters={handleApplyFilters} />
        </SidePanel>
      </div>
      <Footer />
    </>
  );
};

export default App;
