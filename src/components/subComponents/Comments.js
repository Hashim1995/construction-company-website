import React from "react";
import { Divider, Carousel, Comment, Avatar } from "antd";
import { CustomersImg } from "../../assets/img/imageList.js";

const Comments = () => {
  return (
    <div>
      <Divider className="commentsTitle" dashed={true}>
        OUR CUSTOMERS'S FEEDBACK
      </Divider>
      <div className="commentsCarouselWrap">
        <Carousel autoplay={true} effect="fade">
          <div>
            <Comment
              className="commentWrap"
              author={<p>Jeff Bezos</p>}
              avatar={<Avatar src={CustomersImg[1]} alt="Han Solo" />}
              content={
                <p>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure), to help
                  people create their product prototypes beautifully and
                  efficiently.
                </p>
              }
            />
          </div>
          <div>
            <Comment
              className="commentWrap"
              author={<p>Elon Musk</p>}
              avatar={<Avatar src={CustomersImg[0]} alt="Han Solo" />}
              content={
                <p>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure), to help
                  people create their product prototypes beautifully and
                  efficiently.
                </p>
              }
            />
          </div>
          <div>
            <Comment
              className="commentWrap"
              author={<p>Bill Gates</p>}
              avatar={<Avatar src={CustomersImg[2]} alt="Han Solo" />}
              content={
                <p>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure), to help
                  people create their product prototypes beautifully and
                  efficiently.
                </p>
              }
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Comments;
