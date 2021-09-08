import { useState, useEffect } from "react";
import { Divider, Tabs, Row, Col, Spin } from "antd";
import ImageGallery from "react-image-gallery";
import { commerce } from "../lib/commerce";
import { useTranslation } from "react-i18next";
const Portfolio = () => {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [spinnerState, setSpinnerState] = useState(false);
  useEffect(() => {
    fetchCategories();
    fetchCategoryProducts();
  }, []);

  // Categories

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();

    setCategories(data);
  };

  const fetchCategoryProducts = async (categoryId = "dizayn-i-l-ri") => {
    setSpinnerState(true);
    try {
      const { data } = await commerce.products.list({
        category_slug: [categoryId],
      });

      setProducts(data);
      setSpinnerState(false);
    } catch (e) {
      console.log(e);
      setSpinnerState(false);
    }
  };

  const { TabPane } = Tabs;

  return (
    <div className="portfolioWrap">
      <Divider className="portfolioTitle" dashed={true}>
        {t("our-portfolio")}
      </Divider>
      <div>
        <Row>
          <Col
            xs={{ span: 22, offset: 1 }}
            md={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
          >
            <Tabs
              defaultActiveKey="1"
              onTabClick={(categoryId) => {
                fetchCategoryProducts(categoryId);
              }}
            >
              {categories.map((category) => (
                <TabPane
                  tab={category.name}
                  key={category.slug}
                  onChange={() => {}}
                >
                  <div className="projectWrap">
                    {spinnerState ? (
                      <Spin />
                    ) : (
                      products &&
                      products.map((product) => {
                        const image = product["assets"].map((img) => ({
                          original: img.url,
                          thumbnail: img.url,
                        }));
                        return (
                          <div className="projectItem" key={product.id}>
                            <ImageGallery
                              showPlayButton={false}
                              items={image}
                            />
                            <h4 className="projectName">{product.name}</h4>
                          </div>
                        );
                      })
                    )}
                  </div>
                </TabPane>
              ))}
            </Tabs>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Portfolio;
