import React, { useState } from "react";
import { Image, Divider, Tabs, Row, Col } from "antd";

const Portfolio = () => {
  const { TabPane } = Tabs;
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
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
            <Tabs defaultActiveKey="1">
              <TabPane tab="SINGLE HOUSES" key="1">
                <div className="projectWrap">
                  <div className="projectItem">
                    <div className="projectImgWrap">
                      <Image
                        preview={{ visible1: false }}
                        width={"100%"}
                        height={"300px"}
                        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/8/7/1/uo2018_backyard-22-back-porch-dusk-lights-KB2A0048_h.jpg.rend.hgtvcom.966.644.suffix/1533654546575.jpeg"
                        onClick={() => setVisible1(true)}
                      />
                      <div style={{ display: "none" }}>
                        <Image.PreviewGroup
                          preview={{
                            visible1,
                            onVisibleChange: (vis) => setVisible1(vis),
                          }}
                        >
                          <Image src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/8/7/1/uo2018_backyard-22-back-porch-dusk-lights-KB2A0048_h.jpg.rend.hgtvcom.966.644.suffix/1533654546575.jpeg" />
                          <Image src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/6/11/2/Original_Cassidy-Garcia-Patio-Stencil-Beauty-25-EDITED.jpg.rend.hgtvcom.616.822.suffix/1591906873183.jpeg" />
                          <Image src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/6/20/0/FOD17_Kendall-Simmons_Floral-Girls-Room_3.jpg.rend.hgtvcom.616.822.suffix/1497975353040.jpeg" />
                          <Image src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/11/8/0/IO_Marie-Flanigan_Traditional-Elegance-in-Braes-Heights_012.jpg.rend.hgtvcom.616.822.suffix/1510153720665.jpeg" />
                        </Image.PreviewGroup>
                      </div>
                    </div>
                    <h4 className="projectName">BUZOVNA</h4>
                  </div>
                  <div className="projectItem">
                    <div className="projectImgWrap">
                      <Image
                        preview={{ visible2: false }}
                        width={"100%"}
                        height={"300px"}
                        src="https://hgtvhome.sndimg.com/content/dam/images/hgrm/fullset/2012/9/27/0/CI-HGRM-gabriel-builders-fireplace-mantel_s4x3.jpg.rend.hgtvcom.966.725.suffix/1405437450817.jpeg"
                        onClick={() => setVisible2(true)}
                      />
                      <div style={{ display: "none" }}>
                        <Image.PreviewGroup
                          preview={{
                            visible2,
                            onVisibleChange: (vis) => setVisible2(vis),
                          }}
                        >
                          <Image src="https://hgtvhome.sndimg.com/content/dam/images/hgrm/fullset/2012/9/27/0/CI-HGRM-gabriel-builders-fireplace-mantel_s4x3.jpg.rend.hgtvcom.966.725.suffix/1405437450817.jpeg" />
                          <Image src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/7/27/0/IO_Lauren-Rubin-Architecture_Fifth-Ave-Penthouse_2.jpg.rend.hgtvcom.966.725.suffix/1501169612488.jpeg" />
                          <Image src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/8/2/1/FOD17_Kerra-Michele-Huerta_T-St-Rowhouse_14.jpg.rend.hgtvcom.966.644.suffix/1501702966186.jpeg" />
                          <Image src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/8/3/1/Original_cassidy-garcia_easy-home-upgrades-beauty_H.jpg.rend.hgtvcom.966.644.suffix/1533317802591.jpeg" />
                        </Image.PreviewGroup>
                      </div>
                    </div>
                    <h4 className="projectName">EYES OF ABSHERON</h4>
                  </div>
                  <div className="projectItem">
                    <div className="projectImgWrap">
                      <Image
                        preview={{ visible3: false }}
                        width={"100%"}
                        height={"300px"}
                        src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/2/5/0/CI_Clopay_Coachman-Collection-painted-steel-garage-door-with-composite-overlays-3.jpg.rend.hgtvcom.966.725.suffix/1580903177526.jpeg"
                        onClick={() => setVisible3(true)}
                      />
                      <div style={{ display: "none" }}>
                        <Image.PreviewGroup
                          preview={{
                            visible3,
                            onVisibleChange: (vis) => setVisible3(vis),
                          }}
                        >
                          <Image src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/2/5/0/CI_Clopay_Coachman-Collection-painted-steel-garage-door-with-composite-overlays-3.jpg.rend.hgtvcom.966.725.suffix/1580903177526.jpeg" />
                          <Image src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/3/13/original_Camille-Smith_bathroom-plants-beauty-vert.jpg.rend.hgtvcom.616.822.suffix/1552483217151.jpeg" />
                          <Image src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2020/2/20/rx_amazon-schoolhouse-flush-mount-ceiling-light.jpeg.rend.hgtvcom.966.966.suffix/1582238066936.jpeg" />
                          <Image src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/5/31/0/FOD17_Allison-Crawford_HOTELette-Nashville_2.jpg.rend.hgtvcom.616.822.suffix/1496247725825.jpeg" />
                        </Image.PreviewGroup>
                      </div>
                    </div>
                    <h4 className="projectName">CASPIAN MOONLIGHT</h4>
                  </div>
                  <div className="projectItem">
                    <div className="projectImgWrap">
                      <Image
                        preview={{ visible4: false }}
                        width={"100%"}
                        height={"300px"}
                        src="https://www.jameshardie.com/JamesHardieNorthAmerica/media/BlogPost/2021-design-trends/exterior-design-and-home-color-trends-for-2021.jpg"
                        onClick={() => setVisible4(true)}
                      />
                      <div style={{ display: "none" }}>
                        <Image.PreviewGroup
                          preview={{
                            visible4,
                            onVisibleChange: (vis) => setVisible4(vis),
                          }}
                        >
                          <Image src="https://www.jameshardie.com/JamesHardieNorthAmerica/media/BlogPost/2021-design-trends/exterior-design-and-home-color-trends-for-2021.jpg" />
                          <Image src="https://st.hzcdn.com/simgs/pictures/living-rooms/white-modern-design-marie-burgos-design-img~5e712e900cd7325d_9-7806-1-5642fa0.jpg" />
                          <Image src="https://cdn.trendhunterstatic.com/phpthumbnails/368/368030/368030_1_800.jpeg" />
                          <Image src="https://cdn.homedit.com/wp-content/uploads/2012/05/house-amoberen-berg5.jpg" />
                        </Image.PreviewGroup>
                      </div>
                    </div>
                    <h4 className="projectName">WHITE CITY</h4>
                  </div>
                  <div className="projectItem">
                    <div className="projectImgWrap">
                      <Image
                        preview={{ visible5: false }}
                        width={"100%"}
                        height={"300px"}
                        src="https://images.adsttc.com/media/images/500f/0fd3/28ba/0d0c/c700/18ce/large_jpg/stringio.jpg?1413988558"
                        onClick={() => setVisible5(true)}
                      />
                      <div style={{ display: "none" }}>
                        <Image.PreviewGroup
                          preview={{
                            visible5,
                            onVisibleChange: (vis) => setVisible5(vis),
                          }}
                        >
                          <Image src="https://images.adsttc.com/media/images/500f/0fd3/28ba/0d0c/c700/18ce/large_jpg/stringio.jpg?1413988558" />
                          <Image src="http://weandthecolor.com/wp-content/uploads/2015/10/1-A-futuristic-home-near-Ludwigsburg-Germany-by-J.-Mayer-H.-Architects.jpg" />
                          <Image src="https://design-milk.com/images/2014/06/Black-White-Interior-OOOOX-1.jpg" />
                          <Image src="https://i.pinimg.com/originals/d7/1f/9c/d71f9cbb166245ecc06b96822bc4f1cf.jpg" />
                        </Image.PreviewGroup>
                      </div>
                    </div>
                    <h4 className="projectName">PIRALLAHI</h4>
                  </div>
                  <div className="projectItem">
                    <div className="projectImgWrap">
                      <Image
                        preview={{ visible6: false }}
                        width={"100%"}
                        height={"300px"}
                        src="https://images.newhomeguide.com/c52182ac03cbf25299d0ba7e23ae61eb.jpeg"
                        onClick={() => setVisible6(true)}
                      />
                      <div style={{ display: "none" }}>
                        <Image.PreviewGroup
                          preview={{
                            visible6,
                            onVisibleChange: (vis) => setVisible6(vis),
                          }}
                        >
                          <Image src="https://images.newhomeguide.com/c52182ac03cbf25299d0ba7e23ae61eb.jpeg" />
                          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CwMuVBlHNd8wfF5_IZdPqUtaTfhy_rCJYg&usqp=CAU" />
                          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1qU7Sxws_ZAZt3p11Sbr1ug_5VDAHH4mGA&usqp=CAU" />
                          <Image src="https://lh3.googleusercontent.com/proxy/8i5UMf7pEv4pqmoCE-G_LjT7hTM3KaVQnbsngsHgDZH-aklJevLUGMsbOuooRk0YrrbC7anW-XNlbrmoTBic0pCYPqT0EGh_QoqLJ0hwLw" />
                        </Image.PreviewGroup>
                      </div>
                    </div>
                    <h4 className="projectName">OLD BREATH</h4>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="APARTMENTS" key="2">
                <div className="projectWrap">
                  <div className="projectItem">
                    <div className="projectImgWrap">
                      <Image
                        preview={{ visible1: false }}
                        width={"100%"}
                        height={"300px"}
                        src="https://lh3.googleusercontent.com/proxy/w5yMrADjOoFyeEybXyMA2cnz4Il-QQ7g65gIF3G4kRaZlTkM3fyVfUSxM-oIwcWUl4HVXyXlIRPKXZ9ij39b5JQCPYRaMVPoHxJWZJE4BjOhkNhby8ibJj1BTSp3L-0ktEN2k2mTNQbOi_WbX-imarS4"
                        onClick={() => setVisible1(true)}
                      />
                      <div style={{ display: "none" }}>
                        <Image.PreviewGroup
                          preview={{
                            visible1,
                            onVisibleChange: (vis) => setVisible1(vis),
                          }}
                        >
                          <Image src="https://lh3.googleusercontent.com/proxy/w5yMrADjOoFyeEybXyMA2cnz4Il-QQ7g65gIF3G4kRaZlTkM3fyVfUSxM-oIwcWUl4HVXyXlIRPKXZ9ij39b5JQCPYRaMVPoHxJWZJE4BjOhkNhby8ibJj1BTSp3L-0ktEN2k2mTNQbOi_WbX-imarS4" />
                          <Image src="https://image1.apartmentfinder.com/i2/4zw09NZYbDuBHLizmJwIsH6kVFRrMYe_3M3s05z-1YU/110/image.jpg" />
                          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-xHN6c8b_P0WyqvQXNualwrFe-mMRSuE1OFVBelzeUiMxDXRw28tTCN2DTCFA6mcXuA&usqp=CAU" />
                          <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2e/25/da/old-town-by-welcome-apartment.jpg?w=900&h=-1&s=1" />
                        </Image.PreviewGroup>
                      </div>
                    </div>
                    <h4 className="projectName">STUDENT</h4>
                  </div>
                  <div className="projectItem">
                    <div className="projectImgWrap">
                      <Image
                        preview={{ visible2: false }}
                        width={"100%"}
                        height={"300px"}
                        src="https://wp-assets.dotproperty-kh.com/wp-content/uploads/sites/14/2020/03/09123131/Civic-Horizon-Ekkamai-696x464.jpg"
                        onClick={() => setVisible2(true)}
                      />
                      <div style={{ display: "none" }}>
                        <Image.PreviewGroup
                          preview={{
                            visible2,
                            onVisibleChange: (vis) => setVisible2(vis),
                          }}
                        >
                          <Image src="https://wp-assets.dotproperty-kh.com/wp-content/uploads/sites/14/2020/03/09123131/Civic-Horizon-Ekkamai-696x464.jpg" />
                          <Image src="http://www.apartments.com/images/default-source/default-album/apartment-kitchen.tmb-featuredim.jpg?sfvrsn=17473757_0" />
                          <Image src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2e/25/da/old-town-by-welcome-apartment.jpg?w=900&h=-1&s=1" />
                          <Image src="https://images.rentals.ca/property-pictures/medium/toronto-on/471385/apartment-4782883.jpg" />
                        </Image.PreviewGroup>
                      </div>
                    </div>
                    <h4 className="projectName">KOROGLU COMPLEX</h4>
                  </div>
                  <div className="projectItem">
                    <div className="projectImgWrap">
                      <Image
                        preview={{ visible3: false }}
                        width={"100%"}
                        height={"300px"}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFuDQM0hJ8AtsI4R9INFV3EMO_Wmmqy7h3g&usqp=CAU"
                        onClick={() => setVisible3(true)}
                      />
                      <div style={{ display: "none" }}>
                        <Image.PreviewGroup
                          preview={{
                            visible3,
                            onVisibleChange: (vis) => setVisible3(vis),
                          }}
                        >
                          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFuDQM0hJ8AtsI4R9INFV3EMO_Wmmqy7h3g&usqp=CAU" />
                          <Image src="https://cdn.homedit.com/wp-content/uploads/2021/05/Bologna-Apartment-living-room-with-white-couch-800x534.jpg" />
                          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOo3aEr141DrCvvIAPBeXYNGydQU_rGR4_Y2Ob3l6WqPYGmfr1JRWC2MOi0UWckR4lONg&usqp=CAU" />
                          <Image src="http://cdn.home-designing.com/wp-content/uploads/2014/08/classic-design.jpg" />
                        </Image.PreviewGroup>
                      </div>
                    </div>
                    <h4 className="projectName">SAHIL</h4>
                  </div>
                  <div className="projectItem">
                    <div className="projectImgWrap">
                      <Image
                        preview={{ visible3: false }}
                        width={"100%"}
                        height={"300px"}
                        src="http://d2kcmk0r62r1qk.cloudfront.net/imageSponsors/xlarge/2014_05_02_04_52_41_sm_condo_04_entrance_building_option_1-f1.jpg"
                        onClick={() => setVisible3(true)}
                      />
                      <div style={{ display: "none" }}>
                        <Image.PreviewGroup
                          preview={{
                            visible3,
                            onVisibleChange: (vis) => setVisible3(vis),
                          }}
                        >
                          <Image src="http://d2kcmk0r62r1qk.cloudfront.net/imageSponsors/xlarge/2014_05_02_04_52_41_sm_condo_04_entrance_building_option_1-f1.jpg" />
                          <Image src="https://www.idesignarch.com/wp-content/uploads/Luxury-Modern-Loft-Studio-Apartment-Bangkok-Thailand_1.jpg" />
                          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ42NtnmgIxvzqMrmhqEv8pZcoc3JYu58lhUdEUDJ_ZjK0FhV8sC4tT8p5yy5KKNPddqnw&usqp=CAU" />
                          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOkCbcItLbDBonrcG5gZgrZjmfzQUu0K862fZa6bdjIKpCwpsTd9CCp89kaIWdHQqOls&usqp=CAU" />
                        </Image.PreviewGroup>
                      </div>
                    </div>
                    <h4 className="projectName">BAKU</h4>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="BUSINESS CENTERS" key="3">
                <div className="projectWrap">
                  <div className="projectItem">
                    <div className="projectImgWrap">
                      <Image
                        preview={{ visible3: false }}
                        width={"100%"}
                        height={"300px"}
                        src="https://www.veetildigital.com.au/wp-content/uploads/2017/06/3d-Modeling-business.jpg"
                        onClick={() => setVisible3(true)}
                      />
                      <div style={{ display: "none" }}>
                        <Image.PreviewGroup
                          preview={{
                            visible3,
                            onVisibleChange: (vis) => setVisible3(vis),
                          }}
                        >
                          <Image src="https://www.veetildigital.com.au/wp-content/uploads/2017/06/3d-Modeling-business.jpg" />
                          <Image src="https://media-cdn.tripadvisor.com/media/photo-s/01/c1/08/e4/lobby-business-center.jpg" />
                          <Image src="https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_860,q_75,w_1000/https://assets.simpleviewinc.com/simpleview/image/upload/crm/virginiabeachva/Business-Center---1395223_27BEA519-E708-4AAE-A6AB18335CF455DA_b37b09ba-7b95-48ee-bda517e45018c04b.jpg" />
                          <Image src="https://nhghotels.com/wp-content/uploads/2017/11/Hyatt-Place-Blacksburg-Business-Ctr-web.jpg" />
                        </Image.PreviewGroup>
                      </div>
                    </div>
                    <h4 className="projectName">NIZAMI BUSINESS CENTER</h4>
                  </div>
                  <div className="projectItem">
                    <div className="projectImgWrap">
                      <Image
                        preview={{ visible3: false }}
                        width={"100%"}
                        height={"300px"}
                        src="http://www.energoprojekt.rs/wp-content/uploads//2020/03/VLA_8337.jpg"
                        onClick={() => setVisible3(true)}
                      />
                      <div style={{ display: "none" }}>
                        <Image.PreviewGroup
                          preview={{
                            visible3,
                            onVisibleChange: (vis) => setVisible3(vis),
                          }}
                        >
                          <Image src="http://www.energoprojekt.rs/wp-content/uploads//2020/03/VLA_8337.jpg" />
                          <Image src="https://www.ttoscandinavia.com/wp-content/uploads/2016/05/Business_Center_header.jpg" />
                          <Image src="https://abbakin.com/wp-content/uploads/2018/11/Everyday_Business_Center_Ikotun-1.jpg" />
                          <Image src="http://www.vibia.com/wp-content/uploads/2017/01/Regus-10.jpg" />
                        </Image.PreviewGroup>
                      </div>
                    </div>
                    <h4 className="projectName">KHAZAR BUSINESS CENTER</h4>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="FACTORIES" key="4">
                <div className="projectWrap">
                  <div className="projectItem">
                    <div className="projectImgWrap">
                      <Image
                        preview={{ visible3: false }}
                        width={"100%"}
                        height={"300px"}
                        src="https://www.fodors.com/wp-content/uploads/2017/09/Candy-Factory-Tours-Hersheys-1.jpg"
                        onClick={() => setVisible3(true)}
                      />
                      <div style={{ display: "none" }}>
                        <Image.PreviewGroup
                          preview={{
                            visible3,
                            onVisibleChange: (vis) => setVisible3(vis),
                          }}
                        >
                          <Image src="https://www.fodors.com/wp-content/uploads/2017/09/Candy-Factory-Tours-Hersheys-1.jpg" />
                          <Image src="https://i.cbc.ca/1.5333715.1571935694!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/mondel-z-candy.jpg" />
                          <Image src="https://investinhamilton.ca/wp-content/uploads/2019/10/Sour-Patch-Kids-Hamilton.jpg" />
                          <Image src="https://i.ytimg.com/vi/TgMCgHz_rnc/maxresdefault.jpg" />
                        </Image.PreviewGroup>
                      </div>
                    </div>
                    <h4 className="projectName">CANDY FACTORY SUMGAIT</h4>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Portfolio;
