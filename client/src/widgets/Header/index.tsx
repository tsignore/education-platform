import React, { useState } from "react";
import cartIcon from "../../assets/icons/cart-icon.svg";
import Button from "../../shared/ui/Button";
import SearchInput from "../../shared/ui/SearchInput";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <a href={"#"} className={styles.logo}>
          Udemy
        </a>

        <Button variant="text" color="black" size="medium">
          Каталог
        </Button>
        <div className={styles.search}>
          <SearchInput
            value={searchValue}
            onChange={handleSearchChange}
            placeholder={"Ищите что угодно"}
          />
        </div>
      </div>

      <div className={styles.right}>
        <Button variant="outlined" color="black" size="medium">
          Вход
        </Button>
        <Button variant="filled" color="black" size="medium">
          Регистрация
        </Button>
        <Button
          variant="text"
          icon={<img src={cartIcon} alt="Cart" className={styles.cartIcon} />}
          children={undefined}
        />
      </div>
    </header>
  );
};

export default Header;
