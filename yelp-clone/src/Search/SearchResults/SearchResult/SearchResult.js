import React from "react";
import BusinessRating from "../../../BusinessRating/BusinessRating";
import styles from "./SearchResult.module.css";

const SearchResult = (props) => {
  if (!props.business) {
    return <div />;
  }

  const tags = props.business.categories.map((category) => (
    <span
      className={`tag ${styles["business-tag"]}`}
      key={props.business.id + category.title}
    >
      {category.title}
    </span>
  ));

  const addressLines = props.business.location.display_address.map(
    (addressLine) => <p key={props.business.id + addressLine}>{addressLine}</p>
  );

  return (
    <div className={styles["search-result"]}>
      <img
        src={props.business.image_url}
        alt="business"
        className={styles["business-image"]}
      />
      <div className={styles["business-info"]}>
        <h2 className="subtitle">{props.business.name}</h2>
        <BusinessRating
          reviewCount={props.business.review_count}
          rating={props.business.rating}
        />
        <p>
          {props.business.price} {tags}
        </p>
      </div>
      <div className={styles["contact-info"]}>
        <p>{props.business.phone}</p>
        <div>{addressLines}</div>
        <p>12345 Berlin</p>
      </div>
    </div>
  );
};

export default SearchResult;
