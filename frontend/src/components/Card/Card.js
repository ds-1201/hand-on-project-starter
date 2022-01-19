import React from "react";
import "./Card.css";
import dataAnalysis from "./../../assets/dataanlysis_nyc.png";

const BlogCard = () => {
  return (
    <a
      className="blog-list-card-link"
      href="#"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div classNameName="blog-list-card">
        <div className="blog-list-card-image">
          <img src={dataAnalysis} alt="" />
        </div>
        <div className="blog-list-card-text">
          <div className="blog-list-card-topic">{"TOPIC"}</div>
          <div className="blog-list-card-title">{"Blog Page Title"}</div>
          <span className="blog-list-card-date">{"Apr 17, 2021"}</span>
          <hr />
          <div className="blog-list-card-description">
            {`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a ut ex
          doloribus. Incidunt maiores nisi deleniti dolor mollitia. Veritatis
          molestiae sint, eligendi molestias tempora adipisci a corrupti iste
          blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nemo, ex? ...
          `}
          </div>
          {/* <div className="blog-list-card-tags">
            Tags:
            {blog?.tag?.map((tag, index) => {
              return (
                <div key={index} className="blog-list-card-tag">
                  {tag}
                </div>
              );
            }) || (
              <>
                <div className="blog-list-card-tag">K-Means</div>
                <div className="blog-list-card-tag">Clustering</div>
              </>
            )}
          </div> */}
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
