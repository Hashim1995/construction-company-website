import React from "react";
import { Divider, Collapse } from "antd";
import { Image } from "antd";
import { workersImg } from "../../assets/img/imageList.js";

const WhyUs = () => {
  const { Panel } = Collapse;
  return (
    <div>
      <Divider className="WhyUsTitle" dashed={true}>
        WHY CHOOSE US?
      </Divider>
      <div>
        <div className="WhyUsWrap">
          <Collapse
            accordion
            className="WhyUsCollapse"
            defaultActiveKey={["1"]}
          >
            <Panel
              className="WhyUsPanel"
              header="We have 30 plus years in the building industry"
              key="1"
            >
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur
                tortor mi, eleifend ornare lobortis non. Nulla porta purus quis
                iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis.
                Nullam ornare odio eu lacus tincidunt malesuada. Sed eu
                vestibulum elit. Curabitur tortor mi, eleifend ornare.
              </p>
            </Panel>
            <Panel
              className="WhyUsPanel"
              header="Quality construction continues after the project"
              key="2"
            >
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur
                tortor mi, eleifend ornare lobortis non. Nulla porta purus quis
                iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis.
                Nullam ornare odio eu lacus tincidunt malesuada. Sed eu
                vestibulum elit. Curabitur tortor mi, eleifend ornare.
              </p>
            </Panel>
            <Panel
              className="WhyUsPanel"
              header="We use technology to do the job more quickly"
              key="3"
            >
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur
                tortor mi, eleifend ornare lobortis non. Nulla porta purus quis
                iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis.
                Nullam ornare odio eu lacus tincidunt malesuada. Sed eu
                vestibulum elit. Curabitur tortor mi, eleifend ornare.
              </p>
            </Panel>
            <Panel
              className="WhyUsPanel"
              header="Employees are continually trained on safety issues"
              key="4"
            >
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur
                tortor mi, eleifend ornare lobortis non. Nulla porta purus quis
                iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis.
                Nullam ornare odio eu lacus tincidunt malesuada. Sed eu
                vestibulum elit. Curabitur tortor mi, eleifend ornare.
              </p>
            </Panel>
          </Collapse>
          <div className="WhyUsGallery">
            <Image.PreviewGroup>
              <Image width={"100%"} src={workersImg[0]} />
              <Image width={"33%"} src={workersImg[1]} />
              <Image width={"33%"} src={workersImg[2]} />
              <Image width={"33%"} src={workersImg[3]} />
            </Image.PreviewGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
