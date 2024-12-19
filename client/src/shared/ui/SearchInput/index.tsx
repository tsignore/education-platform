import React from "react";
import styles from "./SearchInput.module.scss";
import searchIcon from "../../../assets/icons/search-icon.svg";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div className={`${styles.searchInputWrapper} ${className}`}>
      <div className={styles.iconWrapper}>
        <img src={searchIcon} className={styles.icon} />
      </div>
      <input
        type="text"
        className={styles.searchInput}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
