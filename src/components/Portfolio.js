import { useState, useEffect } from "react";
import { Divider, Tabs, Row, Col } from "antd";
import ImageGallery from "react-image-gallery";
import { commerce } from "../lib/commerce";

const Portfolio = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

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
    try {
      const { data } = await commerce.products.list({
        category_slug: [categoryId],
      });
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };

  const { TabPane } = Tabs;
  const images1 = [
    {
      original:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/8/7/1/uo2018_backyard-22-back-porch-dusk-lights-KB2A0048_h.jpg.rend.hgtvcom.966.644.suffix/1533654546575.jpeg",
      thumbnail:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/8/7/1/uo2018_backyard-22-back-porch-dusk-lights-KB2A0048_h.jpg.rend.hgtvcom.966.644.suffix/1533654546575.jpeg",
    },
    {
      original:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/6/11/2/Original_Cassidy-Garcia-Patio-Stencil-Beauty-25-EDITED.jpg.rend.hgtvcom.616.822.suffix/1591906873183.jpeg",
      thumbnail:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/6/11/2/Original_Cassidy-Garcia-Patio-Stencil-Beauty-25-EDITED.jpg.rend.hgtvcom.616.822.suffix/1591906873183.jpeg",
    },
    {
      original:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/6/20/0/FOD17_Kendall-Simmons_Floral-Girls-Room_3.jpg.rend.hgtvcom.616.822.suffix/1497975353040.jpeg",
      thumbnail:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/11/8/0/IO_Marie-Flanigan_Traditional-Elegance-in-Braes-Heights_012.jpg.rend.hgtvcom.616.822.suffix/1510153720665.jpeg",
    },
  ];
  const images2 = [
    {
      original:
        "https://hgtvhome.sndimg.com/content/dam/images/hgrm/fullset/2012/9/27/0/CI-HGRM-gabriel-builders-fireplace-mantel_s4x3.jpg.rend.hgtvcom.966.725.suffix/1405437450817.jpeg",
      thumbnail:
        "https://hgtvhome.sndimg.com/content/dam/images/hgrm/fullset/2012/9/27/0/CI-HGRM-gabriel-builders-fireplace-mantel_s4x3.jpg.rend.hgtvcom.966.725.suffix/1405437450817.jpeg",
    },
    {
      original:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/7/27/0/IO_Lauren-Rubin-Architecture_Fifth-Ave-Penthouse_2.jpg.rend.hgtvcom.966.725.suffix/1501169612488.jpeg",
      thumbnail:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/7/27/0/IO_Lauren-Rubin-Architecture_Fifth-Ave-Penthouse_2.jpg.rend.hgtvcom.966.725.suffix/1501169612488.jpeg",
    },
    {
      original:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/8/2/1/FOD17_Kerra-Michele-Huerta_T-St-Rowhouse_14.jpg.rend.hgtvcom.966.644.suffix/1501702966186.jpeg",
      thumbnail:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/8/2/1/FOD17_Kerra-Michele-Huerta_T-St-Rowhouse_14.jpg.rend.hgtvcom.966.644.suffix/1501702966186.jpeg",
    },
    {
      original:
        "https://i2.wp.com/vishion.co/wp-content/uploads/2020/10/interior-design.jpg?fit=1024%2C683&ssl=1",
      thumbnail:
        "https://i2.wp.com/vishion.co/wp-content/uploads/2020/10/interior-design.jpg?fit=1024%2C683&ssl=1",
    },
    {
      original:
        "https://lh3.googleusercontent.com/proxy/aTmgm9j5vIwqmh5IBxQu5c0bhpbwu5AuMhdZtNTBP8WebPs83PV6NYFtpy7OK_DZS__TF0uUIRb7yYIXPltW7-PuDzGIfYnpkcEdV-ZWvbGh5HLZaKVkyb8R_ECabw",
      thumbnail:
        "https://lh3.googleusercontent.com/proxy/aTmgm9j5vIwqmh5IBxQu5c0bhpbwu5AuMhdZtNTBP8WebPs83PV6NYFtpy7OK_DZS__TF0uUIRb7yYIXPltW7-PuDzGIfYnpkcEdV-ZWvbGh5HLZaKVkyb8R_ECabw",
    },
  ];
  const images3 = [
    {
      original:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/2/5/0/CI_Clopay_Coachman-Collection-painted-steel-garage-door-with-composite-overlays-3.jpg.rend.hgtvcom.966.725.suffix/1580903177526.jpeg",
      thumbnail:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/2/5/0/CI_Clopay_Coachman-Collection-painted-steel-garage-door-with-composite-overlays-3.jpg.rend.hgtvcom.966.725.suffix/1580903177526.jpeg",
    },
    {
      original:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/3/13/original_Camille-Smith_bathroom-plants-beauty-vert.jpg.rend.hgtvcom.616.822.suffix/1552483217151.jpeg",
      thumbnail:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/3/13/original_Camille-Smith_bathroom-plants-beauty-vert.jpg.rend.hgtvcom.616.822.suffix/1552483217151.jpeg",
    },
    {
      original:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2020/2/20/rx_amazon-schoolhouse-flush-mount-ceiling-light.jpeg.rend.hgtvcom.966.966.suffix/1582238066936.jpeg",
      thumbnail:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2020/2/20/rx_amazon-schoolhouse-flush-mount-ceiling-light.jpeg.rend.hgtvcom.966.966.suffix/1582238066936.jpeg",
    },
  ];
  const images4 = [
    {
      original:
        "https://www.jameshardie.com/JamesHardieNorthAmerica/media/BlogPost/2021-design-trends/exterior-design-and-home-color-trends-for-2021.jpg",
      thumbnail:
        "https://www.jameshardie.com/JamesHardieNorthAmerica/media/BlogPost/2021-design-trends/exterior-design-and-home-color-trends-for-2021.jpg",
    },
    {
      original:
        "https://st.hzcdn.com/simgs/pictures/living-rooms/white-modern-design-marie-burgos-design-img~5e712e900cd7325d_9-7806-1-5642fa0.jpg",
      thumbnail:
        "https://st.hzcdn.com/simgs/pictures/living-rooms/white-modern-design-marie-burgos-design-img~5e712e900cd7325d_9-7806-1-5642fa0.jpg",
    },
    {
      original:
        "https://cdn.trendhunterstatic.com/phpthumbnails/368/368030/368030_1_800.jpeg",
      thumbnail:
        "https://cdn.trendhunterstatic.com/phpthumbnails/368/368030/368030_1_800.jpeg",
    },
  ];
  const images5 = [
    {
      original:
        "https://images.adsttc.com/media/images/500f/0fd3/28ba/0d0c/c700/18ce/large_jpg/stringio.jpg?1413988558",
      thumbnail:
        "https://images.adsttc.com/media/images/500f/0fd3/28ba/0d0c/c700/18ce/large_jpg/stringio.jpg?1413988558",
    },
    {
      original:
        "http://weandthecolor.com/wp-content/uploads/2015/10/1-A-futuristic-home-near-Ludwigsburg-Germany-by-J.-Mayer-H.-Architects.jpg",
      thumbnail:
        "http://weandthecolor.com/wp-content/uploads/2015/10/1-A-futuristic-home-near-Ludwigsburg-Germany-by-J.-Mayer-H.-Architects.jpg",
    },
    {
      original:
        "https://design-milk.com/images/2014/06/Black-White-Interior-OOOOX-1.jpg",
      thumbnail:
        "https://design-milk.com/images/2014/06/Black-White-Interior-OOOOX-1.jpg",
    },
  ];
  const images6 = [
    {
      original:
        "https://images.newhomeguide.com/c52182ac03cbf25299d0ba7e23ae61eb.jpeg",
      thumbnail:
        "https://images.newhomeguide.com/c52182ac03cbf25299d0ba7e23ae61eb.jpeg",
    },
    {
      original:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CwMuVBlHNd8wfF5_IZdPqUtaTfhy_rCJYg&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CwMuVBlHNd8wfF5_IZdPqUtaTfhy_rCJYg&usqp=CAU",
    },
    {
      original:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1qU7Sxws_ZAZt3p11Sbr1ug_5VDAHH4mGA&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1qU7Sxws_ZAZt3p11Sbr1ug_5VDAHH4mGA&usqp=CAU",
    },
  ];
  const images7 = [
    {
      original:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/11d95865724955.5affe5fe66832.jpg",
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/11d95865724955.5affe5fe66832.jpg",
    },
    {
      original:
        "https://image1.apartmentfinder.com/i2/4zw09NZYbDuBHLizmJwIsH6kVFRrMYe_3M3s05z-1YU/110/image.jpg",
      thumbnail:
        "https://image1.apartmentfinder.com/i2/4zw09NZYbDuBHLizmJwIsH6kVFRrMYe_3M3s05z-1YU/110/image.jpg",
    },
    {
      original:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-xHN6c8b_P0WyqvQXNualwrFe-mMRSuE1OFVBelzeUiMxDXRw28tTCN2DTCFA6mcXuA&usqp=CAU",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-xHN6c8b_P0WyqvQXNualwrFe-mMRSuE1OFVBelzeUiMxDXRw28tTCN2DTCFA6mcXuA&usqp=CAU",
    },
  ];
  const images8 = [
    {
      original:
        "https://wp-assets.dotproperty-kh.com/wp-content/uploads/sites/14/2020/03/09123131/Civic-Horizon-Ekkamai-696x464.jpg",
      thumbnail:
        "https://wp-assets.dotproperty-kh.com/wp-content/uploads/sites/14/2020/03/09123131/Civic-Horizon-Ekkamai-696x464.jpg",
    },
    {
      original:
        "http://www.apartments.com/images/default-source/default-album/apartment-kitchen.tmb-featuredim.jpg?sfvrsn=17473757_0",
      thumbnail:
        "http://www.apartments.com/images/default-source/default-album/apartment-kitchen.tmb-featuredim.jpg?sfvrsn=17473757_0",
    },
    {
      original:
        "https://images.rentals.ca/property-pictures/medium/toronto-on/471385/apartment-4782883.jpg",
      thumbnail:
        "https://images.rentals.ca/property-pictures/medium/toronto-on/471385/apartment-4782883.jpg",
    },
  ];
  const images9 = [
    {
      original:
        "https://i.pinimg.com/originals/8d/ca/bf/8dcabfd2e56f88c7e72ceca82692ec0c.jpg",
      thumbnail:
        "https://i.pinimg.com/originals/8d/ca/bf/8dcabfd2e56f88c7e72ceca82692ec0c.jpg",
    },
    {
      original:
        "https://cdn.homedit.com/wp-content/uploads/2021/05/Bologna-Apartment-living-room-with-white-couch-800x534.jpg",
      thumbnail:
        "https://cdn.homedit.com/wp-content/uploads/2021/05/Bologna-Apartment-living-room-with-white-couch-800x534.jpg",
    },
    {
      original:
        "http://cdn.home-designing.com/wp-content/uploads/2014/08/classic-design.jpg",
      thumbnail:
        "http://cdn.home-designing.com/wp-content/uploads/2014/08/classic-design.jpg",
    },
  ];
  const images10 = [
    {
      original:
        "http://d2kcmk0r62r1qk.cloudfront.net/imageSponsors/xlarge/2014_05_02_04_52_41_sm_condo_04_entrance_building_option_1-f1.jpg",
      thumbnail:
        "http://d2kcmk0r62r1qk.cloudfront.net/imageSponsors/xlarge/2014_05_02_04_52_41_sm_condo_04_entrance_building_option_1-f1.jpg",
    },
    {
      original:
        "https://www.idesignarch.com/wp-content/uploads/Luxury-Modern-Loft-Studio-Apartment-Bangkok-Thailand_1.jpg",
      thumbnail:
        "https://www.idesignarch.com/wp-content/uploads/Luxury-Modern-Loft-Studio-Apartment-Bangkok-Thailand_1.jpg",
    },
    {
      original:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9e0b8430767291.5631d128aa375.jpg",
      thumbnail:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9e0b8430767291.5631d128aa375.jpg",
    },
  ];
  const images11 = [
    {
      original:
        "https://www.veetildigital.com.au/wp-content/uploads/2017/06/3d-Modeling-business.jpg",
      thumbnail:
        "https://www.veetildigital.com.au/wp-content/uploads/2017/06/3d-Modeling-business.jpg",
    },
    {
      original:
        "https://media-cdn.tripadvisor.com/media/photo-s/01/c1/08/e4/lobby-business-center.jpg",
      thumbnail:
        "https://media-cdn.tripadvisor.com/media/photo-s/01/c1/08/e4/lobby-business-center.jpg",
    },
    {
      original:
        "https://nhghotels.com/wp-content/uploads/2017/11/Hyatt-Place-Blacksburg-Business-Ctr-web.jpg",
      thumbnail:
        "https://nhghotels.com/wp-content/uploads/2017/11/Hyatt-Place-Blacksburg-Business-Ctr-web.jpg",
    },
  ];
  const images12 = [
    {
      original:
        "http://www.energoprojekt.rs/wp-content/uploads//2020/03/VLA_8337.jpg",
      thumbnail:
        "http://www.energoprojekt.rs/wp-content/uploads//2020/03/VLA_8337.jpg",
    },
    {
      original:
        "https://www.ttoscandinavia.com/wp-content/uploads/2016/05/Business_Center_header.jpg",
      thumbnail:
        "https://www.ttoscandinavia.com/wp-content/uploads/2016/05/Business_Center_header.jpg",
    },
    {
      original:
        "https://abbakin.com/wp-content/uploads/2018/11/Everyday_Business_Center_Ikotun-1.jpg",
      thumbnail:
        "https://abbakin.com/wp-content/uploads/2018/11/Everyday_Business_Center_Ikotun-1.jpg",
    },
  ];
  const images13 = [
    {
      original:
        "https://www.fodors.com/wp-content/uploads/2017/09/Candy-Factory-Tours-Hersheys-1.jpg",
      thumbnail:
        "https://www.fodors.com/wp-content/uploads/2017/09/Candy-Factory-Tours-Hersheys-1.jpg",
    },
    {
      original:
        "https://investinhamilton.ca/wp-content/uploads/2019/10/Sour-Patch-Kids-Hamilton.jpg",
      thumbnail:
        "https://investinhamilton.ca/wp-content/uploads/2019/10/Sour-Patch-Kids-Hamilton.jpg",
    },
    {
      original:
        "https://i.cbc.ca/1.5333715.1571935694!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/mondel-z-candy.jpg",
      thumbnail:
        "https://i.cbc.ca/1.5333715.1571935694!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/mondel-z-candy.jpg",
    },
  ];

  return (
    <div className="portfolioWrap">
      <Divider className="portfolioTitle" dashed={true}>
        OUR PORTFOLIO
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
              onTabClick={(categoryId) => fetchCategoryProducts(categoryId)}
            >
              {categories.map((category) => (
                <TabPane
                  tab={category.name}
                  key={category.slug}
                  onClick={() => console.log("clicked")}
                >
                  <div className="projectWrap">
                    {products &&
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
                      })}

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
