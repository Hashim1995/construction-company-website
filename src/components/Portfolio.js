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

                    {/* <div className="projectItem">
                      <ImageGallery showPlayButton={false} items={images2} />
                      <h4 className="projectName">EYES OF ABSHERON</h4>
                    </div>
                    <div className="projectItem">
                      <ImageGallery showPlayButton={false} items={images3} />
                      <h4 className="projectName">CASPIAN MOONLIGHT</h4>
                    </div>
                    <div className="projectItem">
                      <ImageGallery showPlayButton={false} items={images4} />
                      <h4 className="projectName">GILAVAR</h4>
                    </div>
                    <div className="projectItem">
                      <ImageGallery showPlayButton={false} items={images5} />
                      <h4 className="projectName">OLD BREATH</h4>
                    </div>
                    <div className="projectItem">
                      <ImageGallery showPlayButton={false} items={images6} />
                      <h4 className="projectName">ABSHERON</h4>
                    </div> */}
                  </div>
                </TabPane>
              ))}

              {/* <TabPane tab="SINGLE HOUSES" key="1">
                <div className="projectWrap">
                  <div className="projectItem">
                    <ImageGallery showPlayButton={false} items={images1} />
                    <h4 className="projectName">BUZOVNA</h4>
                  </div>
                  <div className="projectItem">
                    <ImageGallery showPlayButton={false} items={images2} />
                    <h4 className="projectName">EYES OF ABSHERON</h4>
                  </div>
                  <div className="projectItem">
                    <ImageGallery showPlayButton={false} items={images3} />
                    <h4 className="projectName">CASPIAN MOONLIGHT</h4>
                  </div>
                  <div className="projectItem">
                    <ImageGallery showPlayButton={false} items={images4} />
                    <h4 className="projectName">GILAVAR</h4>
                  </div>
                  <div className="projectItem">
                    <ImageGallery showPlayButton={false} items={images5} />
                    <h4 className="projectName">OLD BREATH</h4>
                  </div>
                  <div className="projectItem">
                    <ImageGallery showPlayButton={false} items={images6} />
                    <h4 className="projectName">ABSHERON</h4>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="APARTMENTS" key="2">
                <div className="projectWrap">
                  <div className="projectItem">
                    <ImageGallery showPlayButton={false} items={images7} />
                    <h4 className="projectName">SAHIL</h4>
                  </div>
                  <div className="projectItem">
                    <ImageGallery showPlayButton={false} items={images8} />
                    <h4 className="projectName">28 MAY</h4>
                  </div>
                  <div className="projectItem">
                    <ImageGallery showPlayButton={false} items={images9} />
                    <h4 className="projectName">NIZAMI</h4>
                  </div>
                  <div className="projectItem">
                    <ImageGallery showPlayButton={false} items={images10} />
                    <h4 className="projectName">CENTRAL PARK</h4>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="BUSINESS CENTERS" key="3">
                <div className="projectWrap">
                  <div className="projectItem">
                    <ImageGallery showPlayButton={false} items={images11} />
                    <h4 className="projectName">NIZAMI BUSINESS CENTER</h4>
                  </div>
                  <div className="projectItem">
                    <ImageGallery showPlayButton={false} items={images12} />
                    <h4 className="projectName">KHAZAR BUSINESS CENTER</h4>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="FACTORIES" key="4">
                <div className="projectWrap">
                  <div className="projectItem">
                    <ImageGallery showPlayButton={false} items={images13} />
                    <h4 className="projectName">SUMGAIT CANDY FACTORY</h4>
                  </div>
                </div>
              </TabPane> */}
            </Tabs>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Portfolio;
