import { useState, useEffect } from "react";
import { Divider, Tabs, Row, Col, Spin, Typography, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import ImageGallery from "react-image-gallery";
import { commerce } from "../lib/commerce";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  const { Link } = Typography;

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
      <div>
        <Link
          href="https://s681sas.storage.yandex.net/rdisk/cdc76f027e504ecef237e80c338b1f07fe4eb7ff815d4f01b69886a954be330b/613a7599/CTSy-P8jsmItOMbmxL62Ova9_P2uhGDjmu3AvyDyzrcorwQLEr_jK4_123HpNTrUNsVf349idRfkXdXTG1PhJg==?uid=0&filename=RRNar%20kataloq.pdf&disposition=attachment&hash=FUixDddvC8gNRDbWsyekdLcTyP9HNguAfieihXG2iFd3claKkLoPKrCYsrtPlPR%2Bq/J6bpmRyOJonT3VoXnDag%3D%3D&limit=0&content_type=application%2Fpdf&owner_uid=476199404&fsize=35040627&hid=d060e5da158b999f06255bbb451c9fe4&media_type=document&tknv=v2&rtoken=QcKe2Rswbdlt&force_default=no&ycrid=na-85f083efdfaec1825fadcc223c046ea2-downloader21f&ts=5cb9644e5d840&s=002eeb7b465468a8596b0569b6a4d1ab6c9408a528ebae0752a998a3bb8b4bcb&pb=U2FsdGVkX1_wZh7642Y1Lo_lNNthzbdY6G045kIFgFBc1I64tLmfN5yr7ZHefISvoOUzOthx_vPghBDIf8t8pzil5smJpk-aidcJsyEvB30"
          target="_blank"
        >
          <DownloadOutlined style={{ marginRight: 7 }} />
          {t("download-portfolio")}
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
